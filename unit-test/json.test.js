const matchersWithOptions = require('jest-json-schema').matchersWithOptions;
const formats = {
    bcp47: /^[a-z]{2}-[A-Z]{2}$/,
}

beforeAll(() => {
  expect.extend(matchersWithOptions({ formats }));
});


it('validates my json', () => {
  const schema = {
    properties: {
      hello: { type: 'string' },
      name: { type: 'string'},
      age: {type: 'number'},
      skills: {type: 'array'},
      profile: { type: 'object' }
    },
    required: ['hello', 'age', 'skills'],
  };
  expect({ hello: 'world', name: 'chris', age: 18, skills: ['JavaScript', 'CSS']}).toMatchSchema(schema);
  expect({ hello: '', age: 0, skills: [], profile:{} }).toMatchSchema(schema);
});