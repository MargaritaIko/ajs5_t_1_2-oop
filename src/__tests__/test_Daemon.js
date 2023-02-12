import Daemon from '../daemon';

test('to check that created Daemon object has all properties', () => {
  const input = new Daemon('Joe', 'Daemon');
  const sample = {
    name: 'Joe',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(input).toEqual(sample);
});
