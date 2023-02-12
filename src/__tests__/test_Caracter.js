import Character from '../index';

import Daemon from '../daemon';

test('to check that created object has all properties', () => {
  const input = new Character('Joe', 'Daemon');
  const sample = {
    name: 'Joe',
    type: 'Daemon',
    health: 100,
    level: 1,
  };

  expect(input).toEqual(sample);
});

test.each('to check that class throw new error for name < 2 bytes', (name) => {
  const input = () => new Character(name);
  expect(input).toThrow('Error: name length should be in b/w 2 and 10 bytes.');
});

test.each('to check that class throw new error for name > 10 bytes', (name) => {
  const input = () => new Character(name);
  expect(input).toThrow('Error: name length should be in b/w 2 and 10 bytes.');
});

test('to check that class throw new error for wrong type', () => {
  const input = () => new Character('Joe', 'SomeType');
  expect(input).toThrow('Error: type should be one of the list - Bowman, Swordsman, Magician, Daemon, Undead or Zombie.');
});

test('to check for successful character level up', () => {
  const input = new Character('Joe', 'Daemon');
  input.levelUp();
  const sample = {
    name: 'Joe',
    type: 'Daemon',
    health: 100,
    level: 2,
    attack: 12,
    defence: 48,
  };

  expect(input).toEqual(sample);
});

test('to check failed character level up', () => {
  const input = new Daemon('Joe', 'Daemon');
  input.health = 0;
  expect(input.levelUp()).toThrow('You cannot level up.The hero is dead.');
});

test('to check for successful damage to a character', () => {
  const input = new Daemon('Joe', 'Daemon');
  input.damage(20);
  const sample = {
    name: 'Joe',
    type: 'Daemon',
    health: 88,
    level: 1,
    attack: 10,
    defence: 40,
  };

  expect(input).toEqual(sample);
});

test('to check for failed character damage', () => {
  const input = new Daemon('Joe', 'Daemon');
  input.health = 0;
  expect(input.damage(20)).toThrow('The hero is dead.');
});
