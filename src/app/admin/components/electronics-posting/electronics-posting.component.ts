import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Electronics } from '../../models/electronics.model';
@Component({
  selector: 'app-electronics-posting',
  templateUrl: './electronics-posting.component.html',
  styleUrls: ['./electronics-posting.component.css']
})
export class ElectronicsPostingComponent implements OnInit {
  enteredName = '';
  enteredPrice = '';
  enteredCategory = '';

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  onAddElectronics(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const restuarant: Electronics = {
      name: form.value.name,
      price: form.value.price,
      category: form.value.category
    };
  }

}
