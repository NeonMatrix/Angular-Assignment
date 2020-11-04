import { Injectable } from '@angular/core'

@Injectable()

export class TasksService {
    getTasks(){
        return TASKS
    }
}

const TASKS = [
    {
        id: 1,
        taskName: 'Clean room',
        date: '04/11/2020',
        status: 'Done'
    },
    {
        id: 2,
        taskName: 'Start Angular assignment',
        date: '04/11/2020',
        status: 'Not finished'
    },
    {
        id: 3,
        taskName: 'Buy bread and some milk',
        date: '05/11/2020',
        status: 'Not started'
    }
]