import { db } from '../config/db';
import * as bcrypt from 'bcryptjs';
import { UserInterface } from '../interfaces/UserInterface';
import { Logger } from '@overnightjs/logger';

export class UserModel {
    private tableName:string = 'users';
    private db:any = db;
    
    public async save(user:UserInterface) {
        try {
            return await this.db()
            .insert({
                email: user.email,
                name: user.name,
                password: this.hashPassword(user.password)
            })
            .into(this.tableName);   
        } catch (error) {
            Logger.Err(error)
        }
    }

    public async findById(id:any) {
        try {
            return await this.db('users')
            .select('id', 'name', 'email')
            .from(this.tableName)
            .where({id:id});            
        } catch (error) {
            Logger.Err(error);
        }
    }

    public async findAll() {
        try {
            return await this.db('users')
            .select('id', 'name', 'email')
            .from(this.tableName);            
        } catch (error) {
            Logger.Err(error);   
        }
    }

    public async findByEmailAndPw(email:string, password:string) {
        try {
            return await this.db().select('*')
            .from(this.tableName)
            .where({
                email: email,
                password: this.hashPassword(password)
            });            
        } catch (error) {
            Logger.Err(error);
        }
    }

    private hashPassword(password:string) {
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        
        return bcrypt.hashSync(password, salt);   
    }
}