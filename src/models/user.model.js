const Database = require('../databases/mysql.database');

class User {
    static async create({ name, account_name, email, password, phone_number, cccd, date_of_birth, role }) {
        const sql = 'INSERT INTO users (name, account_name, email, password, phone_number, cccd, date_of_birth, role) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
        const params = [ name, account_name, email, password, phone_number, cccd, date_of_birth, role ];

        return new Promise((resolve, reject) => {
            Database.getInstance().connection.query(sql, params, (err, results) => {
                if (err) {
                    console.log(err);
                    return reject(null);
                }
                return resolve({
                    id: results.insertId, name, account_name, email, phone_number, cccd, date_of_birth, role
                });
            });
        });
    }

    static async findByEmail(email) {
        const sql = 'SELECT * FROM users WHERE email = ?';
        const params = [email];

        return new Promise((resolve, reject) => {
            Database.getInstance().connection.query(sql, params, (err, results) => {
                if (err) {
                    console.log(err);
                    return reject(null);
                }
                if (results.length === 0) {
                    return resolve(null);
                }
                const user = results[0];
                return resolve({
                    id: user.id,
                    name: user.name,
                    account_name: user.account_name,
                    email: user.email,
                    password: user.password,
                    phone: user.phone,
                    cccd: user.cccd,
                    date_of_birth: user.date_of_birth,
                    role: user.role
                });
            });
        });
    }

    static async findByUserName(account_name) {
        const sql = 'SELECT * FROM users WHERE account_name = ?';
        const params = [account_name];

        return new Promise((resolve, reject) => {
            Database.getInstance().connection.query(sql, params, (err, results) => {
                if (err) {
                    console.log(err);
                    return reject(null);
                }
                if (results.length === 0) {
                    return resolve(null);
                }
                const user = results[0];
                return resolve({ 
                    id: user.id,
                    name: user.name,
                    account_name: user.account_name, 
                    email: user.email,
                    password: user.password,
                    phone: user.phone,
                    cccd: user.cccd,
                    date_of_birth: user.date_of_birth,
                    role: user.role });
            });
        });
    }

}

module.exports = User;