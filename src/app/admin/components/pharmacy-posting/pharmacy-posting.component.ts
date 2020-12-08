import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Pharmacy } from '../../models/pharmacy.model';

@Component({
  selector: 'app-pharmacy-posting',
  templateUrl: './pharmacy-posting.component.html',
  styleUrls: ['./pharmacy-posting.component.css']
})
export class PharmacyPostingComponent implements OnInit {
  enteredName = '';
  enteredPrice = '';

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  onAddMedicine(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const restuarant: Pharmacy = {
      name: form.value.name,
      price: form.value.price
    };
  }
}
