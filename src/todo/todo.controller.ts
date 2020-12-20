import { Body, Controller, Get, Header, ParseIntPipe, Post, Put, Query, UseGuards, Delete} from '@nestjs/common';
import {ApiResponse, ApiBearerAuth, ApiQuery} from '@nestjs/swagger';
import { ApiResponse, ApiQuery } from '@nestjs/swagger';
import { TodoService } from './todo.service'
import { CreateTagDto } from './dto/create-tag.dto'
import { CreateItemDto } from './dto/create-item.dto'
import { CreateCategoryDto } from './dto/create-category.dto'
import { CreateTaskDto } from './dto/create-task.dto'
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
@Controller('todo')
export class TodoController {
    constructor(private readonly todoService: TodoService) {}

    @Post()
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    addTask( @Body() genre: CreateTaskDto) {
      return this.todoService.insertTask(task);
    }

    @Post()
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    addTag( @Body() tag: CreateTagDto) {
      return this.todoService.insertTag(tag);
    }

    @Post()
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    addCategory( @Body() category: CreateCategoryDto) {
      return this.todoService.insertCategory(category);
    }

    @Post()
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    addItem( @Body() item: CreateItemDto) {
      return this.todoService.insertItem(item);
    }

    @Put()
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @ApiResponse({status: 200, description: 'update task'})
    @Header('Content-Type', 'application/json')
    putTask(@Query('taskID', ParseIntPipe) taskID: number, @Body() task: CreateTaskDto) {
        return this.todoService.putTask(taskID, task);
    }


    @Delete()
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @ApiResponse({ status: 200})
    @ApiQuery({
      name: 'taskID',
      required: true,
      type: String
    })
    deleteTask( @Query('taskID', ParseIntPipe) taskID: number ) {
      return this.todoService.deleteTask(taskID);
    }

    @Put()
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @ApiResponse({status: 200, description: 'update task'})
    @Header('Content-Type', 'application/json')
    putTag(@Query('taskID', ParseIntPipe) tagID: number, @Body() task: CreateTagDto) {
        return this.todoService.putTag(tagID, task);
    }


    @Delete()
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @ApiResponse({ status: 200})
    @ApiQuery({
      name: 'tagID',
      required: true,
      type: String
    })
    deleteTag( @Query('taskID', ParseIntPipe) tagID: number ) {
      return this.todoService.deleteTag(tagID);
    }
}