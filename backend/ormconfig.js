const Connection = [
  {
    type: 'postgres',
    url: 'postgres://dzycvvqjalazzy:bc1d8ed96b2ad693e3703e4c57caed89e6012c0f1e428c24c5b182b8d3ad9578@ec2-52-73-155-171.compute-1.amazonaws.com:5432/dduser79lor18h',
    ssl: true,
    extra: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
    synchronize: true,
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
  {
    type: 'postgres',
    url: 'postgres://kevent:kevent@localhost:5432/keventDB',
    synchronize: true,
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
];

module.exports = Connection;
