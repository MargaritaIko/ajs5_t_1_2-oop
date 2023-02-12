import Bowman from '../bowman';

test('to check that created Bowman object has all properties', () => {
  const input = new Bowman('Joe', 'Bowman');
  const sample = {
    name: 'Joe',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(input).toEqual(sample);
});
