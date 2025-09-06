import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-section',
  imports: [],
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss'
})
export class SectionComponent {
  @Input() large: boolean = true 
}
