import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Flower } from '../../models/flower.model';

@Component({
  selector: 'app-flower-posting',
  templateUrl: './flower-posting.component.html',
  styleUrls: ['./flower-posting.component.css']
})
export class FlowerPostingComponent implements OnInit {
  enteredName = '';
  enteredPrice = '';

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  onAddFlower(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const restuarant: Flower = {
      name: form.value.name,
      price: form.value.price,
    };
  }
}
