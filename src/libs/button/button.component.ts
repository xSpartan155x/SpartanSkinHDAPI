import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() options: any = {
    label: 'label',
    variant: 'primary',
  };
}
