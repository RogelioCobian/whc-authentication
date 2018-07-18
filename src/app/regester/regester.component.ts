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



  ngOnInit() {
  }

  getValues() {
    this.router.navigate(['dashboard']);
  }
}
