const mysql = require('mysql');
const database_config = require('../configs/database.config');

class Database {
    constructor() {
        this.connect();
    }

    connect() {
        this.connection = mysql.createConnection({
            host: database_config.host,
            port: database_config.port,
            user: database_config.user,
            password: database_config.password,
            database: database_config.database
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