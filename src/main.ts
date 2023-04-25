import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'
import { initDb } from './db'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const options = new DocumentBuilder().setTitle('小满的飞机').setDescription('很小').setVersion('1').build()
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('/api-docs', app, document)

  // 初始化数据库
  await initDb()

  await app.listen(3000)
}
bootstrap()
