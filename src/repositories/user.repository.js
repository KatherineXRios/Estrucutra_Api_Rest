const BaseRepository = require("./base.repository");
let _user = null;


class UserRepository extends BaseRepository{
    constructor({User}){
        super(User);
    }

    async getUserByUsername(username){
        return await _user.findOne({username});
    }
}

module.exports = UserRepository;