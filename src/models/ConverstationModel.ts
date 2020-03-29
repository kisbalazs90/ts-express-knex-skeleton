import { db } from '../config/db';
import { Logger } from '@overnightjs/logger';
import { ConverstationInterface } from '../interfaces/ConverstationInterface';

export class ConverstationModel {
    private tableName:string = 'converstations';
    private db:any = db;
    
    public async save(converstaion:ConverstationInterface) {
        try {
            return await this.db()
                .insert({
                    name: converstaion.name,
                    members: converstaion.members,
                })
                .into(this.tableName);   
        } catch (error) {
            Logger.Err(error)
        }
    }

    public async findAll() {
        try {
            return await this.db()
                .select('name', 'memberes')
                .from(this.tableName)
                .whereNull('is_deleted');
                
        } catch (error) {
            Logger.Err(error);
        }
    }
}