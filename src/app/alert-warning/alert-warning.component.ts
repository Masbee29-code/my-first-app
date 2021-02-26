import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-warning',
  template: '<p>This is a warning alert!</p>',
  styleUrls: ['./alert-warning.component.css']
})
export class AlertWarningComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
