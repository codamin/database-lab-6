import { Injectable } from '@nestjs/common';
import itemEntity from 'src/db/entity/item.entity';
import taskEntity from 'src/db/entity/task.entity';
import tagEntity from 'src/db/entity/tag.entity';
import { CreateTagDto } from './dto/create-tag.dto'
import { CreateItemDto } from './dto/create-item.dto'
import { CreateCategoryDto } from './dto/create-category.dto'
import { CreateTaskDto } from './dto/create-task.dto'
import categoryEntity from 'src/db/entity/category.entity';

@Injectable()
export class TodoService {
    async insertItem(details: CreateItemDto): Promise<itemEntity> {
        const { name , taskID} = details;
        const item = new itemEntity();
        item.name = name;
        item.task = await taskEntity.findOne(taskID) ;
        await item.save();
        return item;
    }

    async insertTag(details: CreateTagDto): Promise<tagEntity> {
        const { name , userID , genreIDs } = details;
        const tag = new tagEntity();
        tag.name = name;
        await tag.save();
        return tag;
    }

    async insertCategory(details: CreateCategoryDto): Promise<categoryEntity> {
        const { name } = details;
        const category = new categoryEntity();
        category.name = name;
        await category.save();
        return category;
    }

    async insertTask(details: CreateTaskDto): Promise<categoryEntity> {
        const { name, tagIDs, categoryIDs, itemIDs} = details;
        const task = new taskEntity();
        task.name = name;
        task.tags=[];
        for ( let i = 0; i < tagIDs.length ; i++)
        {
          const tags = await tagEntity.findOne(tagIDs[i]);
          task.tags.push(tags);
        }

        task.categories=[];
        for ( let i = 0; i < categoryIDs.length ; i++)
        {
          const categories = await categoryEntity.findOne(categoryIDs[i]);
          task.categories.push(categories);
        }

        task.items=[];
        for ( let i = 0; i < itemIDs.length ; i++)
        {
          const tags = await tagEntity.findOne(itemIDs[i]);
          task.items.push(tags);
        }
    
        await task.save();
        return task;
    }

    async updateTask(taskID: number, bookDetails: CreateTaskDto): Promise<taskEntity> {
        await getConnection()
                    .createQueryBuilder()
                    .update(taskEntity)
                    .set({ name:bookDetails.name})
                    .where("id = :id", { id: taskID })
                    .execute();
        return taskEntity.findOne(taskID);
      }
    
      async deleteTask(taskID: number) {
        await taskEntity.delete(taskID);
      }

     async deleteTag(tagID: number) {
        await tagEntity.delete(tagID);
     }
}
