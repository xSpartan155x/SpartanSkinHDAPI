import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from "../../libs/section/section.component";
import { SelectComponent } from "../../libs/select/select.component";
import { InputSearchComponent } from "../../libs/input-search/input-search.component";
import { HeadingComponent } from "../../libs/heading/heading.component";
import { CardComponent } from "../../libs/card/card.component";

@Component({
  selector: 'app-catalog',
  imports: [CommonModule, SectionComponent, SelectComponent, InputSearchComponent, HeadingComponent, CardComponent],
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent {
  public productsSelect:any = {
    label: 'Products',
    options: [
      {label:'Skins', value: 'skins'},
      {label:'Elytras', value: 'elytras'},
      {label:'Capes', value: 'capes'},
    ]
  }
  public skinTypeSelect:any = {
    label: 'Skin Type',
    options: [
      {label:'HD Skins', value: 'hd-skins'},
      {label:'Base Skins', value: 'base-skins'},
    ]
  }
  public skinResolutionSelect:any = {
    label: 'Skin Resolution',
    options: [
      {label:'512x', value: '512x'},
      {label:'1024x', value: '1024x'},
      {label:'2048x', value: '2048x'},
      {label:'4096x', value: '4096x'},
    ]
  }
  public artistsSelect:any = {
    label: 'Artists',
    options: [
      {label:'Name', value: 'Name'},
      {label:'Name', value: 'Name'},
    ]
  }

  public pagination: any = {
    activePage: 'z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white',
    notActivePage: 'flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white' 
  }
  
  public skinPerPage = 30;
  public num = Array.from({length: 37}, () => ({})); // esempi di elementi
  public currentPage = 1;

  // calcola il numero di pagine
  get totalPages() {
    return Math.ceil(this.num.length / this.skinPerPage);
  }

  // elementi da mostrare nella pagina corrente
  get paginatedItems() {
    const start = (this.currentPage - 1) * this.skinPerPage;
    return this.num.slice(start, start + this.skinPerPage);
  }

  // cambiare pagina
  setPage(page: number) {
    if (page < 1) page = 1;
    if (page > this.totalPages) page = this.totalPages;
    this.currentPage = page;
  }

  // controlli Previous / Next
  previousPage() {
    this.setPage(this.currentPage - 1);
  }

  nextPage() {
    this.setPage(this.currentPage + 1);
  }

  // array delle pagine per il template
  get pagesArray() {
    return Array.from({length: this.totalPages}, (_, i) => i + 1);
  }
}
