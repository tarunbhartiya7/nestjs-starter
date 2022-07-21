import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger } from './common/middleware/logger.middleware';
import helmet from 'helmet';
// import * as csurf from 'csurf';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.use(csurf({ cookie: true }));
  app.use(helmet());
  app.enableCors();
  app.use(logger);
  // app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
