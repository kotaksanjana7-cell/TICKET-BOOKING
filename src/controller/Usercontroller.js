const UserService = require("../service/UserService");
const userService = new UserService();
class UserController {
    async addUser(req, res) {
        try {
            const response = await userService.createUser(req.body);
            console.log("response: ", response);
            if (!response.success) {
                res.status(400).json("Invalid request");
            }
            res.status(201).json(response?.data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = UserController;
