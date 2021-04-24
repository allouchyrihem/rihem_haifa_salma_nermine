import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-consulter-plat',
  templateUrl: './consulter-plat.component.html',
  styleUrls: ['./consulter-plat.component.scss']
})
export class ConsulterPlatComponent implements OnInit {

  constructor(private auth : AuthService) { }

  ngOnInit(): void {
  }
  async Login(){
    let user = (<HTMLInputElement>document.getElementById("user")).value;
    let pwd = (<HTMLInputElement>document.getElementById("pwd")).value;
    let body = `{"username":"${user}" , "password":"${pwd}"}`
    const rep = await fetch("http://127.0.0.1:8000/gerant/login"  , {
      method:"POST" , 
      body:body
  
    });
    if( rep.ok){
      rep.json().then(data=>{
        if (JSON.stringify(data) == "[]"){
          alert("aa");
        }
        else{
          sessionStorage.setItem("isLoggedIn" , "true");
        }
        window.location.reload();

      })
    }
  }

}
