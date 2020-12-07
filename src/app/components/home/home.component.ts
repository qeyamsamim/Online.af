import { Component, OnInit } from '@angular/core';

export interface Tile {
  cols: number;
  rows: number;
  text: string;
  imgURL: string;
  route: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  slides = [
    { image : './assets/images/food.JPG'},
    { image : './assets/images/store.JPG'},
    { image : './assets/images/pharmacy.JPG'}
  ];

  restuarantImg = [
    {image: './assets/images/store.JPG', title: 'Rice'},
    {image: './assets/images/pharmacy.JPG', title: 'Palaw'},
    {image: './assets/images/food.JPG', title: 'Bolani'},
    {image: './assets/images/electronics.JPG', title: 'Manto'},
    {image: './assets/images/flower.JPG', title: 'Qabeli'},
    {image: './assets/images/food.JPG', title: 'Aashak'},
    {image: './assets/images/flower.JPG', title: 'Biryani'},
    {image: './assets/images/pharmacy.JPG', title: 'Soup'},
    {image: './assets/images/store.JPG', title: 'Kabab'},
    {image: './assets/images/store.JPG', title: 'Fish'}
  ];

  images = [
    { thumbImage: './assets/images/food.JPG'},
    { image : './assets/images/store.JPG', thumbImage: './assets/images/store.JPG'},
    { image : './assets/images/food.JPG', thumbImage: './assets/images/food.JPG'},
    { image : './assets/images/store.JPG', thumbImage: './assets/images/store.JPG'},
    { image : './assets/images/pharmacy.JPG', thumbImage: './assets/images/pharmacy.JPG'},
    { image : './assets/images/pharmacy.JPG', thumbImage: './assets/images/pharmacy.JPG'},
    { image : './assets/images/food.JPG', thumbImage: './assets/images/food.JPG'},
    { image : './assets/images/store.JPG', thumbImage: './assets/images/store.JPG'},
    { image : './assets/images/pharmacy.JPG', thumbImage: './assets/images/pharmacy.JPG'}
  ];

  tiles: Tile[] = [
    { cols: 2, rows: 2, text: 'Food', imgURL: './assets/images/food.JPG', route: '/food' },
    { cols: 1, rows: 1, text: 'Store', imgURL: './assets/images/store.JPG', route: '/store'},
    { cols: 1, rows: 1, text: 'Pharmacy', imgURL: './assets/images/pharmacy.JPG', route: '/pharmacy' },
    { cols: 1, rows: 1, text: 'Electronics', imgURL: './assets/images/electronics.JPG', route: '/electronics' },
    { cols: 1, rows: 1, text: 'Others', imgURL: './assets/images/flower.JPG', route: '' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
