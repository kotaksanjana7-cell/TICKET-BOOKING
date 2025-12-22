const { createUser } = require("../repository/UserRepository");

class UserService {
    async createUser(data) {  
        console.log("request body: ", data);
        const { name, email, password, phone } = data || {};
        if (!name || !email || !password || !phone) {
            // first validate
            return { success: false, body: null };
        }
        const user = await createUser(data);
        return { success: true, body: user };
        // stored in database
        // return object
    }
}

module.exports = UserService;
