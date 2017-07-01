import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-for-example',
  template: `
  <ul>
      <li *ngFor="let animal of animals; trackBy:trackByAnimalId">
          <span>  {{ animal.name }} </span>
          <small> {{ animal.category }} </small>
      </li>
  </ul>
    <p> ng-for-example Works! </p>
  `,
  styles: []
})
export class NgForExampleComponent {
  animals: Array<Object> = [{
      id: 1,
      category: 'mammal',
      name: 'Dog'
  },{
      id: 2,
      category: 'oviparous',
      name: 'Duck'
  },{
      id: 3,
      category: 'mammal',
      name: 'Elephant'
  },{
      id: 4,
      category: 'reptile',
      name: 'Snake'
  }];
  trackByAnimalId(index: number, animal: any) {
    return animal.id;
}
}
