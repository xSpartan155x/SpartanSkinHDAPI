import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'lib-dropdown',
  imports: [CommonModule, RouterLink],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
})
export class DropdownComponent {
  @Input() options: any = {
    label: 'label',
    sections: [
      {
        title: 'section',
        options: [{ title: 'option', path: '#' }],
      },
    ],
  };
}
