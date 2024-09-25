import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TaskService {
  async createTask(data: CreateTaskDto) {
    return {
      statusCode: 200,
      data,
    };
  }
}
