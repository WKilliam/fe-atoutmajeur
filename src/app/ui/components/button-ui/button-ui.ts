import {Component, computed, Input, signal} from '@angular/core';
import {ButtonUiInterface} from '@interfaces';
import {IconUi} from '../icons-ui/icons-ui';

@Component({
  selector: 'button-ui',
  imports: [
    IconUi
  ],
  template:`
    <button
      [class]="buttonClasses()"
      [disabled]="config$().disabled"
      (click)="config$().callback($event)">
      @if (config$().loading) {
        <span class="animate-spin">⏳</span>
        @if (config$().label) {
          <span>{{ config$().label }}</span>
        }
      } @else {
        <!-- Icône seule au centre (iconBtn ou iconPosition="center") -->
        @if (config$().icon && (config$().variant === 'iconBtn' || config$().iconPosition === 'center')) {
          <icon-ui [icon]="config$().icon!"></icon-ui>
        }

        <!-- Layout normal avec label -->
        @if (config$().variant !== 'iconBtn' && config$().iconPosition !== 'center') {
          <!-- Icône à gauche -->
          @if (config$().icon && (!config$().iconPosition || config$().iconPosition === 'left')) {
            <icon-ui [icon]="config$().icon!"></icon-ui>
          }

          <!-- Label -->
          @if (config$().label) {
            <span>{{ config$().label }}</span>
          }

          <!-- Icône à droite -->
          @if (config$().icon && config$().iconPosition === 'right') {
            <icon-ui [icon]="config$().icon!"></icon-ui>
          }
        }
      }
    </button>
  `,
})
export class ButtonUi {

  private static readonly VARIANT_CLASSES = {
    primary: 'bg-primary hover:bg-secondary text-light',
    secondary: 'bg-secondary hover:bg-primary text-dark',
    outline: 'border border-primary text-primary hover:bg-primary hover:text-light',
    ghost: 'text-primary hover:bg-accent',
    danger: 'bg-error hover:bg-error text-light opacity-90 hover:opacity-100',
    sidebarActif: 'bg-blue-500 text-white hover:bg-blue-600 w-full',
    sidebarInactif: 'text-gray-700 hover:bg-gray-100 w-full',
    iconBtn: 'p-2 w-10 h-10 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors justify-center',
    textbtn: 'bg-transparent text-primary hover:text-secondary underline-offset-4 hover:underline'
  } as const;

  private static readonly SIZE_W_CLASSES = {
    auto: 'w-auto',
    full: 'w-full',
    fit: 'w-fit',
    xs: 'w-16',
    sm: 'w-20',
    md: 'w-24',
    lg: 'w-32',
    xl: 'w-40'
  } as const;

  private static readonly SIZE_H_CLASSES = {
    xs: 'px-2 py-1 text-xs',
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl'
  } as const;

  private static readonly TEXT_ALIGN_CLASSES = {
    left: 'justify-start text-left',
    center: 'justify-center text-center',
    right: 'justify-end text-right'
  } as const;

  protected config$ = signal<ButtonUiInterface>({
    callback(event: MouseEvent): void {
      throw new Error("Function not implemented.");
    },
    label: 'Button'
  });

  protected buttonClasses = computed(() => this.calculateButtonClasses());

  @Input({required: true}) set config(value: ButtonUiInterface) {
    this.config$.set(value);
  }

  get config(): ButtonUiInterface {
    return this.config$();
  }

  private calculateButtonClasses(): string {
    const config = this.config$();
    const baseClasses = 'rounded-lg font-medium transition-colors flex items-center space-x-2';

    let classes = [baseClasses];

    const variant = config.variant || 'primary';
    classes.push(ButtonUi.VARIANT_CLASSES[variant]);

    if (variant !== 'iconBtn') {
      classes.push(ButtonUi.SIZE_W_CLASSES[config.sizeW || 'auto']);
      classes.push(ButtonUi.SIZE_H_CLASSES[config.sizeH || 'md']);
    }

    if (variant !== 'iconBtn') {
      classes.push(ButtonUi.TEXT_ALIGN_CLASSES[config.textAlign || 'center']);
    }

    return classes.join(' ');
  }
}
