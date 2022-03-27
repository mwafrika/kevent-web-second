const Connection = [
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
  {
    type: 'postgres',
    url: 'postgres://yxocnxjmhyijxg:526c5ebabafb1a2f290c6957b7c2258d4e8b9fe1ef318bd56ecec420f13b7832@ec2-44-194-92-192.compute-1.amazonaws.com:5432/df7ueuvmk7b93d',
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
];

module.exports = Connection;
