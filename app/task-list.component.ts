import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component ({
  selector: 'task-list',
  template: `
  <div class="well">
    <div *ngFor="let currentTask of childTaskList">
      <ul>{{ currentTask.description }}
      <button (click)="editButtonHasBeenClicked(currentTask)" class="btn btn-primary"> Edit</button></ul>
    </div>
  </div>
  `
})

export class TaskListComponent {
  @Input() childTaskList: Task[];
  @Output() clickSender = new EventEmitter();
  editButtonHasBeenClicked(taskToEdit: Task){
    this.clickSender.emit(taskToEdit);
  }
}
