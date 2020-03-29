import { Request, Response } from 'express';
import { Controller, Middleware, Get, Put, Post, Delete, ClassMiddleware } from '@overnightjs/core';
import { JwtManager } from '@overnightjs/jwt';
import { MessageModel } from '../models/MessageModel';
import { ConverstationModel } from '../models/ConverstationModel';

@Controller('converstations')
export class ConverstationController {
    @Get(':conversation_id')
    @Middleware(JwtManager.middleware)
    private getConverstations(req: Request, res: Response) {
        const converstationModel = new ConverstationModel();
        converstationModel.findAll().then((rows) => {
            return res.status(200).json({
                response: rows
            });
        });
    } 

    @Post()
    @Middleware(JwtManager.middleware)
    private crecreateConverstation(req: Request, res: Response) {
        const messageModel = new MessageModel();
        messageModel.save(req.body).then((rows) => {
            return res.status(200).json({
                response: rows
            });
        });
    }
}
