import { Component, OnInit } from '@angular/core';
import { LizardService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  lizzie;
  constructor(private lizardService: LizardService) { }

  ngOnInit(): void {
    this.lizzie = this.lizardService.getLizards();
  }

}
