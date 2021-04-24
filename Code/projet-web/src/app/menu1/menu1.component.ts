import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu1',
  templateUrl: './menu1.component.html',
  styleUrls: ['./menu1.component.scss']
})
export class Menu1Component implements OnInit {

  constructor() { }
  salade:any;
  dish:any;
  dessert:any;
  addToCartSalade(id:any){
    let cart = sessionStorage.getItem("salade");
   cart = String(Number(cart) + 1);
   sessionStorage.setItem("salade"  , cart);
  }
  addToCartDish(id:any){
    let cart = sessionStorage.getItem("dish");
   cart = String(Number(cart) + 1);
   sessionStorage.setItem("dish"  , cart);
  }
  addToCartDessert(id:any){
    let cart = sessionStorage.getItem("dessert");
   cart = String(Number(cart) + 1);
   sessionStorage.setItem("dessert"  , cart);
  }
  async ngOnInit(){
    const rep = await fetch("http://127.0.0.1:8000/menu");
    if (rep.ok){
      rep.json().then(async data =>{
        let id_salade = data[0].id_salade;
        let id_dish = data[0].id_dish;
        let id_dessert = data[0].id_dessert;
        const reps = await fetch(`http://127.0.0.1:8000/salade/info?id=${id_salade}`);
        if (reps.ok){
          reps.json().then(datas =>{
            this.salade = datas[0];
            console.log(datas[0])
          })
        }
        const repd = await fetch(`http://127.0.0.1:8000/dish/info?id=${id_dish}`);
        if (repd.ok){
          repd.json().then(datas =>{
            this.dish = datas[0];
            console.log(datas[0])
          })
        }
        const repde = await fetch(`http://127.0.0.1:8000/dessert/info?id=${id_dessert}`);
        if (repde.ok){
          repde.json().then(datas =>{
            this.dessert = datas[0];
            console.log(datas[0])
          })
        }

      })
    }
  }

}
