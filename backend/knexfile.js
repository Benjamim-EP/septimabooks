// Update with your config settings.

module.exports = {

  
    client: 'postgresql',
    connection: {
      database: 'septimabooks',
      user:     'postgres',
      password: 'benjamim'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  
};
