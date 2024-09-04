import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { BookModule } from './book/book.module';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: '127.0.0.1',
            port: 3306,
            username: 'root',
            password: 'zfc125521',
            database: 'nest_db',
            synchronize: true, // 是否自动将实体类同步到数据库
            logging: true,
            entities: [__dirname + '/**/*.entity{.ts,.js}'], // //实体文件
            poolSize: 10,
            connectorPackage: 'mysql2',
            // extra: {
            //     authPlugin: 'sha256_password',
            // },
        }),
        UserModule,
        BookModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
