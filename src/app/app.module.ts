import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CartComponent } from './components/cart/cart.component';
import { TabComponent } from './components/tab/tab.component';
import { HomeComponent } from './components/home/home.component';
import { FoodComponent } from './components/food/food.component';
import { StoreComponent } from './components/store/store.component';
import { PharmacyComponent } from './components/pharmacy/pharmacy.component';
import { ElectronicsComponent } from './components/electronics/electronics.component';
import { ProfileComponent } from './components/profile/profile.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';

import { MatCarouselModule } from '@ngmodule/material-carousel';
import { NgImageSliderModule } from 'ng-image-slider';
import { FormsModule } from '@angular/forms';
import { PostingComponent } from './admin/components/posting/posting.component';
import { RestaurantsComponent } from './admin/components/restaurants/restaurants.component';
import { FoodPostingComponent } from './admin/components/food-posting/food-posting.component';
import { ElectronicsPostingComponent } from './admin/components/electronics-posting/electronics-posting.component';
import { PharmacyPostingComponent } from './admin/components/pharmacy-posting/pharmacy-posting.component';
import { FlowerPostingComponent } from './admin/components/flower-posting/flower-posting.component';
import { StorePostingComponent } from './admin/components/store-posting/store-posting.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    TabComponent,
    HomeComponent,
    FoodComponent,
    StoreComponent,
    PharmacyComponent,
    ElectronicsComponent,
    ProfileComponent,
    PostingComponent,
    RestaurantsComponent,
    FoodPostingComponent,
    ElectronicsPostingComponent,
    PharmacyPostingComponent,
    FlowerPostingComponent,
    StorePostingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    NgImageSliderModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatGridListModule,
    MatCarouselModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
