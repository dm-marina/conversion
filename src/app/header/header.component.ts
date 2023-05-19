import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  constructor(private http:HttpClient, private currencyDataService: CurrencydataService){}
  getCurrencyRate(){
    this.currencyDataService.getNesessaryData();
  }
  ngOnInit(): void {
    this.currencyDataService.getNesessaryData().subscribe(response => {
      for (let resp of response){
        if(resp.cc==='EUR' || resp.cc==='USD'){
          this.gettingRate.push(resp);
          console.log(this.gettingRate);
        }
      }
    })
  }
}
