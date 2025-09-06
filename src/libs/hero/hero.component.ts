import { Component, Input, OnInit } from '@angular/core';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'lib-hero',
  imports: [ButtonComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit {
  @Input() options: any = {
    icon: 'fa-solid fa-users',
    heading: 'About Us',
    variant: 'primary',
    large: true,
    order: 'left-right',
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora doloribus eius itaque quia molestiae ad debitis consequuntur voluptate nobis ducimus aspernatur pariatur dolor reprehenderit, quod libero nulla earum quo veniam! Nostrum esse aut rerum. Cum amet explicabo omnis esse
          perferendis illo quos libero repellendus culpa voluptate tempore aperiam vero iure animi dolor officiis, molestias non autem? Sunt aspernatur ipsam quaerat? Veniam impedit fuga officia quae sunt expedita? Soluta debitis reprehenderit voluptates, nostrum unde eaque eos! Iste laborum,
          enim magnam id voluptatem sit deserunt earum deleniti. A corporis beatae ad suscipit? Tempora necessitatibus dolor, deserunt suscipit minus a, quisquam nesciunt aperiam harum, provident aliquam eaque dolores! Nihil ab enim aut delectus voluptatum at quo, autem sint excepturi vitae,
          possimus, perspiciatis adipisci. Dignissimos ipsum reprehenderit id dolores, ex quod eveniet. Voluptatem deserunt quia maxime aliquam repellat! Ut, sunt. Culpa, quis illum incidunt tempore vel ex ipsam vero suscipit deleniti, delectus asperiores aspernatur?
    `,
    button: {
      label: 'About Us',
      variant: 'primary'
    }
  }
  public background: any

  ngOnInit(): void {
    this.checkVariant()
  }

  private checkVariant() {
    switch (this.options.variant) {
      case 'primary':
          this.background = 'dark:bg-gray-900'
        break;
      case 'secondary':
          this.background = 'dark:bg-gray-800'
        break;
    }
  } 
}
