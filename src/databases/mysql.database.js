const mysql = require('mysql');
const database_config = require('../configs/database.config');

class Database {
    constructor() {
        this.connect();
    }

    connect() {
        this.connection = mysql.createConnection({
            host: database_config.database,
            port: database_config.host,
            user: database_config.user,
            password: database_config.password,
            database: database_config.shop
        });

        this.connection.connect((err) => {
            if (err) {
                console.error('Error connecting: ' + err.stack);
                return;
            }
            console.log('Database connected!');
        });
    }

    static getInstance() {
        if(!Database.connection) {
            Database.connection = new Database();
        }
        return Database.connection;
    }
}
module.exports = Database;