import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'lib-select',
  imports: [CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
})
export class SelectComponent implements ControlValueAccessor {
  @Input() options: any;
  
  value: string = '';

  // Funzioni che Angular inietta
  private onChange: (value: any) => void = () => {};
  private onTouched: () => void = () => {};

  // Metodo obbligatorio: scrive valore dall'esterno
  writeValue(value: any): void {
    this.value = value;
  }

  // Metodo obbligatorio: registra callback per i cambiamenti
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  // Metodo obbligatorio: registra callback per touched
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  // Evento al cambio select
  onSelectChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.value = select.value;
    this.onChange(this.value);
    this.onTouched();
  }
}
