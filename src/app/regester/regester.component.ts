import { PassService } from './../pass.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-regester',
  templateUrl: './regester.component.html',
  styleUrls: ['./regester.component.css']
})
export class RegesterComponent implements OnInit {

  constructor(private passService: PassService, private router: Router) { }

  reciveFirstName: string;
  reciveLastName: string;
  reciveEmail: string;
  recivePassword: string;

  ngOnInit() {
  }

  // Developer Notes:
  // Called get values because once button is clicked it should start to catch values within those inputs
  // Side Note:
  // It appears I need a way to 'model' a variable after an input field's string once button is clicked. Learn Syntax
  // Learn observables & subscribe

  getValues() {
    this.router.navigate(['dashboard']);
    this.passService.addAccount('', '', '', '');
  }
}
