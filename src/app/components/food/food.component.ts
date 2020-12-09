import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Restaurant } from 'src/app/admin/models/restaurant.model';
import { RestaurantService } from 'src/app/admin/services/restaurant.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit, OnDestroy {
  restaurants: Restaurant[] = [];
  private restaurantSub: Subscription;

  constructor(public restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.restaurantService.getRestaurants();
    this.restaurantSub = this.restaurantService.getRestaurantUpdatedListener()
      .subscribe((restaurants: Restaurant[]) => {
        this.restaurants = restaurants;
      });
  }

  // tslint:disable-next-line: typedef
  ngOnDestroy() {
    this.restaurantSub.unsubscribe();
  }
}
