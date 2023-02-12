import Zombie from '../zombie';

test('to check that created Zombie object has all properties', () => {
  const input = new Zombie('Joe', 'Zombie');
  const sample = {
    name: 'Joe',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(input).toEqual(sample);
});
