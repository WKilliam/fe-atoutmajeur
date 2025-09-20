import {Component, signal} from '@angular/core';
import {ModalUi} from './ui/components/modal-ui/modal-ui';
import {ModalUiInterface} from '@interfaces';
import {Dashboard} from '@ui-views';

@Component({
  selector: 'app-root',
  imports: [
    ModalUi,
    Dashboard
  ],
  template: `
        <dashboard-view/>
  `,
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('fe-atoutmajeur');

  // myModal: ModalUiInterface = {
  //   btnCloseButton: {
  //     variant: 'iconBtn',
  //     sizeW: 'sm',
  //     textAlign: 'right',
  //     iconPosition: 'center',
  //     icon: {
  //       name: 'x',
  //       color: 'red',
  //     },
  //     callback: function (event: MouseEvent): void {
  //       throw new Error("Function not implemented.");
  //     }
  //   },
  //   isOpen: true,
  //   title: 'Ma modale',
  //   contentInput: [
  //     {
  //       label: 'Email',
  //       type: 'email',
  //       required: true,
  //       placeholder: 'votre@email.com',
  //       errorMessage: '',
  //       icon: 'plus',
  //       iconPosition: 'left'
  //     },
  //     {
  //       label: 'Email',
  //       type: 'email',
  //       required: true,
  //       placeholder: 'votre@email.com',
  //       errorMessage: '',
  //       icon: 'plus',
  //       iconPosition: 'left'
  //     },
  //     {
  //       label: 'Email',
  //       type: 'email',
  //       required: true,
  //       placeholder: 'votre@email.com',
  //       errorMessage: '',
  //       icon: 'plus',
  //       iconPosition: 'left'
  //     },
  //     {
  //       label: 'Email',
  //       type: 'email',
  //       required: true,
  //       placeholder: 'votre@email.com',
  //       errorMessage: '',
  //       icon: 'plus',
  //       iconPosition: 'left'
  //     },
  //     {
  //       label: 'Email',
  //       type: 'email',
  //       required: true,
  //       placeholder: 'votre@email.com',
  //       errorMessage: '',
  //       icon: 'plus',
  //       iconPosition: 'left'
  //     },
  //     {
  //       label: 'Email',
  //       type: 'email',
  //       required: true,
  //       placeholder: 'votre@email.com',
  //       errorMessage: '',
  //       icon: 'plus',
  //       iconPosition: 'left'
  //     }
  //   ],
  //   btnOptions: [
  //     {
  //       label: 'Annuler',
  //       variant: 'secondary',
  //       sizeW: 'full',
  //       textAlign:'center'
  //     },
  //     {
  //       label: 'Confirmer',
  //       variant: 'primary',
  //       sizeW: 'full',
  //       textAlign:'center'
  //     }
  //   ],
  //   size: 'xl',
  //   closable: true,
  //   closeOnOverlay: true,
  //   callBackBtnOptions: (button) => {
  //     console.log('Bouton cliqué:', button.label);
  //     if (button.variant === 'primary') {
  //       // Logique de confirmation
  //     } else {
  //       this.myModal.isOpen = false;
  //     }
  //   }
  // };
  //
  // onModalClose() {
  //   console.log('Modale fermée');
  // }
}
