import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.setGlobalPrefix('api/1.0');

  // Swagger Configuration
  const config = new DocumentBuilder()
    .setTitle('Jokes Deliver App')
    .setDescription('code94')
    .setVersion('1.0')
    .addServer('http://localhost:4200/')
    .addTag('Jokes')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api-docs', app, document);

  await app.listen(4200);
}
bootstrap();
