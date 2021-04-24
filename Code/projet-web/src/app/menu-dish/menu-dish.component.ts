import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-dish',
  templateUrl: './menu-dish.component.html',
  styleUrls: ['./menu-dish.component.scss']
})
export class MenuDishComponent implements OnInit {

  constructor() { }
  salades:any;
  async ngOnInit() {
    const rep = await fetch("http://127.0.0.1:8000/dish");
    if (rep.ok){
      rep.json().then(data =>{
        this.salades = data;
        console.log(this.salades)
      })
    }
  }
  async delete(id:any){
    let body = `{"id":"${id}"}`
    const rep  = await fetch("http://127.0.0.1:8000/dish/del" , {
      method:"POST" , 
      body : body
    })
    window.location.reload()
  }

}
