// import { Injectable } from '@angular/core';
import { Restaurant } from '../models/restaurant.model';

// @Injectable({providedIn: 'root'})
export class RestaurantService {

  private restaurants: Restaurant[] = [];

  // tslint:disable-next-line: typedef
  getRestaurants() {
    return [...this.restaurants];
  }

  // tslint:disable-next-line: typedef
  addRestaurant(
    name: string,
    deliveryPrice: string,
    hours: string,
    address: string,
    contact: string
  ) {
    const restaurant: Restaurant = {name, deliveryPrice, hours, address, contact};
    this.restaurants.push(restaurant);
  }

  constructor() { }
}
