import { Component, OnInit } from '@angular/core';
import { lizards } from '../lizard';

@Component({
  selector: 'lizard-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  lizards = lizards;

  constructor() { }

  ngOnInit(): void {
  }

}
