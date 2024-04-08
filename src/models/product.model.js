const Database = require('../databases/mysql.database');
const User = require('./user.model')
class Product {
    static findById = async (productId) => {

    }

    static create = async ({ userId, name, category, unit, price, description, number }) => {

        const user = await User.findById(userId);
        if(user.role !== 'seller') {
            throw new Error('You can not add product!');
        } 

        const sql = 'INSERT INTO products (name, category, unit, price, description, number) VALUES (?, ?, ?, ?, ?, ?)';
        const params = [name, category, unit, price, description, number];

        return new Promise((resolve, reject) => {
            Database.getInstance().connection.query(sql, params, (err, results) => {
                if (err) {
                    return reject(null);
                }
                return resolve({
                    id: results.insertId, name, category, unit, price, description, number
                });
            });
        });
    }
}

module.exports = Product;