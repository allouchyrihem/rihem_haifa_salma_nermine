import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  title="Menu"
  soustitle="Menu of the week"
  panier="assets/panier.PNG"

  constructor() { }

  ngOnInit(): void {
  }

}
