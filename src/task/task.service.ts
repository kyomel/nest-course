import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskService {
  async createTask() {
    return 'Create a new task service';
  }
}
