import { Component } from '@angular/core';
import { HeadingComponent } from '../../libs/heading/heading.component';
import { CarouselComponent } from '../../libs/carousel/carousel.component';
import { HeroComponent } from '../../libs/hero/hero.component';
import { NoCarouselComponent } from '../../libs/no-carousel/no-carousel.component';

@Component({
  selector: 'app-home',
  imports: [HeadingComponent, CarouselComponent, HeroComponent, NoCarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public aboutUs = {
    icon: 'fa-solid fa-users',
    heading: 'About Us',
    large: true,
    variant: 'primary',
    order: 'left-right',
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora doloribus eius itaque quia molestiae ad debitis consequuntur voluptate nobis ducimus aspernatur pariatur dolor reprehenderit, quod libero nulla earum quo veniam! Nostrum esse aut rerum. Cum amet explicabo omnis esse
          perferendis illo quos libero repellendus culpa voluptate tempore aperiam vero iure animi dolor officiis, molestias non autem? Sunt aspernatur ipsam quaerat? Veniam impedit fuga officia quae sunt expedita? Soluta debitis reprehenderit voluptates, nostrum unde eaque eos! Iste laborum,
          enim magnam id voluptatem sit deserunt earum deleniti. A corporis beatae ad suscipit? Tempora necessitatibus dolor, deserunt suscipit minus a, quisquam nesciunt aperiam harum, provident aliquam eaque dolores! Nihil ab enim aut delectus voluptatum at quo, autem sint excepturi vitae,
          possimus, perspiciatis adipisci. Dignissimos ipsum reprehenderit id dolores, ex quod eveniet. Voluptatem deserunt quia maxime aliquam repellat! Ut, sunt. Culpa, quis illum incidunt tempore vel ex ipsam vero suscipit deleniti, delectus asperiores aspernatur?
    `,
    button: {
      label: 'About Us',
      variant: 'primary',
    },
  };
  public howItWorks = {
    icon: 'fa-solid fa-question',
    heading: 'How it works',
    large: false,
    variant: 'secondary',
    order: 'right-left',
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora doloribus eius itaque quia molestiae ad debitis consequuntur voluptate nobis ducimus aspernatur pariatur dolor reprehenderit, quod libero nulla earum quo veniam! Nostrum esse aut rerum. Cum amet explicabo omnis esse
          perferendis illo quos libero repellendus culpa voluptate tempore aperiam vero iure animi dolor officiis, molestias non autem? Sunt aspernatur ipsam quaerat? Veniam impedit fuga officia quae sunt expedita? Soluta debitis reprehenderit voluptates, nostrum unde eaque eos! Iste laborum,
          enim magnam id voluptatem sit deserunt earum deleniti. A corporis beatae ad suscipit? Tempora necessitatibus dolor, deserunt suscipit minus a, quisquam nesciunt aperiam harum, provident aliquam eaque dolores! Nihil ab enim aut delectus voluptatum at quo, autem sint excepturi vitae,
          possimus, perspiciatis adipisci. Dignissimos ipsum reprehenderit id dolores, ex quod eveniet. Voluptatem deserunt quia maxime aliquam repellat! Ut, sunt. Culpa, quis illum incidunt tempore vel ex ipsam vero suscipit deleniti, delectus asperiores aspernatur?
    `,
    button: {
      label: 'How it works',
      variant: 'primary',
    },
  };
}
