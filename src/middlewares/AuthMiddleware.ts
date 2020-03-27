import { Logger } from '@overnightjs/logger';

export const AuthMiddleware = (req:any, res:any, next:any) => {
    Logger.Info('Middleware is called!');
    console.log(req);
    console.log(res);
    next();
}

export const config = {
    client: 'mysql',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE
    },
    migrations: {
      // This is missing from the TypeScript types currently.
      stub: 'migration.stub'
    }
  }
