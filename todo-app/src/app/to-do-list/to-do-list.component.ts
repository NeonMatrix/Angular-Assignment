import { Component } from '@angular/core';
import { TasksService } from '../tasks/tasks.service';

@Component({
    selector: 'to-do-list',
    template: `
    <div>
        <h1>TO DO LIST</h1>
        <hr/>
        <div class="row">
            <div *ngFor="let task of tasks"  class="col-md-5">
                <h1>{{task.taskName}}</h1>
            </div>
        </div>
    </div>
    `
})
export class ToDoListComponent {

    tasks

    constructor(private taskService: TasksService) {
        this.tasks = taskService.getTasks()
    }
      
    ngOnInit() {
        
    }

    counter = 0;

    handleThumbnailClick(param){
        console.log(param + this.counter);
        this.counter = this.counter +1;
    }

}