import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from '../services/Authentication.service';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-stock',
  templateUrl: './stock.page.html',
  styleUrls: ['./stock.page.scss'],
})
export class StockPage implements OnInit {

  constructor(
    private authService: AuthenticationService
    ) { }

  ngOnInit() {
  }

  logoutUser(){
    this.authService.logout();
  }
  
}
