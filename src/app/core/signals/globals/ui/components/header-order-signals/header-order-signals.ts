import {Injectable, signal} from '@angular/core';
import {OrderHeaderUiInterface, InputUiInterface, CreateOrderInterface} from '@interfaces';
import {TYPE_User, TYPE_GarmentLabel} from '@types';
import {CONST_UserRole} from '@constants';
import {HttpApiCore} from '../../../../../http/httpApiCore';

@Injectable({providedIn: 'root'})
export class HeaderOrderSignals {

  private readonly headerOrder$ = signal<OrderHeaderUiInterface>({
    title: "",
    description: "",
  });

  private readonly createOrderForm$ = signal<Partial<CreateOrderInterface>>({});

  constructor(protected readonly http: HttpApiCore) {}

  get headerOrder(): OrderHeaderUiInterface {
    return this.headerOrder$();
  }

  setOrderHeader(userType: TYPE_User): void {
    if(userType === CONST_UserRole.Admin) {
      this.headerOrder$.set({
        title: "My Current Orders Admin",
        description: "Current order status",
      });
    } else {
      this.headerOrder$.set({
        title: "My Current Orders",
        description: "Current order status",
        btn: {
          label: "Create new order",
          iconPosition: "left",
          icon: {
            name: 'plus',
            class: 'w-6 h-6'
          },
          callback: (event: MouseEvent) => this.openCreateOrderModal()
        },
        modal: {
          isOpen: false,
          title: "Create New Order",
          contentInput: [
            {
              id: 'estimatedDate',
              placeholder: 'YYYY-MM-DD',
              type: 'text',
              class: 'w-full h-10 mb-4',
              disabled: false,
              label: 'Estimated Date (Optional)',
              required: false,
              value: '',
              errorMessage: '',
              callback: (event: Event) => this.handleInputChange(event, 'estimatedDate')
            },
            {
              id: 'numberItems',
              placeholder: 'Enter number of items',
              type: 'number',
              class: 'w-full h-10 mb-4',
              disabled: false,
              label: 'Number of Items *',
              required: true,
              value: '',
              errorMessage: '',
              callback: (event: Event) => this.handleInputChange(event, 'numberItems')
            },
            {
              id: 'garmentType',
              placeholder: 'e.g., Shirt, Pants, Dress...',
              type: 'text',
              class: 'w-full h-10 mb-4',
              disabled: false,
              label: 'Garment Type *',
              required: true,
              value: '',
              errorMessage: '',
              callback: (event: Event) => this.handleInputChange(event, 'garmentType')
            },
            {
              id: 'customerComment',
              placeholder: 'Enter customer comments or special requirements',
              type: 'text',
              class: 'w-full h-20 mb-4',
              disabled: false,
              label: 'Customer Comments (Optional)',
              required: false,
              value: '',
              errorMessage: '',
              callback: (event: Event) => this.handleInputChange(event, 'customerComment')
            }
          ],
          btnOptions: [
            {
              label: "Create Order",
              iconPosition: "left",
              icon: {
                name: 'plus',
                class: 'w-6 h-6'
              },
              callback: (event: MouseEvent) => this.handleCreateOrder(event)
            },
            {
              label: "Cancel",
              iconPosition: "left",
              icon: {
                name: 'x',
                class: 'w-6 h-6'
              },
              callback: (event: MouseEvent) => this.closeModal()
            }
          ],
          closable: true,
          closeOnOverlay: true,
          btnCloseButton: {
            callback: (event: MouseEvent) => this.closeModal()
          }
        }
      });
    }
  }

  private openCreateOrderModal(): void {
    this.headerOrder$.update(current => ({
      ...current,
      modal: {
        ...current.modal!,
        isOpen: true
      }
    }));
  }

  private handleInputChange(event: Event, field: string): void {
    const target = event.target as HTMLInputElement;
    const value = target.value;

    this.createOrderForm$.update(current => {
      if (field === 'customerComment') {
        return {
          ...current,
          [field]: value ? value.split(',').map(comment => comment.trim()) : []
        };
      } else if (field === 'numberItems') {
        return {
          ...current,
          [field]: parseInt(value) || 0
        };
      } else {
        return {
          ...current,
          [field]: value
        };
      }
    });
    this.clearFieldError(field);
  }

  private closeModal(): void {
    this.headerOrder$.update(current => ({
      ...current,
      modal: {
        ...current.modal!,
        isOpen: false
      }
    }));
    this.createOrderForm$.set({});
    this.clearAllErrors();
  }

  private handleCreateOrder(event: MouseEvent): void {
    event.preventDefault();

    const formData = this.createOrderForm$();

    if (!this.validateForm(formData)) {
      return;
    }

    const newOrder: CreateOrderInterface = {
      estimatedDate: formData.estimatedDate || undefined,
      numberItems: formData.numberItems!,
      garmentType: formData.garmentType as TYPE_GarmentLabel,
      customerComment: formData.customerComment || []
    };
    this.http.createOrder(newOrder);
    this.closeModal();
  }

  private validateForm(formData: Partial<CreateOrderInterface>): boolean {
    let isValid = true;

    if (!formData.numberItems || formData.numberItems <= 0) {
      this.setFieldError('numberItems', 'Number of items is required and must be greater than 0');
      isValid = false;
    }

    if (!formData.garmentType || formData.garmentType.trim() === '') {
      this.setFieldError('garmentType', 'Garment type is required');
      isValid = false;
    }

    return isValid;
  }

  private setFieldError(fieldId: string, errorMessage: string): void {
    this.headerOrder$.update(current => {
      if (!current.modal?.contentInput) return current;

      const updatedInputs = current.modal.contentInput.map(input =>
        input.id === fieldId
          ? { ...input, errorMessage }
          : input
      );

      return {
        ...current,
        modal: {
          ...current.modal,
          contentInput: updatedInputs
        }
      };
    });
  }

  private clearFieldError(fieldId: string): void {
    this.headerOrder$.update(current => {
      if (!current.modal?.contentInput) return current;

      const updatedInputs = current.modal.contentInput.map(input =>
        input.id === fieldId
          ? { ...input, errorMessage: '' }
          : input
      );

      return {
        ...current,
        modal: {
          ...current.modal,
          contentInput: updatedInputs
        }
      };
    });
  }

  private clearAllErrors(): void {
    this.headerOrder$.update(current => {
      if (!current.modal?.contentInput) return current;

      const updatedInputs = current.modal.contentInput.map(input =>
        ({ ...input, errorMessage: '' })
      );

      return {
        ...current,
        modal: {
          ...current.modal,
          contentInput: updatedInputs
        }
      };
    });
  }

  getCreateOrderFormData(): Partial<CreateOrderInterface> {
    return this.createOrderForm$();
  }
}
