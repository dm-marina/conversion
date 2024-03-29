import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { APIRateType } from './APIRateType';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencydataService{
  gettingRate:APIRateType[] =[]
  constructor(private http:HttpClient){}
  getNesessaryData(){
       return this.http.get<APIRateType[]>('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
       .pipe(map(currency=>{
        return currency.map(currencyEl=>{
          return{...currencyEl}
        })
       }));
  }
   
}


