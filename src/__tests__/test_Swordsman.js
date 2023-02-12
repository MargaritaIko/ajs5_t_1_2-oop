import Swordsman from '../swordsman';

test('to check that created Swordsman object has all properties', () => {
  const input = new Swordsman('Joe', 'Swordsman');
  const sample = {
    name: 'Joe',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(input).toEqual(sample);
});
