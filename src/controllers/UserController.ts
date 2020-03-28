import { Request, Response } from 'express';
import { Controller, Middleware, Get, Put, Post, Delete, ClassMiddleware } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import AuthMiddleware from '../middlewares/AuthMiddleware';

@Controller('user')
export class UserController {

    @Get(':id')
    @Middleware(AuthMiddleware)
    private getUser(req: Request, res: Response) {
        Logger.Info(req.params.id);
        res.status(200).json({
            message: req.params.id
        });
    }

    @Post()
    private postUser(req: Request, res: Response) {
        console.log(req.body);
        return res.status(400).json({
            error: req.params.msg,
        });
    }
}
