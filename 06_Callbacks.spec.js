function fetchData(callback) {
    return callback('peanut butter');
}

describe('Callbacks', () => {

    it('the data is peanut butter', done => {
        function callback(data) {
            try {
                expect(data).toBe('peanut butter');
                done();
            } catch (error) {
                done(error);
            }
        }

        fetchData(callback);
    });

});
