import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, ManyToOne, JoinColumn
,ManyToMany, JoinTable} from 'typeorm';
import {Optional} from '@nestjs/common'
import categoryEntity from './category.entity';
import tagEntity from './tag.entity';
import itemEntity from './item.entity';

@Entity()
export default class taskEntity extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @OneToMany(() => itemEntity, item => item.task)
  items: itemEntity[]

  @ManyToOne(() => categoryEntity)
  category: categoryEntity

  @Optional()
  text: string;

  @Optional()
  @ManyToMany(() => tagEntity)
  @JoinTable()
  tags: tagEntity[]
}