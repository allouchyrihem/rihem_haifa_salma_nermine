import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-slade',
  templateUrl: './menu-slade.component.html',
  styleUrls: ['./menu-slade.component.scss']
})
export class MenuSladeComponent implements OnInit {

  constructor() { }
  salades:any;//variable globale bech nkhabiw fiha les objet  json  w bech nesta5dmouha fel HTML
  async ngOnInit() {
    const rep = await fetch("http://127.0.0.1:8000/salade");//baathna el requete bel fetch aal endpoint "/salade" bel method GET
    if (rep.ok){
      rep.json().then(data =>{//raj3etlna objet json data
        this.salades = data;//hatina e data fel variable mteena
        console.log(this.salades)
      })
    }
  }
  async delete(id:any){
    let body = `{"id":"${id}"}`
    const rep  = await fetch("http://127.0.0.1:8000/salade/del" , {
      method:"POST" , 
      body : body
    })
    window.location.reload()
  }

}
