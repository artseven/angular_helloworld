import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'custom-pipes',
  template:
        `<input [(ngModel)]="name">
        <p> Hello {{ name | capitalize }}! </p>`

})
export class CustomPipesComponent {}
