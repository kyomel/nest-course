import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Post()
  async createTask(@Body() body: CreateTaskDto) {
    return await this.taskService.createTask(body);
  }

  @Get()
  async getAllTasks() {
    return await this.taskService.getAllTask();
  }

  @Get('/:task_id')
  async getTaskById(@Param('task_id') task_id) {
    return await this.taskService.getTaskById(task_id);
  }
}
