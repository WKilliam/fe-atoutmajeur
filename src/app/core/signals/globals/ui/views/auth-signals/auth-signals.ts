import {effect, Injectable, signal} from '@angular/core';
import {FormfieldAuthUiInterface, SelectUiOptionsInterface} from '@interfaces';
import {AuthType} from '@enums';
import { CONST_UserTypeSelectOptions} from '@constants';
import {HttpApiCore} from '../../../../../http/httpApiCore';

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
        this.handleLogin();
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
        id: 'email_login',
        type: 'email',
        placeholder: 'Votre email',
        label: 'Email',
        required: true,
        value: '',
        errorMessage: '',
        callback: (event: Event) => {
          const target = event.target as HTMLInputElement;
          this.updateFieldValueInput(AuthType.LOGIN, 0, target.value);
        }
      },
      {
        id: 'password_login',
        type: 'password',
        placeholder: 'Votre mot de passe',
        label: 'Mot de passe',
        required: true,
        value: '',
        errorMessage: '',
        callback: (event: Event) => {
          const target = event.target as HTMLInputElement;
          this.updateFieldValueInput(AuthType.LOGIN, 1, target.value);
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
        this.handleRegister();
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
      id: 'user_type_register',
      options: CONST_UserTypeSelectOptions,
      required: true,
      value: '',
      callback: (event: Event) => {
        const target = event.target as HTMLSelectElement;
        const selectedValue = target.value;
        const selectedOption = CONST_UserTypeSelectOptions.find(
          option => option.value === selectedValue
        );
        if (selectedOption) {
          this.updateFieldValueSelect(selectedOption);
        }
      }
    },
    inputfieldAuth: [
      {
        id: 'firstName_register',
        type: 'text',
        placeholder: 'Votre prénom',
        label: 'Prénom',
        required: true,
        value: '',
        errorMessage: '',
        callback: (event: Event) => {
          const target = event.target as HTMLInputElement;
          this.updateFieldValueInput(AuthType.REGISTER, 0, target.value);
        }
      },
      {
        id: 'lastName_register',
        type: 'text',
        placeholder: 'Votre nom',
        label: 'Nom',
        required: true,
        value: '',
        errorMessage: '',
        callback: (event: Event) => {
          const target = event.target as HTMLInputElement;
          this.updateFieldValueInput(AuthType.REGISTER, 1, target.value);
        }
      },
      {
        id: 'email_register',
        type: 'email',
        placeholder: 'Votre email',
        label: 'Email',
        required: true,
        value: '',
        errorMessage: '',
        callback: (event: Event) => {
          const target = event.target as HTMLInputElement;
          this.updateFieldValueInput(AuthType.REGISTER, 2, target.value);
        }
      },
      {
        id: 'password_register',
        type: 'password',
        placeholder: 'Choisir un mot de passe',
        label: 'Mot de passe',
        required: true,
        errorMessage: '',
        value: '',
        callback: (event: Event) => {
          const target = event.target as HTMLInputElement;
          this.updateFieldValueInput(AuthType.REGISTER, 3, target.value);
        },
      },
    ]
  });

  constructor(private readonly http: HttpApiCore) {
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

  getFormFieldAuthLogin() {
    return this.formFieldAuthLogin$();
  }

  getFormFieldAuthRegister() {
    return this.formFieldAuthRegister$();
  }

  getCurrentAuthType() {
    return this.currentAuthType$();
  }

  private updateFieldValueInput(authType: AuthType, indexOfArray: number, value: string) {
    if (authType === AuthType.REGISTER) {
      this.formFieldAuthRegister$.update(currentForm => ({
        ...currentForm,
        inputfieldAuth: currentForm.inputfieldAuth.map((field, index) =>
          index === indexOfArray
            ? {...field, value: value}
            : field
        )
      }));
    } else {
      this.formFieldAuthLogin$.update(currentForm => ({
        ...currentForm,
        inputfieldAuth: currentForm.inputfieldAuth.map((field, index) =>
          index === indexOfArray
            ? {...field, value: value}
            : field
        )
      }));
    }
  }

  private updateFieldValueSelect(value: SelectUiOptionsInterface) {

    this.formFieldAuthRegister$.update(currentForm => ({
      ...currentForm,
      selectUserType: {
        ...currentForm.selectUserType!,
        value: value.label
      }
    }));
  }


  private async handleRegister() {
    if (!this.isFormValid(AuthType.REGISTER)) {
      console.error('Formulaire d\'inscription invalide');
      return;
    }
    this.setLoading(AuthType.REGISTER, true);
    try {
      const registerData = this.getFormData(AuthType.REGISTER);
      await this.http.authRegister(registerData);
    } catch (error) {
      console.error('Erreur lors de l\'inscription:', error);
      this.setFieldError(AuthType.REGISTER, 2, 'Erreur d\'inscription');
    } finally {
      this.setLoading(AuthType.REGISTER, false);
    }
  }

  private async handleLogin() {
    if (!this.isFormValid(AuthType.LOGIN)) {
      console.error('Formulaire de connexion invalide');
      return;
    }

    this.setLoading(AuthType.LOGIN, true);
    try {
      const loginData = this.getFormData(AuthType.LOGIN);
      await this.http.authLogin(loginData);
    } catch (error) {
      console.error('Erreur lors de la connexion:', error);
      this.setFieldError(AuthType.LOGIN, 0, 'Erreur de connexion');
    } finally {
      this.setLoading(AuthType.LOGIN, false);
    }
  }

  setLoading(authType: AuthType, loading: boolean) {
    const formField = authType === AuthType.LOGIN ?
      this.formFieldAuthLogin$ : this.formFieldAuthRegister$;

    const currentForm = formField();
    formField.set({
      ...currentForm,
      btnAuth: {...currentForm.btnAuth, loading}
    });
  }

  private setFieldError(authType: AuthType, fieldIndex: number, error: string) {
    const formField = authType === AuthType.LOGIN ?
      this.formFieldAuthLogin$ : this.formFieldAuthRegister$;

    const currentForm = formField();
    const updatedFields = [...currentForm.inputfieldAuth];
    updatedFields[fieldIndex] = {...updatedFields[fieldIndex], errorMessage: error};

    formField.set({
      ...currentForm,
      inputfieldAuth: updatedFields
    });
  }

  isFormValid(authType: AuthType): boolean {
    const form = authType === AuthType.LOGIN ? this.getFormFieldAuthLogin() : this.getFormFieldAuthRegister();

    return form.inputfieldAuth.every((field, index) => {
      if (field.required) {
        return field.value !== '' && field.value !== undefined;
      }
      return true;
    });
  }

  private getFormData(authType: AuthType) {
    if (authType === AuthType.LOGIN) {
      return this.getLoginData();
    } else {
      return this.getRegisterData();
    }
  }

  private getLoginData() {
    const form = this.getFormFieldAuthLogin();
    const data = form.inputfieldAuth.reduce((acc, field) => {
      const idMap: Record<string, string> = {
        'email_login': 'email',
        'password_login': 'password'
      };

      const key = idMap[field.id];
      if (key) {
        acc[key] = field.value || '';
      }
      return acc;
    }, {} as any);

    return data;
  }

  private getRegisterData() {
    const form = this.getFormFieldAuthRegister();

    const inputData = form.inputfieldAuth.reduce((acc, field) => {
      const idMap: Record<string, string> = {
        'firstName_register': 'firstName',
        'lastName_register': 'lastName',
        'email_register': 'email',
        'password_register': 'password'
      };

      const key = idMap[field.id];
      if (key) {
        acc[key] = field.value || '';
      }
      return acc;
    }, {} as any);

    const selectedUserType = form.selectUserType?.value || '';

    const selectedOption = CONST_UserTypeSelectOptions.find(
      option => option.label === selectedUserType
    );

    return {
      ...inputData,
      role: selectedOption?.value || '',
    };
  }
}
