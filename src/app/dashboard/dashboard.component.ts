// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-dashboard',
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.css']
// })
// export class DashboardComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component, OnInit } from '@angular/core';
import { Girl } from '../girl';
import { GirlService } from '../girl.service';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  
  girls: Girl[] = [];;
 
  constructor(private girlService: GirlService) { }
 
  ngOnInit() {
    this.getGirls();
  }
 
  getGirls(): void {
    this.girlService.getGirls()
      .subscribe(girls => this.girls = girls.slice(1, 5));
  }
}