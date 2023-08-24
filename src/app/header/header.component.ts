import { Component } from '@angular/core';
import { CurrencydataService } from '../Currency.data.service';
import { APIRateType } from '../APIRateType';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  gettingRate:APIRateType[] = []
  apiRateType!:APIRateType[]
  constructor( private currencyDataService: CurrencydataService){}
  getCurrencyRate(){
    this.currencyDataService.getNesessaryData();
  }
  ngOnInit(): void {
    this.currencyDataService.getNesessaryData().subscribe(response => {
      for (let resp of response){
        if(resp.cc==='EUR' || resp.cc==='USD' || resp.cc==='GBP'){
          this.gettingRate.push(resp);
        }
      }
    })
  }
}
