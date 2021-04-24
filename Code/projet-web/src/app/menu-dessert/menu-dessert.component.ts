import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-dessert',
  templateUrl: './menu-dessert.component.html',
  styleUrls: ['./menu-dessert.component.scss']
})
export class MenuDessertComponent implements OnInit {

  constructor() { }

  salades:any;
  async ngOnInit() {
    const rep = await fetch("http://127.0.0.1:8000/dessert");
    if (rep.ok){
      rep.json().then(data =>{
        this.salades = data;
        console.log(this.salades)
      })
    }
  }
  async delete(id:any){
    let body = `{"id":"${id}"}`
    const rep  = await fetch("http://127.0.0.1:8000/dessert/del" , {
      method:"POST" , 
      body : body
    })
    window.location.reload()
  }
}
