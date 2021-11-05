import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-card',
  templateUrl: './material-card.component.html',
  styleUrls: ['./material-card.component.css']
})
export class MaterialCardComponent implements OnInit {
  @Input() property: any;

  constructor() { }

  ngOnInit(): void {
  }

}
