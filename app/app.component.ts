import { Component } from '@angular/core';
import { Task } from './task.model';
import { WorkTask } from './task.model';
import { HomeTask } from './task.model';
import { HobbyTask } from './task.model';


@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Another Boring To Do List</h1><hr>
    <pies></pies>
    <task-list
      [childTaskList]="masterTaskList"
      (clickSender)="showDetails($event)"
      >
    </task-list>
    <edit-task
      [childSelectedTask]="selectedTask"
      (doneClickedSender)="finishedEditing()">
    </edit-task>
    <new-task
    (newTaskSender)="addTask($event)"
    ></new-task>
  </div>
  `
})

export class AppComponent {
  public masterTaskList: Task[] = [
    new WorkTask("Tuesday", "Create To-Do List app.", 0, 'high'),
    new Task("Learn Kung Fu.", 1, 'low'),
    new HomeTask("Rewatch all the Lord of the Rings movies.", 2, 'low'),
    new HobbyTask("Do the laundry.", 3, 'high')
  ];

  selectedTask: Task = null;
  showDetails(clickedTask: Task) {
    this.selectedTask = clickedTask;
  }
  finishedEditing() {
    this.selectedTask = null;
  }
  addTask(newTaskFromChild: Task) {
    this.masterTaskList.push(newTaskFromChild);
  }
}
