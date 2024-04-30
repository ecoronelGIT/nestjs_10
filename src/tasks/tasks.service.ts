import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './model/task';
import { CreateTaskDto } from './dto/create-task.dto';


@Injectable()
export class TasksService {

    tasks: Task[] = [];

    getTask(id: number) {
        const task = this.tasks.find(task => task.id == id)
        if (!task) {
            throw new NotFoundException(`Task ${id} not found`)
        }
        return task;
    }

    getAllTasks() { 
        return this.tasks
    }

    createTask(task: CreateTaskDto) {
        this.tasks.push({
            ...task,
            id: this.tasks.length +1,
            status: 'CREATED'
        })
        return 'Task Created'
    }
}
