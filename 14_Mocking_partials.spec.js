const defaultExport = require('./foo-bar-baz');
const { bar, foo } = require('./foo-bar-baz');

console.log('defaultExport', defaultExport);
console.log(bar);
console.log(foo);

jest.mock('./foo-bar-baz', () => {
    const originalModule = jest.requireActual('./foo-bar-baz');

    // Mock the default export and named export 'foo'
    return {
        __esModule: true,
        ...originalModule,
        default: jest.fn(() => 'mocked baz'),
        foo: 'mocked foo',
    };
});

describe('', () => {

    test('should do a partial mock', () => {
        const defaultExportResult = defaultExport;
        expect(defaultExportResult).toBe('mocked baz');
        expect(defaultExport).toHaveBeenCalled();

        expect(foo).toBe('mocked foo');
        expect(bar()).toBe('bar');
    });

});
