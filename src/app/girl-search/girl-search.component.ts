import { Component, OnInit } from '@angular/core';
 
import { Observable, Subject } from 'rxjs';
 
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';
 
import { Girl } from '../girl';
import { GirlService } from '../girl.service';
 
@Component({
  selector: 'app-girl-search',
  templateUrl: './girl-search.component.html',
  styleUrls: [ './girl-search.component.css' ]
})
export class GirlSearchComponent implements OnInit {
  girls$: Observable<Girl[]>;
  private searchTerms = new Subject<string>();
 
  constructor(private girlService: GirlService) {}
 
  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }
 
  ngOnInit(): void {
    this.girls$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
 
      // ignore new term if same as previous term
      distinctUntilChanged(),
 
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.girlService.searchGirls(term)),
    );
  }
}