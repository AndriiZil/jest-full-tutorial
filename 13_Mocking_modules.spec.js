const axios = require('axios');
const Users = require('./users');

jest.mock('axios');

describe('Mocking Modules', () => {

    test('should fetch users', async () => {
        const users = [{ name: 'Bob' }];
        const resp = { data: users };

        // axios.get.mockResolvedValue(resp);

        // or you could use the following depending on your use case:
        axios.get.mockImplementation(() => Promise.resolve(resp));

        console.log('Result:', resp);

        // return Users.all().then(data => expect(data).toEqual(users));
        const result = await Users.all();
        expect(result).toEqual(users);
    });

});
