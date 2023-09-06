import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { json, urlencoded } from 'express';
import { DataSource } from 'typeorm';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    // cors: true,
    logger: ['log', 'error', 'warn', 'debug', 'verbose'],
  });

  app.use(json());
  app.use(urlencoded({ extended: true }));

  const config = new DocumentBuilder()
    .setTitle('Зоопарк')
    .setDescription('Что-то')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  app.enableCors();

  await app.listen(3000);
}

// const PostgresDataSource = new DataSource({
//   type: 'postgres',
//   host: 'localhost',
//   port: 5432,
//   username: 'postgres',
//   password: 'example',
//   database: 'web_lab',
//   entities: [],
//   synchronize: true,
// });

bootstrap();
