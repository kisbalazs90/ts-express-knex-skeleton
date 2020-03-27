import { Logger } from '@overnightjs/logger';

export default (req:any, res:any, next:any) => {
    console.log(req.params);
    Logger.Info('Middleware is called!');
    next();
}

