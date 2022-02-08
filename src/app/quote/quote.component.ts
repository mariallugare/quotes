import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quotes[] =[
    {id:1,quote:'life is short',author:'marial',name:'Alphine',upvotes:0,downvotes:0 },
    {id:2,quote:'we will win',author:'marial',name:'Alphine',upvotes:0,downvotes:0 },
    {id:3,quote:'i love ',author:'marial',name:'Alphine',upvotes:0,downvotes:0 }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
