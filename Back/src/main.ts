import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configurez CORS ici
  app.enableCors({
    origin: 'http://localhost:5173', // Remplacez par le domaine autorisé de votre front-end
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Si vous avez besoin de prendre en charge les cookies ou d'autres informations d'identification
  });
    
  console.log(process.env.MONGO_DNS)
  await app.listen(3000);
}
bootstrap();
