import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  pic1="assets/Capture3.PNG"
  pic2="assets/Capture2.PNG"
  pic3="assets/Capture.PNG"
  title="Services"
  soustitle="Our amazing services"
  constructor() { }

  ngOnInit(): void {
  }

}
