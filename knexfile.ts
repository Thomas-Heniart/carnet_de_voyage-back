require("dotenv").config();

module.exports = {

    development: {
        client: "sqlite3",
        connection: {
            filename: "../dev.sqlite3"
        },
        useNullAsDefault: true,
        migrations: {
            tableName: "knew_migrations"
        }
    },

    staging: {
        client: "postgresql",
        connection: {
            database: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: "knex_migrations"
        }
    },

    production: {
        client: "postgresql",
        connection: {
            database: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: "knex_migrations"
        }
    }

};
