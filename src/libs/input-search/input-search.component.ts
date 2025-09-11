import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
@Component({
  selector: 'lib-input-search',
  imports: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputSearchComponent),
      multi: true,
    },
  ],
  templateUrl: './input-search.component.html',
  styleUrl: './input-search.component.scss',
})
export class InputSearchComponent {
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
