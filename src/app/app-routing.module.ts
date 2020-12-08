import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { FoodComponent } from './components/food/food.component';
import { StoreComponent } from './components/store/store.component';
import { PharmacyComponent } from './components/pharmacy/pharmacy.component';
import { ElectronicsComponent } from './components/electronics/electronics.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PostingComponent } from './admin/components/posting/posting.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'food', component: FoodComponent },
  { path: 'store', component: StoreComponent },
  { path: 'pharmacy', component: PharmacyComponent },
  { path: 'electronics', component: ElectronicsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'admin', component: PostingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
