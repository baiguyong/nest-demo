import { Injectable } from '@nestjs/common'
import { Like, Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { UpdateTestDto } from './dto/update-test.dto'
import { Test } from './entities/test.entity'
import { t_test } from 'src/db/models/t_test'

@Injectable()
export class TestService {
  constructor(@InjectRepository(Test) private readonly test: Repository<Test>) { }
  create() {
    const data = new Test()
    data.name = '小满'
    data.age = 123
    return this.test.save(data)
  }

  findAll(query: { keyWord: string }) {
    return this.test.find({
      where: {
        name: Like(`%${query.keyWord}%`),
      },
    })
  }

  findAll1() {
    // const data = this.test.find()
    return t_test.findAll()

  }

  findOne(id: number) {
    return `This action returns a #${id} test`
  }

  update(id: number, updateTestDto: UpdateTestDto) {
    return `This action updates a #${id} test`
  }

  remove(id: number) {
    return `This action removes a #${id} test`
  }
}
