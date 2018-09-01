
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { GirlService }  from '../girl.service';
import { Girl } from '../girl';

@Component({
  selector: 'app-girl-detail',
  templateUrl: './girl-detail.component.html',
  styleUrls: ['./girl-detail.component.css']
})
export class GirlDetailComponent implements OnInit {
  @Input() girl: Girl;
 

  constructor(
    private route: ActivatedRoute,
    private girlService: GirlService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getGirl();
  }

  getGirl(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.girlService.getGirl(id)
      .subscribe(girl => this.girl = girl);
  }

  goBack(): void {
    this.location.back();
    
  }

  save(): void {
    this.girlService.updateGirl(this.girl)
      .subscribe(() => this.goBack());
  }

}
