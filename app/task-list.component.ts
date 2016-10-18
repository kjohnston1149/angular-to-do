import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component ({
  selector: 'task-list',
  template: `
  <h3>Here are your tasks:</h3>
  <div class="well">
    <select (change)="onChange($event.target.value)" class="filter form-control">
      <label>Choose to see a finished or in progress task</label>
      <option value="all" selected="selected">Show All</option>
      <option value="isDone">Show Done</option>
      <option value="notDone">Show Not Done</option>
    </select><br>
<!-- select priority tasks to show -->
    <select (change)="onPriority($event.target.value)" class="filter form-control">
      <label>Choose a priority to see</label>
      <option value="low">Show low priority</option>
      <option value="high">Show high priority</option>
      <option value="default" selected="selected">select a priority</option>
    </select><br>
<!-- Displays tasks -->
    <div *ngFor="let currentTask of childTaskList | completeness:selectedCompleteness:selectedPriority">
      <ul>
        <task-display [task]="currentTask"></task-display>
        <button (click)="editButtonHasBeenClicked(currentTask)" class="btn btn-primary btn-sm"> (Edit)</button>
      </ul>
    </div>
  </div>
  `
})

export class TaskListComponent {
  @Input() childTaskList: Task[];
  @Output() clickSender = new EventEmitter();
  public selectedPriority: string = "all";
  public selectedCompleteness: string = "notDone";

  onPriority(optionFromMenu) {
    this.selectedPriority = optionFromMenu;
  }

  onChange(optionFromMenu) {
    //  This method changes the above property('selectedCompleteness') to the return value of 'optionFromMenu' argument
    this.selectedCompleteness = optionFromMenu;
// now we can send selectedCompleteness to our pipe component up above
  }
  editButtonHasBeenClicked(taskToEdit: Task){
    this.clickSender.emit(taskToEdit);
  }
}
