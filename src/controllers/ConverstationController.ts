import { Request, Response } from 'express';
import { Controller, Middleware, Get, Put, Post, Delete, ClassMiddleware } from '@overnightjs/core';
import { JwtManager } from '@overnightjs/jwt';
import { MessageModel } from '../models/MessageModel';

@Controller('messages')
export class MessageController {
    @Get(':conversation_id')
    @Middleware(JwtManager.middleware)
    private getMessages(req: Request, res: Response) {
        const messageModel = new MessageModel();
        messageModel.findAll(req.params.conversation_id).then((rows) => {
            return res.status(200).json({
                response: rows
            });
        });
    } 

    @Post()
    @Middleware(JwtManager.middleware)
    private createMessages(req: Request, res: Response) {
        const messageModel = new MessageModel();
        messageModel.save(req.body).then((rows) => {
            return res.status(200).json({
                response: rows
            });
        });
    }
}
