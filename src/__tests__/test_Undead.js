import Undead from '../undead';

test('to check that created Undead object has all properties', () => {
  const input = new Undead('Joe', 'Undead');
  const sample = {
    name: 'Joe',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(input).toEqual(sample);
});
