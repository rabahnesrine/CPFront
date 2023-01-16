import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  host = 'http://localhost:8000'
  constructor(private http:HttpClient) { }


  public getItems(){
    return this.http.get<any[]>(`${this.host}/product/items/`)
    .pipe(
      catchError(err => {
      console.log(err);
      return throwError('An error occurred while trying to fetch data');
    }))
  }

  public postItems(itemData:any):Observable<any>{
    return this.http.post<any> (`${this.host}/product/createItem/`,itemData);
  }

  public getItemById(itemId:any):Observable<any>{
    return this.http.get<any>(`${this.host}/product/createItem/${itemId}`)
  }

}
