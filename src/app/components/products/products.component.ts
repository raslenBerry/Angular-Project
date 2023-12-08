import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
import { TabCartService } from 'src/app/services/tab-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  constructor(private productService: ProductService, private tabCart: TabCartService) {}

  products: Array<Product> = [];

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(
      (res: any) => {
        this.products = res;
      },
      (error) => {
        console.error();
      }
    );
  }

  addToCart(product: Product) {
    this.tabCart.addToCart(product);
  }


  isInCart(product: Product): boolean {
    return this.tabCart.isInCart(product);
}
}
