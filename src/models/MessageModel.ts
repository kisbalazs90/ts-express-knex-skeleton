import { db } from '../config/db';
import { MessageInterface } from '../interfaces/MessageInterface';
import { Logger } from '@overnightjs/logger';

export class MessageModel {
    private tableName:string = 'messages';
    private db:any = db;
    
    public async save(message:MessageInterface) {
        console.log('!!!!!Message', message);
        try {
            return await this.db()
            .insert({
               conversation_id: message.conversation_id,
               from: message.from,
               message: message.message
            })
            .into(this.tableName);   
        } catch (error) {
            Logger.Err(error)
        }
    }

    public async findAll(conversationId:any) {
        try {
            return await this.db()
                .select('m.id', 'm.message', 'm.from', 'u.name')
                .from(`${this.tableName} as m`)
                .leftJoin('users as u', 'm.from', 'u.id')
                .where({ conversation_id:conversationId })
                .whereNull('is_deleted')
        } catch (error) {
            console.log(error)
            Logger.Err(error);   
        }
    }
}