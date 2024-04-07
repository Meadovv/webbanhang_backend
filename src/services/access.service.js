const UserService = require('./user.service');
const Utils = require('../utils');
class AccessService {
    static register = async ({
        name,
        account_name,
        email,
        password,
        phone_number,
        cccd,
        date_of_birth,
        role
    }) => {
        const foundUser = await UserService.findByEmail(email) || await UserService.findByUserName(account_name);
        if (foundUser) {
            return null;
        }
        const hashPassword = await Utils.hashPassword(password);
        const user = UserService.create({ name, account_name, email, password: hashPassword, phone_number, cccd, date_of_birth, role });
        return user;
    }

    static login = async ({
        account_name,
        password
    }) => {
        const user = await UserService.findByUserName(account_name);
        if (!user) {
            return null;
        }
        const passwordMatched = await Utils.comparePassword(password, user.password)
        if(!passwordMatched) {
            return null;
        }
        return Utils.createToken({
            userId: user.id,
            role: user.role
        })
    };
}

module.exports = AccessService;