import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { TestModule } from './test/test.module';
@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',//数据库类型
    username: "root",//账号
    password: "123456",//密码
    host: "localhost",//host
    port: 3306,//
    database: "guyong",//库名
    // entities: [__dirname + '/**/*.entity{.ts.js}'],//实体文件
    synchronize: true,//是否自动将实体类同步到数据库
    retryDelay: 500,//重试链接数据库间隔
    retryAttempts: 10,//重试次数
    autoLoadEntities: true,//
  }), TestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
