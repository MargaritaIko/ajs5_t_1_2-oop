import Magician from '../magician';

test('to check that created Magician object has all properties', () => {
  const input = new Magician('Joe', 'Magician');
  const sample = {
    name: 'Joe',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(input).toEqual(sample);
});
