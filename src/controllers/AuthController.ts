import { JwtManager, ISecureRequest } from '@overnightjs/jwt';
import { Controller, Middleware, Get, Post } from '@overnightjs/core';
import { Request, Response } from 'express';
import { UserModel } from '../models/UserModel';
 
@Controller('auth/login')
export class AuthController {
    @Post()
    private postLogin(req: Request, res: Response) {
        const userModel = new UserModel();

        if (!!req.body.email && !!req.body.password) {
            const {email, password} = req.body;
            userModel.findByEmailAndPw(email, password);

            return res.status(200).json({
                token: JwtManager.jwt({email: req.params.email})
            });
        }

        return res.status(401);
    }
}