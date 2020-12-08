import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Store } from '../../models/store.model';

@Component({
  selector: 'app-store-posting',
  templateUrl: './store-posting.component.html',
  styleUrls: ['./store-posting.component.css']
})
export class StorePostingComponent implements OnInit {
  enteredName = '';
  enteredPrice = '';
  enteredHours = '';
  enteredAddress = '';
  enteredContact = '';

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  onAddStore(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const restuarant: Store = {
      name: form.value.name,
      deliveryPrice: form.value.deliveryPrice,
      hours: form.value.hours,
      address: form.value.address,
      contact: form.value.contact
    };
  }
}
