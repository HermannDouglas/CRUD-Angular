import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-crud',
  standalone: false,

  templateUrl: './products-crud.component.html',
  styleUrl: './products-crud.component.css'
})
export class ProductsCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  navigateToProductCreate(): void {
    this.router.navigate(['/products/create']);
  }

}
