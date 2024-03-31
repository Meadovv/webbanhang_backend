const UserService = require('./user.service');

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
        const user = UserService.create({ name, account_name, email, password, phone_number, cccd, date_of_birth, role });
        return user;
    }

    static login = async () => {

    }
}

module.exports = AccessService;