import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'axio-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

  now = new Date();

  constructor() { }

  ngOnInit() {
  }

}
