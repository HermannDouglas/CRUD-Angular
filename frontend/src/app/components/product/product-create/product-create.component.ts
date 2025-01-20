import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-create',
  standalone: false,

  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css'
})
export class ProductCreateComponent implements OnInit{

  propLegal = "qualquer";

  constructor() { }

  ngOnInit(): void {

  }

  fazerAlgo(): void {
    console.log('Fazendo algo');
  }
}
