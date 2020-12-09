import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Restaurant } from '../models/restaurant.model';

@Injectable({providedIn: 'root'})

export class RestaurantService {

  private restaurants: Restaurant[] = [];
  private restaurantUpdated = new Subject<Restaurant[]>();

  constructor(
    private http: HttpClient
  ) { }

  // tslint:disable-next-line: typedef
  getRestaurants() {
    this.http.get<{message: string, restaurants: Restaurant[]}>('http://localhost:3000/api/restaurants')
      .subscribe((restaurantData) => {
        this.restaurants = restaurantData.restaurants;
        this.restaurantUpdated.next([...this.restaurants]);
      });
  }

  // tslint:disable-next-line: typedef
  getRestaurantUpdatedListener() {
    return this.restaurantUpdated.asObservable();
  }

  // tslint:disable-next-line: typedef
  addRestaurant(
    name: string,
    deliveryPrice: string,
    hours: string,
    address: string,
    contact: string
  ) {
    const restaurant: Restaurant = { id: null, name, deliveryPrice, hours, address, contact};
    this.http.post<{message: string}>('http://localhost:3000/api/restaurants', restaurant)
      .subscribe((restaurantData) => {
        console.log(restaurantData.message);
        this.restaurants.push(restaurant);
        this.restaurantUpdated.next([...this.restaurants]);
      });
  }
}
