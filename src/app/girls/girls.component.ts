import { Component, OnInit } from '@angular/core';
import { Girl } from '../girl';
// import { GIRLS } from '../mock-girls';
import { GirlService } from '../girl.service';
@Component({
  selector: 'app-girls',
  templateUrl: './girls.component.html',
  styleUrls: ['./girls.component.css']
})
export class GirlsComponent implements OnInit {
  // girl: Girl = {
  //   id: 1,
  //   name: 'Windstorm'
  // };
 
      
  selectedGirl: Girl;
  // girl: Girl[];
  girls: Girl[];

  // constructor() { }
  constructor(private girlService: GirlService) { }

  ngOnInit() {
    this.getGirls();
  }

  
  // onSelect(girl: Girl): void {
  //   this.selectedGirl = girl;
  // }

  getGirls(): void {
    this.girlService.getGirls()
        .subscribe(girls => this.girls = girls);
    // this.girls = this.girlService.getGirls();
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.girlService.addGirl({ name } as Girl)
      .subscribe(girl => {
        this.girls.push(girl);
      });
  }

  delete(girl: Girl): void {
    this.girls = this.girls.filter(h => h !== girl);
    this.girlService.deleteGirl(girl).subscribe();
  }

}
