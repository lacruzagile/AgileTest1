import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ItemsModel } from '../models/items.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  baseUrl="/api/items";
  addItem= (item:ItemsModel)=>{
    if(item.id == 0){
      return this.http.post(this.baseUrl, item);
    }else
      return this.http.put(`${this.baseUrl}/${item.id}`, item);
  }

  getItems=()=>
    this.http.get(this.baseUrl, {observe:'response'}).pipe(
      map(response=>{
        const count = parseInt(response.headers.get('X-Total-Count')||"0",10);
        const items=response.body as ItemsModel[];
        return {items, count}
      })
    )

  getById=(id:number)=>this.http.get<ItemsModel>(this.baseUrl+`/${id}`)

  delete=(id:number)=>this.http.delete<any>(this.baseUrl+`/${id}`)
  

  constructor(private http:HttpClient) {  }
}
