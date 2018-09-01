import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Girl } from './girl';
// import { GIRLS } from './mock-girls';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class GirlService {

  // messageService: any;

  // getGirls(): Girl[] {
  //   return GIRLS;
  // }
  // getGirls(): Observable<Girl[]> {
  //   return of(GIRLS);
  // }

  private girlsUrl = 'api/girls';  // URL to web api


  constructor(
  private http: HttpClient, 
  private messageService: MessageService) { }
  
  // //Esto se remplaza por el request http
  // getGirls(): Observable<Girl[]> {
  //   // TODO: send the message _after_ fetching the girls
  //   this.messageService.add('GirlService: fetched girls SE PODRA, ESTO MODIFICAR CON , Y CON . Y ADEMAS : _ ? AJA COMO QUE SI');
  //   return of(GIRLS);
  // }  

  getGirls (): Observable<Girl[]> {
    return this.http.get<Girl[]>(this.girlsUrl)
       .pipe(
        tap(girls => this.log('fetched girls')),
        catchError(this.handleError('getGirls', []))
       );
  }

  // getGirl(id: number): Observable<Girl> {
  //   // TODO: send the message _after_ fetching the hero
  //   this.messageService.add(`GirlService: fetched girl id=${id}`);
  //   return of(GIRLS.find(girl => girl.id === id));
  // }

  /** GET hero by id. Will 404 if id not found */
  getGirl(id: number): Observable<Girl> {
    const url = `${this.girlsUrl}/${id}`;
    return this.http.get<Girl>(url).pipe(
      tap(_ => this.log(`fetched girl id=${id}`)),
      catchError(this.handleError<Girl>(`getGirl id=${id}`))
    );
  }


    /** PUT: update the hero on the server */
  updateGirl (girl: Girl): Observable<any> {
      return this.http.put(this.girlsUrl, girl, httpOptions).pipe(
        tap(_ => this.log(`updated girl id=${girl.id}`)),
        catchError(this.handleError<any>('updateGirl'))
      );
  }

    /** POST: add a new hero to the server */
  addGirl (girl: Girl): Observable<Girl> {
    return this.http.post<Girl>(this.girlsUrl, girl, httpOptions).pipe(
      tap((girl: Girl) => this.log(`added hero w/ id=${girl.id}`)),
      catchError(this.handleError<Girl>('addGirl'))
    );
  }

    /** DELETE: delete the hero from the server */
  deleteGirl (girl: Girl | number): Observable<Girl> {
    const id = typeof girl === 'number' ? girl : girl.id;
    const url = `${this.girlsUrl}/${id}`;

    return this.http.delete<Girl>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted girl id=${id}`)),
      catchError(this.handleError<Girl>('deleteGirl'))
    );
  }

  /* GET heroes whose name contains search term */
  searchGirls(term: string): Observable<Girl[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Girl[]>(`${this.girlsUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found girls matching "${term}"`)),
      catchError(this.handleError<Girl[]>('searchGirls', []))
    );
  }



  //   /**
  //  * Handle Http operation that failed.
  //  * Let the app continue.
  //  * @param operation - name of the operation that failed
  //  * @param result - optional value to return as the observable result
  //  */
  
  private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
 
    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead
 
    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);
 
    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
  }

  
  /** Log a GirlService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`GirlService: ${message}`);
  }


}
