import { Request, Response } from 'express';
import { Controller, Middleware, Get, Put, Post, Delete, ClassMiddleware } from '@overnightjs/core';
import { JwtManager } from '@overnightjs/jwt';
import { UserModel } from '../models/UserModel';

@Controller('users')
export class UserController {
    @Get()
    @Middleware(JwtManager.middleware)
    private getUsers(req: Request, res: Response) {
        const userModel = new UserModel();
        userModel.findAll().then((rows) => {
            return res.status(200).json({
                response: rows
            });
        });
    }

    @Get(':id')
    @Middleware(JwtManager.middleware)
    private getUser(req: Request, res: Response) {
        const userModel = new UserModel();
        userModel.findById(req.params.id).then((rows) => {
            return res.status(200).json({
                response: rows
            });
        });
    }

    @Post()
    private createUser(req: Request, res: Response) {
        const userModel = new UserModel();
        userModel.save(req.body).then((rows:any) => {
            return res.status(200).json({
                response: rows
            });
        })
    }
}
