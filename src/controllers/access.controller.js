const AccessService = require('../services/access.service');

class AccessController {
    static register = async (req, res) => {
        try {
            const user = await AccessService.register(req.body);
            if (!user) {
                return res.status(400).json({ status: false, message: 'Email or Username already exists' });
            }
            return res.status(201).json({ status: true, user: user });
        } catch (error) {
            return res.status(500).json({ status: false, message: error });
        }
    }

    static login = async (req, res) => {
        try {
            const user = await AccessService.login(req.body);
            if (!user) {
                return res.status(400).json({ message: 'Invalid email or password' });
            }
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json({ status: false });
        }
    }
}

module.exports = AccessController;