import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-built-in-pipes',
  template: `
    <p> My name is {{ 'Jack' | uppercase }} </p>
  `,
  styles: []
})
export class BuiltInPipesComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
