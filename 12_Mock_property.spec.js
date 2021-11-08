describe('.mock Property', () => {

    test('.mock property', () => {
        const myMock = jest.fn();

        const a = new myMock();
        const b = {};
        const bound = myMock.bind(b);
        bound();

        console.log('Mock', myMock.mock.instances);
    });

    test('Mock Return Values 1', () => {
        const myMock = jest.fn();

        console.log('Returned value:', myMock());

        myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);

        console.log(myMock(), myMock(), myMock(), myMock());
    });

    test('', () => {
        const filterTestFn = jest.fn();

        filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

        const result = [11, 12].filter(num => filterTestFn(num));

        console.log(result); // [11]

        console.log(filterTestFn.mock.calls[0][0]); // 11
        console.log(filterTestFn.mock.calls[1][0]); // 12
    });

});
