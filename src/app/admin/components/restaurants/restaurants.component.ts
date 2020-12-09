import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { RestaurantService } from '../../services/restaurant.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  enteredName = '';
  enteredPrice = '';
  enteredHours = '';
  enteredAddress = '';
  enteredContact = '';

  constructor(public restaurantService: RestaurantService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  onAddRestuarant(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.restaurantService.addRestaurant(
      form.value.name,
      form.value.deliveryPrice,
      form.value.hours,
      form.value.address,
      form.value.contact);
    form.resetForm();
  }
}
