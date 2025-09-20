import {Injectable, signal} from '@angular/core';
import {FormfieldAuthUiInterface} from '@interfaces';
import {AuthType} from '@enums';
import {
  CONST_UserTypeSelectOptions
} from '@constants';

@Injectable({providedIn: 'root'})
export class AuthSignals {

  private currentAuthType$ = signal<AuthType>(AuthType.LOGIN);

  private readonly formFieldAuthLogin$ = signal<FormfieldAuthUiInterface>({
    currentTypeAuth: this.currentAuthType$(),
    btnAuth: {
      label: 'Se connecter',
      variant: 'primary',
      sizeW: 'full',
      loading: false,
      callback: (event: MouseEvent) => {
        console.log('Login clicked', event);
        // TODO: Implement login logic
      }
    },
    signInButton: {
      label: "S'inscrire",
      variant: 'textbtn',
      callback: (event: MouseEvent) => {
        this.switchToRegister();
      }
    },
    inputfieldAuth: [
      {
        type: 'email',
        placeholder: 'Votre email',
        label: 'Email',
        required: true,
        errorMessage: '',
        callback: (event: Event) => {
          const target = event.target as HTMLInputElement;
          this.updateFieldValue(AuthType.LOGIN, 0, target.value);
        }
      },
      {
        type: 'password',
        placeholder: 'Votre mot de passe',
        label: 'Mot de passe',
        required: true,
        errorMessage: '',
        callback: (event: Event) => {
          const target = event.target as HTMLInputElement;
          this.updateFieldValue(AuthType.LOGIN, 1, target.value);
        }
      }
    ]
  });

  private readonly formFieldAuthRegister$ = signal<FormfieldAuthUiInterface>({
    currentTypeAuth: this.currentAuthType$(),
    btnAuth: {
      label: "S'inscrire",
      variant: 'primary',
      sizeW: 'full',
      loading: false,
      callback: (event: MouseEvent) => {
        console.log('Register clicked', event);
        // TODO: Implement register logic
      }
    },
    signInButton: {
      label: "Se connecter",
      variant: 'textbtn',
      callback: (event: MouseEvent) => {
        this.switchToLogin();
      }
    },
    selectUserType: {
      options: CONST_UserTypeSelectOptions,
      required: true,
      callback: function (event: Event): void {
        throw new Error("Function not implemented.");
      }
    },
    inputfieldAuth: [
      {
        type: 'text',
        placeholder: 'Votre prénom',
        label: 'Prénom',
        required: true,
        errorMessage: '',
        callback: (event: Event) => {
          const target = event.target as HTMLInputElement;
          this.updateFieldValue(AuthType.REGISTER, 0, target.value);
        }
      },
      {
        type: 'text',
        placeholder: 'Votre nom',
        label: 'Nom',
        required: true,
        errorMessage: '',
        callback: (event: Event) => {
          const target = event.target as HTMLInputElement;
          this.updateFieldValue(AuthType.REGISTER, 1, target.value);
        }
      },
      {
        type: 'email',
        placeholder: 'Votre email',
        label: 'Email',
        required: true,
        errorMessage: '',
        callback: (event: Event) => {
          const target = event.target as HTMLInputElement;
          this.updateFieldValue(AuthType.REGISTER, 2, target.value);
        }
      },
      {
        type: 'password',
        placeholder: 'Choisir un mot de passe',
        label: 'Mot de passe',
        required: true,
        errorMessage: '',
        callback: (event: Event) => {
          const target = event.target as HTMLInputElement;
          this.updateFieldValue(AuthType.REGISTER, 3, target.value);
        },
      },
    ]
  });

  private fieldValues = new Map<string, string>();

  getFormFieldAuthLogin() {
    return this.formFieldAuthLogin$();
  }

  getFormFieldAuthRegister() {
    return this.formFieldAuthRegister$();
  }

  getCurrentAuthType() {
    return this.currentAuthType$();
  }

  switchToLogin() {
    this.currentAuthType$.set(AuthType.LOGIN);
    this.updateSignals();
  }

  switchToRegister() {
    this.currentAuthType$.set(AuthType.REGISTER);
    this.updateSignals();
  }

  private updateSignals() {
    const currentType = this.currentAuthType$();

    const loginForm = this.formFieldAuthLogin$();
    this.formFieldAuthLogin$.set({
      ...loginForm,
      currentTypeAuth: currentType
    });

    const registerForm = this.formFieldAuthRegister$();
    this.formFieldAuthRegister$.set({
      ...registerForm,
      currentTypeAuth: currentType
    });
  }

  updateFieldValue(authType: AuthType, fieldIndex: number, value: string) {
    const key = `${authType}_${fieldIndex}`;
    this.fieldValues.set(key, value);
  }

  getFieldValue(authType: AuthType, fieldIndex: number): string {
    const key = `${authType}_${fieldIndex}`;
    return this.fieldValues.get(key) || '';
  }

  setFieldError(authType: AuthType, fieldIndex: number, error: string) {
    const formField = authType === AuthType.LOGIN ?
      this.formFieldAuthLogin$ : this.formFieldAuthRegister$;

    const currentForm = formField();
    const updatedFields = [...currentForm.inputfieldAuth];
    updatedFields[fieldIndex] = { ...updatedFields[fieldIndex], errorMessage: error };

    formField.set({
      ...currentForm,
      inputfieldAuth: updatedFields
    });
  }

  setLoading(authType: AuthType, loading: boolean) {
    const formField = authType === AuthType.LOGIN ?
      this.formFieldAuthLogin$ : this.formFieldAuthRegister$;

    const currentForm = formField();
    formField.set({
      ...currentForm,
      btnAuth: { ...currentForm.btnAuth, loading }
    });
  }

  isFormValid(authType: AuthType): boolean {
    const form = authType === AuthType.LOGIN ?
      this.getFormFieldAuthLogin() : this.getFormFieldAuthRegister();

    return form.inputfieldAuth.every((field, index) => {
      if (field.required) {
        const value = this.getFieldValue(authType, index);
        return value.trim() !== '';
      }
      return true;
    });
  }

  getFormData(authType: AuthType) {
    if (authType === AuthType.LOGIN) {
      return {
        email: this.getFieldValue(authType, 0),
        password: this.getFieldValue(authType, 1)
      };
    } else {
      return {
        firstName: this.getFieldValue(authType, 0),
        lastName: this.getFieldValue(authType, 1),
        email: this.getFieldValue(authType, 2),
        password: this.getFieldValue(authType, 3)
      };
    }
  }
}
