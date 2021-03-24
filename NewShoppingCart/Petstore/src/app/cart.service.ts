import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LizardService {
  petLizards = [];

  constructor() { }

  addToCart(cc) {
    this.petLizards.push(cc);
  }

  getLizards() {
    return this.petLizards;
  }

  clearLizardCart() {
    this.petLizards = [];
    return this.petLizards;
  }
}
