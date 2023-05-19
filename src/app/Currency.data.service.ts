import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { APIRateType } from './APIRateType';

@Injectable({
  providedIn: 'root'
})
export class CurrencydataService{
  gettingRate:APIRateType[] =[]
  constructor(private http:HttpClient){}
  getNesessaryData(){
    const arrayRateFromAPI:APIRateType[]=[]
       return this.http.get<APIRateType[]>('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
  }
   
}


