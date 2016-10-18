import {Pipe, PipeTransform} from '@angular/core';
import {Task} from './task.model';

@Pipe({
  name: "completeness",
  pure: false
})

export class CompletenessPipe implements PipeTransform {
  transform(input: Task[], desiredCompleteness, desiredPriority) {
    var output: Task[] = [];

    if(desiredCompleteness === "notDone" && desiredPriority === "low" ) {
      console.log("this is all not done with low priority");
      for (var i = 0; i < input.length; i++) {
        if (input[i].done === false && input[i].priority === "low") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCompleteness === "notDone" && desiredPriority === "high") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].done === false && input[i].priority === "high") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCompleteness === "isDone" && desiredPriority === "low") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].done === true && input[i].priority === "low") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCompleteness === "isDone" && desiredPriority === "high") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].done === true && input[i].priority === "high") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCompleteness === "all" && desiredPriority === "low") {
      for (var i = 0; i < input.length; i++) {
        if ((input[i].done === true && input[i].priority === "low") || (input[i].done === false && input[i].priority === "low") ) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCompleteness === "all" && desiredPriority === "high") {
      for (var i = 0; i < input.length; i++) {
        if ((input[i].done === true && input[i].priority === "high") || (input[i].done === false && input[i].priority === "high")){
        output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
