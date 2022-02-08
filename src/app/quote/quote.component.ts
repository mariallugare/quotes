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

    new Quotes(1,'Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world.','marial','Alphine',0,0 ,'inspirational quote'),
    new Quotes(2,'If you do not like something, change it. If you can not change it, change your attitude','maya angeluo','Alphine',0,0 ,'Educational quote'),
    new Quotes(3,'The secret of change is to focus all of your energy not on fighting the old, but on building the new','mandela Nelson','Pascal',0,0 ,'direct quotes'),
    new Quotes(4,'Change before you have to.','marial','jack welch',0,0 ,'Educational'),
  
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


 addNewQuote(quote:any){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
  this.quotes.push(quote)
  }





ngOnInit(): void {
  }

}
