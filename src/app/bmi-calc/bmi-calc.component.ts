import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmi-calc',
  templateUrl: './bmi-calc.component.html',
  styleUrls: ['./bmi-calc.component.css']
})
export class BmiCalcComponent implements OnInit {
  height = null;
  weight = null;
  result = null;


  constructor() { }

  ngOnInit() { }
  bmiCalculator() {
    let actualHeight = this.height;
    let actualWeight = this.weight;
    let actualResult = this.result =(actualWeight) / (actualHeight * actualHeight)
    

  }

}
