import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';
import { WorkTask } from './task.model';
import { HomeTask } from './task.model';
import { HobbyTask } from './task.model';

@Component({
  selector: 'new-task',
  template: `
    <h3>Add a new task:</h3>
    <div class="well">
      <div class="form-group">
        <input #newDescription class="form-control" placeholder="new task">
      </div>
      <div class="form-group">
        <select #newType class="form-control">
          <option value="default" selected="selected">What type of task is this?</option>
          <option value="work">work task</option>
          <option value="home">home task</option>
          <option value="hobby">hobby task</option>
        </select>
      </div>
      <div class="form-group addTask">
        <select #newPriority class="form-control">
          <option value="low"selected="selected">low priority</option>
          <option value="high">high priority</option>
        </select>
      </div>
        <button (click)="
        addClicked(newDescription.value, newPriority.value, newType.value);
        newDescription.value='';
        newPriority.value='';
        newType.value='';
        " class="btn btn-default prompt">Add</button>
      </div>
  `
})

export class NewTaskComponent {
  @Output() newTaskSender = new EventEmitter();

  getDate() {
    prompt("When is this due?");
  }

  addClicked(description: string, priority: string, type: string) {
    var id: number = 1;
    var dueDate: string = prompt("when is this task due?");
    if (type === 'home') {
      var newTaskToAdd: Task = new HomeTask(description, id, priority);
      console.log(newTaskToAdd);
    } else if (type === "hobby"){
      var newTaskToAdd: Task = new HobbyTask(description, id, priority);
        console.log(newTaskToAdd);
    }  else {
      var newTaskToAdd: Task = new WorkTask(dueDate, description, id, priority);
        console.log(newTaskToAdd);
    }
    this.newTaskSender.emit(newTaskToAdd);
  }
}
