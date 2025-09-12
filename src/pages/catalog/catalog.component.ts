import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from '../../libs/section/section.component';
import { SelectComponent } from '../../libs/select/select.component';
import { InputSearchComponent } from '../../libs/input-search/input-search.component';
import { HeadingComponent } from '../../libs/heading/heading.component';
import { CardComponent } from '../../libs/card/card.component';
import { FormsModule } from '@angular/forms';

interface CatalogItem {
  name: string;
  products: string;
  price: number;
  artist: string;
  type?: string;
  resolution?: string;
  image?: string;
}

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [
    CommonModule,
    SectionComponent,
    SelectComponent,
    InputSearchComponent,
    HeadingComponent,
    CardComponent,
    FormsModule,
  ],
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit {
  public req = {
    productsSelected: '',
    skinTypeSelected: '',
    skinResolutionSelected: '',
    artistsSelected: '',
    search: ''
  };

  // 🔹 Mock data
  public items: CatalogItem[] = [
    {
      name: 'Dragon Slayer',
      products: 'skins',
      price: 5,
      artist: 'ArtistOne',
      type: 'hd-skins',
      resolution: '1024x',
      image: 'https://render.hdskins.de/skin/f1e17fa3c22d129ed3ff0f9cb8bafc5983884f9e4298aeb45544c366810d4848/full'
    },
    {
      name: 'Pixel Warrior',
      products: 'skins',
      price: 3,
      artist: 'ArtistTwo',
      type: 'base-skins',
      image: 'https://render.hdskins.de/skin/f1e17fa3c22d129ed3ff0f9cb8bafc5983884f9e4298aeb45544c366810d4848/full'
    },
    {
      name: 'Galaxy Elytra',
      products: 'elytras',
      price: 7,
      artist: 'ArtistOne',
      image: 'https://render.hdskins.de/skin/f1e17fa3c22d129ed3ff0f9cb8bafc5983884f9e4298aeb45544c366810d4848/full'
    },
    {
      name: 'Royal Cape',
      products: 'capes',
      price: 4,
      artist: 'ArtistThree',
      image: 'https://render.hdskins.de/skin/f1e17fa3c22d129ed3ff0f9cb8bafc5983884f9e4298aeb45544c366810d4848/full'
    },
    {
      name: 'Samurai HD',
      products: 'skins',
      price: 6,
      artist: 'ArtistOne',
      type: 'hd-skins',
      resolution: '2048x',
      image: 'https://render.hdskins.de/skin/f1e17fa3c22d129ed3ff0f9cb8bafc5983884f9e4298aeb45544c366810d4848/full'
    }
  ];

  public filteredItems: CatalogItem[] = [];

  public productsSelect: any = {
    label: 'Products',
    options: [
      { label: 'Skins', value: 'skins' },
      { label: 'Elytras', value: 'elytras' },
      { label: 'Capes', value: 'capes' },
    ],
  };

  public skinTypeSelect: any = {
    label: 'Skin Type',
    options: [
      { label: 'HD Skins', value: 'hd-skins' },
      { label: 'Base Skins', value: 'base-skins' },
    ],
  };

  public skinResolutionSelect: any = {
    label: 'Skin Resolution',
    options: [
      { label: '512x', value: '512x' },
      { label: '1024x', value: '1024x' },
      { label: '2048x', value: '2048x' },
      { label: '4096x', value: '4096x' },
    ],
  };

  public artistsSelect: any = {
    label: 'Artists',
    options: [
      { label: 'ArtistOne', value: 'ArtistOne' },
      { label: 'ArtistTwo', value: 'ArtistTwo' },
      { label: 'ArtistThree', value: 'ArtistThree' },
    ],
  };

  public pagination: any = {
    activePage:
      'z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white',
    notActivePage:
      'flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white',
  };

  public skinPerPage = 30;
  public currentPage = 1;

  ngOnInit() {
    this.applyFilters();
  }

  applyFilters() {
    this.filteredItems = this.items.filter(item => {
      const matchProduct = !this.req.productsSelected || item.products === this.req.productsSelected;
      const matchType = !this.req.skinTypeSelected || item.type === this.req.skinTypeSelected;
      const matchResolution = !this.req.skinResolutionSelected || item.resolution === this.req.skinResolutionSelected;
      const matchArtist = !this.req.artistsSelected || item.artist === this.req.artistsSelected;
      const matchSearch = !this.req.search || item.name.toLowerCase().includes(this.req.search.toLowerCase());

      return matchProduct && matchType && matchResolution && matchArtist && matchSearch;
    });

    this.setPage(1); // reset alla pagina 1 ogni volta che filtro
  }

  get totalPages() {
    return Math.ceil(this.filteredItems.length / this.skinPerPage);
  }

  get paginatedItems() {
    const start = (this.currentPage - 1) * this.skinPerPage;
    return this.filteredItems.slice(start, start + this.skinPerPage);
  }

  setPage(page: number) {
    if (page < 1) page = 1;
    if (page > this.totalPages) page = this.totalPages;
    this.currentPage = page;
  }

  previousPage() {
    this.setPage(this.currentPage - 1);
  }

  nextPage() {
    this.setPage(this.currentPage + 1);
  }

  get pagesArray() {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  onProductsChange(value: string) {
    this.req.productsSelected = value;
    this.req.skinTypeSelected = '';
    this.req.skinResolutionSelected = '';
    this.req.artistsSelected = '';
    this.req.search = '';
    this.applyFilters();
  }
}
