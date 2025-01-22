import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-delete',
  standalone: false,

  templateUrl: './product-delete.component.html',
  styleUrl: './product-delete.component.css'
})
export class ProductDeleteComponent implements OnInit {

  product: Product = {
    name: '',
    price: 0
  }

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.productService.readById(id).subscribe(product => {
        this.product = product;
      });
    } else {
      this.productService.showMessage('ID do produto não encontrado!');
      this.router.navigate(['/products']);
    }
  }

  deleteProduct(): void {
    if (this.product.id !== undefined) {
      this.productService.delete(this.product.id!.toString()).subscribe(() => {
        this.productService.showMessage('Produto excluído com sucesso!');
        this.router.navigate(['/products']);
      });
    } else {
      this.productService.showMessage('ID do produto não encontrado!');
    }
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}
