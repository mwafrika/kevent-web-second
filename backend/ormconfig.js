const { flattenDiagnosticMessageText } = require("typescript");

var DATABASE_URL = require("./src/config").DATABASE_URL;
var DEV_DATABASE_URL = require("./src/config").DEV_DATABASE_URL;

console.log(DATABASE_URL, "DATABASE_URL");
const Connection = [
  {
    environment: "production",
    type: "postgres",
    url: DATABASE_URL,
    ssl: true,
    extra: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
    synchronize: true,
    logging: false,
    entities: ["src/entity/**/*.ts"],
    migrations: ["src/migration/**/*.ts"],
    subscribers: ["src/subscriber/**/*.ts"],
    cli: {
      entitiesDir: "src/entity",
      migrationsDir: "src/migration",
      subscribersDir: "src/subscriber",
    },
  },
  {
    environment: "development",
    type: "postgres",
    url: DEV_DATABASE_URL,
    synchronize: false,
    logging: false,
    entities: ["src/entity/**/*.ts"],
    migrations: ["src/migration/**/*.ts"],
    subscribers: ["src/subscriber/**/*.ts"],
    cli: {
      entitiesDir: "src/entity",
      migrationsDir: "src/migration",
      subscribersDir: "src/subscriber",
    },
  },
];

module.exports = Connection;
