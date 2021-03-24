import { ProductDetailsComponent } from './product-details/product-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component'; // does the order matter?
import { ProductListComponent } from './product-list/product-list.component';



const routes: Routes = [{
  path:"", component: ProductListComponent
},{
  path: "products/:productId", component: ProductDetailsComponent
},
{
  path: "cart", component: CartComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
