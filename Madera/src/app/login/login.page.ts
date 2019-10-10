import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/Authentication.service';

 
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'], 
})


export class LoginPage implements OnInit {

  user_id: string;
  user_mdp: string;

  constructor(
    private authService: AuthenticationService,
  ) { }

  

  ngOnInit() {
  }

  loginUser()
  {
    this.authService.login(this.user_id,this.user_mdp)
  }
}
