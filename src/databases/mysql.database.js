const mysql = require('mysql');

class Database {
    constructor() {
        this.connect();
    }

    connect() {
        this.connection = mysql.createConnection({
            host: 'localhost',
            port: 3306,
            user: 'root',
            password: '25062003',
            database: 'shop'
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