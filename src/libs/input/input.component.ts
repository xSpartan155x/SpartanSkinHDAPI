import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'lib-input',
  imports: [CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  @Input() options: any;
  value: string = '';

  private onChange: (value: any) => void = () => {};
  private onTouched: () => void = () => {};

  // Scrive valore da esterno → interno
  writeValue(value: any): void {
    this.value = value;
  }

  // Registra callback su cambio valore
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  // Registra callback su blur/touch
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  // Evento input
  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.onChange(this.value);
    this.onTouched();
  }
}
