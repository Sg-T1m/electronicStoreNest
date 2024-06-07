import { NestFactory } from "@nestjs/core";
import { appModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";



async function start() {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(appModule)
    const config = new DocumentBuilder()
        .setTitle('electronicsStore')
        .setDescription('Документация по REST Api electronics Store Back')
        .setVersion('1.0.0')
        .build()
    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('/api/docs', app, document)
    app.enableCors({
        origin: '*',
        methods: 'GET, PUT, POST, DELETE',
        allowedHeaders: 'Content-Type, Authorization',
    });
    await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`))

}

start()