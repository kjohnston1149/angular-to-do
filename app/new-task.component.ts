import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'new-task',
  template: `
    <h3>Add a new task:</h3>
    <div class="well">
      <div class="form-group">
        <input #newDescription class="form-control" placeholder="new task">
      </div>
      <div class="form-group addTask">
        <input #newID class="form-control" placeholder="new task ID"><br>
        <button (click)="
        addClicked(newDescription.value, newID.value);
        newDescription.value='';
        newID.value='';
        " class="btn btn-default">Add</button>
      </div>
    </div>
  `
})

export class NewTaskComponent {
  @Output() newTaskSender = new EventEmitter();
  addClicked(description: string, id: number) {
    var newTaskToAdd: Task = new Task(description, id);
    this.newTaskSender.emit(newTaskToAdd);
  }

}
