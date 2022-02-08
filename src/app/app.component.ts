import { Component } from '@angular/core';
import { Quotes } from './quotes';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //  title = 'quotes-app';

  quotes:Quotes[] =[
    {id:1,quote:'life is short',author:'marial',name:'Alphine',upvotes:0,downvotes:0 },
    {id:2,quote:'we will win',author:'marial',name:'Alphine',upvotes:0,downvotes:0 },
    {id:3,quote:'i love ',author:'marial',name:'Alphine',upvotes:0,downvotes:0 }
  ]
}
