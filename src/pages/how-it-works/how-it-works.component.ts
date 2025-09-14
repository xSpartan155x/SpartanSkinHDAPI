import { Component } from '@angular/core';
import { HeroComponent } from '../../libs/hero/hero.component';
@Component({
  selector: 'app-how-it-works',
  imports: [HeroComponent],
  templateUrl: './how-it-works.component.html',
  styleUrl: './how-it-works.component.scss',
})
export class HowItWorksComponent {
    public aboutUsOptions: any = {
    icon: 'fa-solid fa-users',
    heading: 'About Us',
    variant: 'secondary',
    large: false,
    order: 'left-right',
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora doloribus eius itaque quia molestiae ad debitis consequuntur voluptate nobis ducimus aspernatur pariatur dolor reprehenderit, quod libero nulla earum quo veniam! Nostrum esse aut rerum. Cum amet explicabo omnis esse
          perferendis illo quos libero repellendus culpa voluptate tempore aperiam vero iure animi dolor officiis, molestias non autem? Sunt aspernatur ipsam quaerat? Veniam impedit fuga officia quae sunt expedita? Soluta debitis reprehenderit voluptates, nostrum unde eaque eos! Iste laborum,
          enim magnam id voluptatem sit deserunt earum deleniti. A corporis beatae ad suscipit? Tempora necessitatibus dolor, deserunt suscipit minus a, quisquam nesciunt aperiam harum, provident aliquam eaque dolores! Nihil ab enim aut delectus voluptatum at quo, autem sint excepturi vitae,
          possimus, perspiciatis adipisci. Dignissimos ipsum reprehenderit id dolores, ex quod eveniet. Voluptatem deserunt quia maxime aliquam repellat! Ut, sunt. Culpa, quis illum incidunt tempore vel ex ipsam vero suscipit deleniti, delectus asperiores aspernatur?
    `,
  };
  public whyWeAreDoingThis: any = {
    icon: 'fa-solid fa-users',
    heading: 'Why we are doing this',
    variant: 'primary',
    large: true,
    order: 'right-left',
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora doloribus eius itaque quia molestiae ad debitis consequuntur voluptate nobis ducimus aspernatur pariatur dolor reprehenderit, quod libero nulla earum quo veniam! Nostrum esse aut rerum. Cum amet explicabo omnis esse
          perferendis illo quos libero repellendus culpa voluptate tempore aperiam vero iure animi dolor officiis, molestias non autem? Sunt aspernatur ipsam quaerat? Veniam impedit fuga officia quae sunt expedita? Soluta debitis reprehenderit voluptates, nostrum unde eaque eos! Iste laborum,
          enim magnam id voluptatem sit deserunt earum deleniti. A corporis beatae ad suscipit? Tempora necessitatibus dolor, deserunt suscipit minus a, quisquam nesciunt aperiam harum, provident aliquam eaque dolores! Nihil ab enim aut delectus voluptatum at quo, autem sint excepturi vitae,
          possimus, perspiciatis adipisci. Dignissimos ipsum reprehenderit id dolores, ex quod eveniet. Voluptatem deserunt quia maxime aliquam repellat! Ut, sunt. Culpa, quis illum incidunt tempore vel ex ipsam vero suscipit deleniti, delectus asperiores aspernatur?
    `,
  };
}
