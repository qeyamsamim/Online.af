import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Food } from '../../models/food.model';

@Component({
  selector: 'app-food-posting',
  templateUrl: './food-posting.component.html',
  styleUrls: ['./food-posting.component.css']
})
export class FoodPostingComponent implements OnInit {
  enteredName = '';
  enteredPrice = '';
  enteredRestaurant = '';

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  onAddFood(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const restuarant: Food = {
      name: form.value.name,
      price: form.value.price,
      restaurant: form.value.restaurant
    };
  }
}
