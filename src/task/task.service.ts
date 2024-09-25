import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { tasks } from './data/task';

@Injectable()
export class TaskService {
  async createTask(data: CreateTaskDto) {
    return {
      statusCode: 200,
      data,
    };
  }

  async getAllTask() {
    return {
      statusCode: 200,
      data: tasks,
    };
  }

  async getTaskById(task_id: number) {
    return {
      statusCode: 200,
      data: tasks.find((task) => task.task_id == task_id),
    };
  }
}
