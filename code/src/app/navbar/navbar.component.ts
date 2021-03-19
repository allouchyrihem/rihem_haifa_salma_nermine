import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  image="assets/image.png"
  panier="assets/bucket.png"
  moon="assets/moon.png"
  constructor() { }

  ngOnInit(): void {
  }

}
