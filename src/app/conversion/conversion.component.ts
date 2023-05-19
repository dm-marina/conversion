import { Component, ViewChild, ElementRef } from '@angular/core';
import { CurrencydataService } from '../Currency.data.service';
import { APIRateType } from '../APIRateType';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.css']
})
export class ConversionComponent {
  @ViewChild('amountInput', {static:false}) amountInput!:ElementRef;
  @ViewChild('converteredInput', {static:false}) converteredInput!:ElementRef;
  @ViewChild('country', {static:false}) country!:ElementRef;
  @ViewChild('sCountry', {static:false}) sCountry!:ElementRef;
  res!:number;
  res2!:number;
  gettingRate:APIRateType[] = [];
  apiRateType!:APIRateType[];
  constructor(private http:HttpClient, private currencyDataService: CurrencydataService){}
  getCurrencyRate(){
    this.currencyDataService.getNesessaryData();
  }
  ngOnInit(): void {
    this.currencyDataService.getNesessaryData().subscribe(response => {
      for (let resp of response){
        if(resp.cc==='EUR' || resp.cc==='USD'){
          this.gettingRate.push(resp);
        }
      }
    })
  }

  choosedCountry!:string;
  choosedAmount!:number;
  reversedAmount!:number;
  secCountry!:string;
  changeCountry(cnt:string){
      this.choosedCountry=cnt;
  }
  changeAmount(amnt:string){
    this.choosedAmount = +amnt;
  }
  secondCountry(countr:string){
    this.secCountry= countr;
  }
  reverseAmount(rev:string){
    this.reversedAmount=+rev;
  }
  calculateResult(){
    let cursChoosedEUR = +this.gettingRate[1].rate;
    let cursChoosedUSD = +this.gettingRate[0].rate;
    let cursEUR = +this.gettingRate[1].rate;
    let cursUSD = +this.gettingRate[0].rate;
    if(this.choosedCountry==='USD' && this.secCountry==='EUR'){
      this.res = +((this.choosedAmount*cursChoosedUSD)/cursEUR).toFixed(2);
    }
    if(this.choosedCountry==='EUR' && this.secCountry==='USD'){
      this.res = +((this.choosedAmount*cursChoosedEUR)/cursUSD).toFixed(2);
    }
    if(this.choosedCountry==='USD' && this.secCountry==='UAH'){
      this.res = +(this.choosedAmount*cursUSD).toFixed(2);
    }
    if(this.choosedCountry==='EUR' && this.secCountry==='UAH'){
      this.res = +(this.choosedAmount*cursEUR).toFixed(2);
    }
    if(this.choosedCountry==='UAH' && this.secCountry==='EUR'){
      this.res = +(this.choosedAmount/cursEUR).toFixed(2);
    }
    if(this.choosedCountry==='UAH' && this.secCountry==='USD'){
      this.res = +(this.choosedAmount/cursUSD).toFixed(2);
    }
          
  }  
  calculateReversedResult(){
    let cursChoosedEUR = +this.gettingRate[1].rate;
    let cursChoosedUSD = +this.gettingRate[0].rate;
    let cursEUR = +this.gettingRate[1].rate;
    let cursUSD = +this.gettingRate[0].rate;
      if(this.choosedCountry==='USD' && this.secCountry==='EUR'){
        console.log(this.reversedAmount)
        this.res2 = +((this.res*cursChoosedEUR)/cursUSD).toFixed(2);
      }
      if(this.choosedCountry==='EUR' && this.secCountry==='USD'){
        this.res2 = +((this.res*cursChoosedUSD)/cursEUR).toFixed(2);
        console.log(this.res2)
      }
      if(this.choosedCountry==='USD' && this.secCountry==='UAH'){
        this.res2 = +(this.res/cursUSD).toFixed(2);
      }
      if(this.choosedCountry==='EUR' && this.secCountry==='UAH'){
        this.res2 = +(this.res/cursEUR).toFixed(2);
      }
      if(this.choosedCountry==='UAH' && this.secCountry==='EUR'){
        this.res2 = +(this.res*cursEUR).toFixed(2);
      }
      if(this.choosedCountry==='UAH' && this.secCountry==='USD'){
        this.res2 = +(this.res*cursUSD).toFixed(2);
      }
    }
          
     
  
}
