const foo = require('./foo');

jest.mock('./foo');

describe('Mock Implementations', () => {

    test('Mock Implementation 1', () => {
        const myMockFn = jest.fn(cb => cb(null, true));

        myMockFn((err, val) => console.log(val));

        // > true
        console.log('LOG');
    });

    test('Mock Implementation 2', () => {

        foo.mockImplementation(() => 42);
        console.log(foo()); // 42

        console.log('Result');

    });

    test('Mock Implementation 3', () => {
        const myMockFn = jest
            .fn()
            .mockImplementationOnce(cb => cb(null, true))
            .mockImplementationOnce(cb => cb(null, false));

        myMockFn((err, val) => console.log(val)); // > true

        myMockFn((err, val) => console.log(val)); // > false
    });

    test('Mock Implementation 4', () => {
        const myMockFn = jest
            .fn(() => 'default')
            .mockImplementationOnce(() => 'first call')
            .mockImplementationOnce(() => 'second call');

        console.log(myMockFn(), myMockFn(), myMockFn(), myMockFn()); // > 'first call', 'second call', 'default', 'default'
    });

    test('Mock Implementation 5', () => {
        const myObj = {
            myMethod: jest.fn().mockReturnThis(),
        };

        // Is the same as
        const otherObj = {
            myMethod: jest.fn(function () {
                return this;
            }),
        };
    });

    test('Mock Names', () => {
        const myMockFn = jest
            .fn()
            .mockReturnValue('default')
            .mockImplementation(scalar => 42 + scalar)
            .mockName('add42'); // Show this name when Error occurred

        expect(myMockFn).toHaveBeenCalled();
    });

    test('Custom Matchers', () => {
        console.log(foo());
        console.log('Mock', foo.mock);
        /**
         * Mock {
            calls: [ [], [] ],
            instances: [ undefined, undefined ],
            invocationCallOrder: [ 2, 9 ],
            results: [ { type: 'return', value: 42 }, { type: 'return', value: 42 } ]
        }
         */
        console.log(foo.mock.calls.length); // 2
        expect(foo.mock.calls.length).toBeGreaterThan(0);
        expect(foo.mock.calls.length).toBeGreaterThan(1);
        // expect(foo.mock.calls).toEqual([[arg1, arg2]]);
        // expect(foo.getMockName()).toBe('a mock name');
    });

});