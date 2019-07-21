const { beforeEach, afterEach } = require('../src/dataSetup')
const sum  = require('../src/sum')

// beforeAll(() => {
//     console.log('--------beforeAll--------');
    
// });

// afterAll(() => {
//     console.log('--------afterAll--------');
// });


// test.only('只跑我', () => {
//     expect(1 + 2).toBe(3);
// });

test('測試引入函數', () => {
    expect(sum(1, 2)).toBe(3);
});

test('簡單型別 相等', () => {
    expect(1 + 2).toBe(3);
});

test('undefined, null, false', () => {
    expect(null).toBeNull()
    expect(undefined).toBeUndefined()
    expect(null).toBeDefined()
    expect(true).toBeTruthy()
    expect(false).toBeFalsy()
});

test('Number', () => {
    expect(2 + 2).toBeGreaterThan(3); // >
    expect(2 + 2).toBeGreaterThanOrEqual(3.5); // >=
    expect(2 + 2).toBeLessThan(5); // <
    expect(2 + 2).toBeLessThanOrEqual(4.5); // <=
})

test('浮點數', () => {
    expect(0.1 + 0.2).toBeCloseTo(0.3);
})

test('字串', () => {
    expect('team').not.toMatch(/I/);
    expect('Christoph').toMatch(/stop/);
});

test('物件 相等', () => {
    const data = { one: 1 };
    data['two'] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
});

test('Array, Set', () => {
    const shoppingList = [
        'diapers',
        'kleenex',
        'trash bags',
        'paper towels',
        'beer',
    ];
    expect(shoppingList).toContain('beer');
    expect(new Set(shoppingList)).toContain('beer');
})

test('Exception', () => {
    class ConfigError extends Error {
        constructor(msg) {
            super(msg)
        }
    }
    function compileAndroidCode() {
        throw new ConfigError('you are using the wrong JDK');
    }
    expect(compileAndroidCode).toThrow();
    expect(compileAndroidCode).toThrow(ConfigError);

    // You can also use the exact error message or a regexp
    expect(compileAndroidCode).toThrow('you are using the wrong JDK');
    expect(compileAndroidCode).toThrow(/JDK/);
})