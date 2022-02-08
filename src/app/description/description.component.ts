import { Component, OnInit, Input, Output ,EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

@Input() quote!:Quotes;
@Output() isComplete = new EventEmitter<boolean>();

quoteComplete(complete:boolean){
  this.isComplete.emit(complete);
}

  constructor() { }

  ngOnInit(): void {
  }

}
