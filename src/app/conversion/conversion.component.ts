import { Component} from '@angular/core';
import { CurrencydataService } from '../shared/Currency.data.service';
import { APIRateType } from '../shared/APIRateType';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.css']
})
export class ConversionComponent {
  rate:number;
  amount:number;
  resAmount:number;
  currencyName:string;
  converteredCurrencyName:string;
  currency:string;
  currencyElemRate:number;
  converteredCurrencyElemRate:number;
  currencyData:APIRateType[]
  constructor( private currencyDataService: CurrencydataService){}
  ngOnInit(): void {
    this.currencyDataService.getNesessaryData().subscribe(
      (currencyElem)=>{
        this.currencyData = currencyElem
      }
    );
  }

  getCurrencyName(currency:string){
    this.currency = currency
    this.getInformByCurrencyName(this.currency)
    return this.currency
  }
  getInformByCurrencyName(currency:string){
    for(let currencyElem of this.currencyData){
      if(currencyElem.cc === currency){
        if(currency===this.currencyName){
          this.currencyElemRate = +currencyElem.rate;
          this.rate =  this.currencyElemRate
        }
        if(currency === this.converteredCurrencyName){
          this.converteredCurrencyElemRate = +currencyElem.rate;
          this.rate = this.converteredCurrencyElemRate
        }
      }
    }
    return this.rate
  }
  calculateResult(){
    let res:number
    if(this.converteredCurrencyName==='UAH'){
      res = +(this.amount*this.currencyElemRate).toFixed(2)
    }else if(this.currencyName==='UAH'){
      res = +(this.amount/this.converteredCurrencyElemRate).toFixed(2)
    }
    else{
      res = +((this.amount*this.currencyElemRate)/this.converteredCurrencyElemRate).toFixed(2)
    }
      return res
  }
    
  onSubmit(form: NgForm){
    this.getInformByCurrencyName(this.currencyName)
    return form.value
  }
  onSubmitF2(form2: NgForm){
    this.resAmount = +this.calculateResult()
    return form2.value
  }
          
     
  
}
