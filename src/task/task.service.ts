import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { tasks } from './data/task';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}
  async createTask(data: CreateTaskDto) {
    const createData = await this.prisma.tasks.create({
      data,
    });
    return {
      statusCode: 200,
      data: createData,
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

  async updateTaskById(task_id: number, data: UpdateTaskDto) {
    return {
      statusCode: 200,
      data: data,
    };
  }

  async deleteTaskById(taskId: number) {
    return {
      statusCode: 200,
      data: tasks.find((task) => task.task_id !== taskId),
      message: 'Success delete data',
    };
  }
}
