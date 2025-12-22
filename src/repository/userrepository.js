const User = require("../model/User");

const createUser = async (data) => {
    console.log("data: ", data);
    data.role = "USER";
    return await User.create(data);
};

module.exports = {
    createUser,
};
