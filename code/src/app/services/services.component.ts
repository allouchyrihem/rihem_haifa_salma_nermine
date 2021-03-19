import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  pic1="assets/dish.svg"
  pic2="assets/pizza.svg"
  pic3="assets/truck.svg"
  title="Services"
  soustitle="Our amazing services"
  constructor() { }

  ngOnInit(): void {
  }

}
