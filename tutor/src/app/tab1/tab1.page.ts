import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  items = [
    {
      name: "Donuts",
      quantity: 12
    },
    {
      name: "Bacon",
      quantity: 3
    },
    {
      name: "Sausage",
      quantity: 2
    },
    {
      name: "Eggs",
      quantity: 12
    },
  ];

  constructor() {}

}
