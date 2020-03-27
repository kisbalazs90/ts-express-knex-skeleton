import * as Knex from 'knex'
import { Logger } from '@overnightjs/logger';

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

const instance: any = Knex(config as Knex.Config)

Logger.Info(
  `Will connect to://${config.connection.user}@${
    config.connection.host
  }/${config.connection.database}`
)
instance
  .raw('select 1')
  .then(() => {
    Logger.Info(`Connected to database - OK`)
  })
  .catch(err => {
    Logger.Err(`Failed to connect to database: ${err}`)
    process.exit(1)
  })

export const db = () => instance

// Returns a timestamp suitable for inserting into Postgres
export const timestamp = (): string => new Date().toUTCString()