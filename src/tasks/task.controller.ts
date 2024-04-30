import { Body, Controller, Get, Param, Post, Query, Res, UsePipes, ValidationPipe } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { Response } from "express";
import { CreateTaskDto } from "./dto/create-task.dto";


@Controller('/tasks')
export class TaskController {
    
    constructor(private taskService: TasksService) {
    }

    @Get('/:id')
    getATask(@Param('id') id: number) {
        console.log(id)
        return this.taskService.getTask(id);
    }

    @Get()
    getAllTasks(@Query() query: any) {
        return this.taskService.getAllTasks();
    }

    @Post()
    createTask(@Body() task: CreateTaskDto, @Res() response: Response) {
        response.status(201).json({
            "message": this.taskService.createTask(task)
        });
    }
 }