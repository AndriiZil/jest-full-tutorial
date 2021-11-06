const fetchData = function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('peanut butter');
        }, 2000);
    });
}

describe('Promises', () => {

    beforeEach(() => {
        jest.setTimeout(60000);
    });

    test('the data is peanut butter', () => {
        fetchData()
            .then(data => {expect(data).toBe('peanut butter')
        })
            .catch(console.error);
    });

    // test('the fetch fails with an error', () => {
    //     fetchData().catch(e => expect(e).toMatch('error'));
    // });
    //
    // test('the data is peanut butter', () => {
    //     expect(fetchData()).resolves.toBe('peanut butter');
    // });
    //
    // test('the fetch fails with an error', () => {
    //     expect(fetchData()).rejects.toMatch('error');
    // });
});
