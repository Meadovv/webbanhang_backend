const userModel = require('../models/user.model');

class UserService {
    static create = async ({ name, account_name, email, password, phone_number, cccd, date_of_birth, role}) => {
        return await userModel.create({ name, account_name, email, password, phone_number, cccd, date_of_birth, role });
    }

    static findByEmail = async (email) => {
        return await userModel.findByEmail(email);
    }

    static findByUserName = async (account_name) => {
        return await userModel.findByUserName(account_name);
    }

    static update = async () => {

    }

    static delete = async () => {

    }
}

module.exports = UserService;