import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
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
    this.http.get<{message: string, restaurants: any}>('http://localhost:3000/api/restaurants')
      .pipe(map((restaurantData) => {
        return restaurantData.restaurants.map(restaurant => {
          return {
            name: restaurant.name,
            deliveryPrice: restaurant.deliveryPrice,
            hours: restaurant.hours,
            address: restaurant.address,
            contact: restaurant.contact,
            id: restaurant._id
          };
        });
      }))
      .subscribe(changedRestaurants => {
        this.restaurants = changedRestaurants;
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
    this.http.post<{ message: string, restaurantId: string }>('http://localhost:3000/api/restaurants', restaurant)
      .subscribe(restaurantData => {
        const id = restaurantData.restaurantId;
        restaurant.id = id;
        this.restaurants.push(restaurant);
        this.restaurantUpdated.next([...this.restaurants]);
      });
  }

  // This function sends delete request to remove restaurant from DB.
  // tslint:disable-next-line: typedef
  deleteRestaurant(restaurantId: string) {
    this.http.delete('http://localhost:3000/api/restaurants' + restaurantId )
      .subscribe(() => {
        const updatedRestaurants = this.restaurants.filter(restaurant => {
          // tslint:disable-next-line: no-unused-expression
          restaurant.id !== restaurantId;
        });
        this.restaurants = updatedRestaurants;
        this.restaurantUpdated.next([...this.restaurants]);
      });
  }
}
