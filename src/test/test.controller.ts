import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common'
import { TestService } from './test.service'
import { CreateTestDto } from './dto/create-test.dto'
import { UpdateTestDto } from './dto/update-test.dto'

@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) { }

  @Post()
  create(@Body() createTestDto: CreateTestDto) {
    return this.testService.create()
  }

  // @Get()
  // findAll(@Query() query: { keyWord: string }) {
  //   return this.testService.findAll(query);
  // }
  @Get()
  findAll1() {
    this.testService.create()
    return this.testService.findAll1()
    // return "@@@"
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTestDto: UpdateTestDto) {
    return this.testService.update(+id, updateTestDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testService.remove(+id)
  }
}
