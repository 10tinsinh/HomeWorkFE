import { query } from '@angular/animations';
import { Component,OnInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'myhomework';

  products = 
    [
      {
        name: 'Điện thoại iPhone 14',
        description: 'Điện thoại thông minh cao cấp',
        price: 25000000,
        category: 'Điện thoại',
      },
      {
        name: 'Máy tính Macbook Pro',
        description: 'Máy tính xách tay cao cấp',
        price: 40000000,
        category: 'Máy tính',
      },
      {
        name: 'Áo thun Uniqlo',
        description: 'Áo thun cotton basic',
        price: 200000,
        category: 'Thời trang',
      },
    ];
  
  searchQuery: string = '';

  filteredProducts: any[];

  constructor(){
    this.filteredProducts = this.products;
  }

  ngOnInit() {
    
  }

  search(): void{
    const keyWord = this.searchQuery.toLowerCase().trim();

    if(!keyWord){
      this.filteredProducts = this.products;
      return;
    }

    this.filteredProducts = this.products.filter(
      e => e.name.toLowerCase().includes(keyWord)
      );
  }

  checkPrice(price: number): number {
    if(price > 200000 && price < 40000000)
      return 1;
    else if(price <= 200000)
      return 2;
    else
      return 3;
  }

}
