const {fetchData, fetchData1} = require('../src/fetchData')

test.only('the fetch success with an peanut butter', () => {
    return fetchData().then(data => {
        expect(data).toBe('peanut butter');
    });
});

test('the fetch success with an peanut butter', () => {
    return expect(fetchData()).resolves.toBe('peanut butter');
});

test('the fetch fails with an error', () => {
    expect.assertions(1);
    return fetchData1().catch(e => expect(e).toMatch('error'));
});

test('the fetch fails with an error', () => {
    return expect(fetchData1()).rejects.toMatch('error');
});
