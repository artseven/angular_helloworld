import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-built-in-pipes',
  template: `
    <p> My name is {{ 'Jack' | uppercase }} </p>
    <p> Date: {{ today }} </p>
    <p> Date: {{ today | date:'dd/MM/yyyy' }} </p>
    <button (click)="increment()">Add one day! </button>
  `,
  styles: []
})
export class BuiltInPipesComponent implements OnInit {
  today = new Date()
  constructor() { }

  ngOnInit() { }

  increment() {
    const changedDate = new Date(this.today)

    changedDate.setDate(this.today.getDate() + 1 );
    this.today = changedDate;
  }

}
