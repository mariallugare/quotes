import { Quote } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {


  quotes:Quotes[] =[

    new Quotes(1,'life is short','marial','Alphine',0,0 ,'marial is d=shouting at us'),
    new Quotes(1,'life is short','marial','Alphine',0,0 ,'marial is d=shouting at us'),
    new Quotes(1,'life is short','marial','Alphine',0,0 ,'marial is d=shouting at us'),
    new Quotes(1,'life is short','marial','Alphine',0,0 ,'marial is d=shouting at us'),
  
  ]
  constructor() { }
 buttonclick(index:number)  {this.quotes[index].showDescription=!this.quotes[index].showDescription}

i!:number
 marial(index:number){this.quotes[index].showDescription= this.quotes[index].showDescription}


toggleDetails(index:number){
  this.quotes[index].showDescription = !this.quotes[index].showDescription;
}

completeQuote(isComplete:any ,index:any){
  if (isComplete) {
    this.quotes.splice(index,1);
  }
}








ngOnInit(): void {
  }

}
