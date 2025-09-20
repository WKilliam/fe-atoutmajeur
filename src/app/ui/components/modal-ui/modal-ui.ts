import {ButtonUiInterface, InputUiInterface, ModalUiInterface} from '@interfaces';
import {Component, computed, EventEmitter, Input, Output, signal} from '@angular/core';
import {ButtonUi} from '../button-ui/button-ui';
import {IntpusUi} from '../intpus-ui/intpus-ui';

@Component({
  selector: 'modal-ui',
  imports: [
    ButtonUi,
    IntpusUi
  ],
  template: `
    @if (modal$().isOpen) {
      <div class="fixed inset-0 z-50 flex items-center justify-center p-4"
           (click)="onOverlayClick($event)"
           [class]="modal$().customClass">

        <!-- Overlay avec effet de flou -->
        <div class="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-200"></div>

        <!-- Contenu de la modale -->
        <div class="relative bg-white rounded-2xl shadow-2xl w-full transform transition-all duration-200 scale-100"
             [class]="modalSizeClass()"
             (click)="$event.stopPropagation()">

          <!-- Header -->
          <div class="flex items-center justify-between p-6 border-b border-gray-200">
            <p class="text-2xl font-semibold text-gray-900">
              {{ modal$().title }}
            </p>
            @if (modal$().closable) {
              <button-ui [config]="closeButtonConfig()"></button-ui>
            }
          </div>

          <!-- Contenu principal -->
          <div class="p-6">
            <!-- Contenu string -->
            @if (modal$().contentText) {
              <div [innerHTML]="modal$().contentText"></div>
            }

            <!-- Contenu InputUiInterface[] avec grille intelligente -->
            @if (modal$().contentInput && modal$().contentInput!.length > 0) {
              <div [class]="inputContainerClass()">
                @for (input of modal$().contentInput; track $index) {
                  <intpus-ui [input]="input"></intpus-ui>
                }
              </div>
            }

            <!-- Projection de contenu classique -->
            <ng-content></ng-content>
          </div>

          <!-- Footer avec boutons dynamiques -->
          @if (modal$().btnOptions.length > 0) {
            <div class="p-6 pt-0">
              <div [class]="buttonContainerClass()">
                @for (button of modal$().btnOptions; track $index) {
                  <button-ui [config]="button"></button-ui>
                }
              </div>
            </div>
          }
        </div>
      </div>
    }
  `,
  styleUrl: './modal-ui.scss'
})
export class ModalUi {

  // Maps de classes statiques
  private static readonly SIZE_CLASSES = {
    xs: 'max-w-xs',
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl'
  } as const;

  // Signal pour la configuration de la modale
  protected modal$ = signal<ModalUiInterface>({
    title: '',
    btnOptions: [],
    isOpen: false,
    size: 'md',
    closable: true,
    closeOnOverlay: true,
    btnCloseButton: {
      variant: 'iconBtn',
      icon: { name: 'X' },
      callback: (event: MouseEvent) => {
        // Le parent doit fournir ce callback
        console.warn('btnCloseButton callback not implemented');
      }
    }
  });

  // Signals computed pour les classes CSS
  protected modalSizeClass = computed(() => {
    return ModalUi.SIZE_CLASSES[this.modal$().size || 'md'] || 'max-w-md';
  });

  protected inputContainerClass = computed(() => {
    const inputCount = this.modal$().contentInput?.length || 0;

    if (inputCount === 0) return '';
    if (inputCount === 1) return 'grid grid-cols-1 gap-4';
    if (inputCount === 2) return 'grid grid-cols-2 gap-4';

    // 3+ inputs : 2 colonnes max
    return 'grid grid-cols-2 gap-4';
  });

  protected buttonContainerClass = computed(() => {
    const btnCount = this.modal$().btnOptions.length;

    if (btnCount === 0) return '';
    if (btnCount === 1) return 'flex gap-3';
    if (btnCount === 2) return 'grid grid-cols-2 gap-3';
    if (btnCount === 3) return 'grid grid-cols-3 gap-3';
    if (btnCount === 4) return 'grid grid-cols-2 gap-3';
    if (btnCount === 5) return 'grid grid-cols-3 gap-3';
    if (btnCount === 6) return 'grid grid-cols-2 gap-3';

    // Plus de 6 boutons : 3 colonnes max
    return 'grid grid-cols-3 gap-3';
  });

  protected closeButtonConfig = computed(() => ({
    variant: 'iconBtn' as const,
    icon: { name: 'X' },
    ...this.modal$().btnCloseButton
  }));

  // Output pour notifier la fermeture
  // @Output() close = new EventEmitter<void>();

  // Setter pour l'input qui met à jour le signal
  @Input() set modal(value: ModalUiInterface) {
    this.modal$.set(value);
  }

  // Getter pour l'input
  get modal(): ModalUiInterface {
    return this.modal$();
  }

  // Méthodes
  protected onOverlayClick(event: Event) {
    if (event.target === event.currentTarget && this.modal$().closeOnOverlay) {
      // Le parent doit gérer la fermeture via le callback du btnCloseButton
      if (this.modal$().btnCloseButton?.callback) {
        this.modal$().btnCloseButton.callback(new MouseEvent('click'));
      }
    }
  }
}
