import { Injectable } from '@nestjs/common';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';
import { Like, Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm';
import { Test } from './entities/test.entity'
@Injectable()
export class TestService {
  constructor(@InjectRepository(Test) private readonly test: Repository<Test>) { }
  create(createTestDto: CreateTestDto) {
    return 'This action adds a new test';
  }

  findAll(query: { keyWord: string }) {
    return this.test.find({
      where: {
        name: Like(`%${query.keyWord}%`)
      }
    })
  }
  findAll1() {
    const data = this.test.find()
    console.log(data);

    return data
  }
  findOne(id: number) {
    return `This action returns a #${id} test`;
  }

  update(id: number, updateTestDto: UpdateTestDto) {
    return `This action updates a #${id} test`;
  }

  remove(id: number) {
    return `This action removes a #${id} test`;
  }
}
