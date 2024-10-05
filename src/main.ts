import { NestFactory } from '@nestjs/core';
import { AppModule } from './app';
import * as morgan from 'morgan';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  if (process.env.NODE_ENV.trim() == 'development') {
    app.use(morgan('tiny'));
  }


  const config = new DocumentBuilder()
    .setTitle('Cource Center')
    .setDescription('Cource Center CRUD operations')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const configService = app.get(ConfigService);
  const appPort = configService.getOrThrow<number>('PORT');

  await app.listen(appPort, () => {
    console.log(`Server is running on port: ${appPort}`);
  });
}
bootstrap();
