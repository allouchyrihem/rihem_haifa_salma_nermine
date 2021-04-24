import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  salade:any;
  dish:any;
  dessert:any;
  sn:any;
  dn:any;
  desn:any;

  tax = 5;
  shipping = 10;
  constructor() { }

  async ngOnInit() {
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
          })
        }
        const repd = await fetch(`http://127.0.0.1:8000/dish/info?id=${id_dish}`);
        if (repd.ok){
          repd.json().then(datas =>{
            this.dish = datas[0];
          })
        }
        const repde = await fetch(`http://127.0.0.1:8000/dessert/info?id=${id_dessert}`);
        if (repde.ok){
          repde.json().then(datas =>{
            this.dessert = datas[0];
          })
        }

      })
    }
    let s = sessionStorage.getItem("salade")
    if(s){
      this.sn  = s;
    }
    else{
      this.sn =0;
    }
    let d = sessionStorage.getItem("dish")
    if(d){
      this.dn  = d;
    }
    else{
      this.dn = 0;
    }
    let des = sessionStorage.getItem("dessert")
    if(des){
      this.desn  =des;
    }
    else{
      this.desn = 0;
    }

  }


  }


