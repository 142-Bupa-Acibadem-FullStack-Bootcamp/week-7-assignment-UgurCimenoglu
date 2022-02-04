import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currencies: String[] = ['TL', 'EUR', 'USD', 'STR'];
  inCurr: String = "TL";
  outCurr: String = "EUR";
  inrToForeignRates: any = {
    TL: 1,
    EUR: 0.06,
    USD: 0.07,
    STR:0.05
  };
  inputValue:number= 1;

  constructor() { }

  ngOnInit(): void {
   
  }
  outputValue(input:any, inCurr:any, outCurr:any) {
    return input * this.inrToForeignRates[outCurr] / this.inrToForeignRates[inCurr];
  }; 
  output() {
    return this.outputValue(this.inputValue, this.inCurr, this.outCurr);
  };


}
