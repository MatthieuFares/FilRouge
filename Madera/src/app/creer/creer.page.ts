import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from '../services/Authentication.service';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-creer',
  templateUrl: './creer.page.html',
  styleUrls: ['./creer.page.scss'],
})
export class CreerPage implements OnInit {

  @Input() FormDevis: FormGroup;

  constructor(
    private authService: AuthenticationService,
    public FormBuilder: FormBuilder
    ) {
      this.FormDevis = FormBuilder.group({
        murs: ['', Validators.required],
        portes: ['', Validators.required],
        fenetres: ['', Validators.required]
      });
}

  ngOnInit() {
  }

  logoutUser(){
    this.authService.logout();
  }
}
