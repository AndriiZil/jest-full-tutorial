const fetchData = function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('peanut butter');
        }, 2000);
    });
}

const fetchDataWithError = function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('error');
        }, 2000);
    });
}

describe('Async / Await', () => {

    test('the data is peanut butter', async () => {
        const data = await fetchData();
        expect(data).toBe('peanut butter');
    });

    test('the fetch fails with an error', async () => {
        try {
            await fetchDataWithError();
        } catch (e) {
            expect(e).toMatch('error');
        }
    });

    test('the data is peanut butter', async () => {
        await expect(fetchData()).resolves.toBe('peanut butter');
    });

    test('the fetch fails with an error', async () => {
        await expect(fetchDataWithError()).rejects.toMatch('error');
    });

});
