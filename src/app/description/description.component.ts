import { Component, OnInit, Input  } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

@Input() quote!:Quotes;

  constructor() { }

  ngOnInit(): void {
  }

}
