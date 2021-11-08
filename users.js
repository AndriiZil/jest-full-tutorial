const users = require('axios');

class Users {
    static all() {
        return users.get('/users.json').then(resp => resp.data);
    }
}

module.exports = Users;
