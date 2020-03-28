// Update with your config settings.

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: 'mysql',
      database: 'rchat',
      user:     'root',
      password: 'rchat123'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
