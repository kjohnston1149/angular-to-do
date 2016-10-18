import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component ({
  selector: 'task-list',
  template: `
  <h3>Here are your tasks:</h3>
  <div class="well">
    <select (change)="onChange($event.target.value)" class="form-control">
      <option value="all">Show All</option>
      <option value="isDone">Show Done</option>
      <option value="notDone" selected="selected">Show Not Done</option>
    </select>
    <div *ngFor="let currentTask of childTaskList | completeness:selectedCompleteness">
      <ul>
        {{ currentTask.description }}
        <button (click)="editButtonHasBeenClicked(currentTask)" class="btn btn-primary"> Edit</button>
      </ul>
    </div>
  </div>
  `
})

export class TaskListComponent {
  @Input() childTaskList: Task[];
  @Output() clickSender = new EventEmitter();
  public selectedCompleteness: string = "notDone";
  onChange(optionFromMenu) {
    //  This method changes the above property('selectedCompleteness') to the return value of 'optionFromMenu' argument
    this.selectedCompleteness = optionFromMenu;
// now we can send selectedCompleteness to our pipe component up above
  }
  editButtonHasBeenClicked(taskToEdit: Task){
    this.clickSender.emit(taskToEdit);
  }
}
