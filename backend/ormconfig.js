require('dotenv').config();
console.log(process.env.DATABASE_URL);
const Connection = [
  {
    type: 'postgres',
    url: process.env.DATABASE_URL,
    ssl: process.env.DATABASE_URL ? true : false,
    extra: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
    synchronize: false,
    logging: false,
    entities: ['src/entity/**/*.ts'],
    migrations: ['src/migration/**/*.ts'],
    subscribers: ['src/subscriber/**/*.ts'],
    cli: {
      entitiesDir: 'src/entity',
      migrationsDir: 'src/migration',
      subscribersDir: 'src/subscriber',
    },
  },
  // {
  //   type: 'postgres',
  //   url: 'postgres://kevent:kevent@localhost:5432/keventDB',
  //   synchronize: false,
  //   logging: false,
  //   entities: ['src/entity/**/*.ts'],
  //   migrations: ['src/migration/**/*.ts'],
  //   subscribers: ['src/subscriber/**/*.ts'],
  //   cli: {
  //     entitiesDir: 'src/entity',
  //     migrationsDir: 'src/migration',
  //     subscribersDir: 'src/subscriber',
  //   },
  // },
];

module.exports = Connection;
