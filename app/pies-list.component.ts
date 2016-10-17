import { Component } from '@angular/core';

@Component({
  selector: 'pies',
  template: `
  <h3>Here are my favorite pies:</h3>
  <div class="well">
    <div *ngFor="let currentPie of favoritePies">
      <p>{{ currentPie }}</p>
    </div>
  </div>
  `
})

export class PiesListComponent {
  favoritePies: string[] = ["Apple", "Banana Cream", "Blackberry"];
}
