import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ExceptionHandler } from './filters';
import { APP_FILTER } from '@nestjs/core';
import { LoggerMiddleware } from './middlewares';
import { ConfigModule } from '@nestjs/config';
import { CourceModel, CourceModule, StudentModel } from './modules';
import { StudentModule } from './modules/students/student.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      port: parseInt(process.env.DB_PORT) || 5432,
      password: process.env.DB_PASSWORD,
      username: process.env.DB_USER || 'postgres',
      host: process.env.DB_HOST || 'localhost',
      database: process.env.DB_NAME,
      models: [CourceModel, StudentModel],
      synchronize: true,
      autoLoadModels: true,
      logging:false
    }),
    CourceModule,
    StudentModule
  ],
  providers: [
    {
      useClass: ExceptionHandler,
      provide: APP_FILTER,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes({
      path: '*',
      method: RequestMethod.ALL,
    });
  }
}
