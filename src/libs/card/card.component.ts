import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() options: {
    title: string;
    subtitle?: string;
    price: number;
    image?: string;
    product?: string;
    type?: string;
    resolution?: string;
  } = {
    title: '',
    price: 0,
  };
}
