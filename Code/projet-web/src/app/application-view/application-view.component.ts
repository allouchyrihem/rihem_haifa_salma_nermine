import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-application-view',
  templateUrl: './application-view.component.html',
  styleUrls: ['./application-view.component.scss']
})
export class ApplicationViewComponent implements OnInit {

  constructor(private auth : AuthService) { }

  ngOnInit(): void {
  }
  getIsLoggedIn(){
    console.log(this.auth.getIsLoggedIn())
    return this.auth.getIsLoggedIn();
  }

}
