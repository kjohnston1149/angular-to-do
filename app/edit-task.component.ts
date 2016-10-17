import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component ({
  selector: 'edit-task',
  template: `
  <div *ngIf="childSelectedTask" class="well">
    <h3>Edit Task</h3>
    <div>
      <label>Enter Task Description:</label>
      <input [(ngModel)]="childSelectedTask.description" class="form-control"> <!-- Brackets mean input -->
    </div>
    <div>
      <label>Enter Task ID:</label>
      <input [(ngModel)]="childSelectedTask.id">
      <button (click)="doneClicked()" class="btn btn-default">Done</button>
    </div>
  </div>
  `
})

export class EditTaskComponent {
  @Input() childSelectedTask: Task;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}
