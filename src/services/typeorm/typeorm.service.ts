import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class TypeormService implements TypeOrmOptionsFactory {

    createTypeOrmOptions(): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
        return {
            type: 'postgres',
            host: 'localhost',
            username: 'postgres',
            password: 'adminadmin',
            port: 5432,
            database: 'plibroc',
            entities: ['dist/**/*.model.{ts,js}']
        }
    }

}
