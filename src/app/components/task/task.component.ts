import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  todo: string[] = [
    "Read a book",
    "Cooking",
    "French lesson",
    "jog",
    "Set an alarm"
  ]
  progress: string[] = [];
  done: string[] = [];

  task = '';

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }


  addTask() {
    if(this.task === '') {
      return
    }

    this.todo.push(this.task);
    this.task = '';
  }

}
