import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { lizards } from '../lizard'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  aa: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.aa = lizards[+params.get('reptileId')];
    });
  }

}
