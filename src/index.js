const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

export default class Character {
  constructor(name, type) {
    if (typeof name === 'string' && name.length >= 2 && name.length <= 10) {
      this.name = name;
    } else {
      throw new Error('Error: name length should be in b/w 2 and 10 bytes.');
    }
    if (types.includes(type)) {
      this.type = type;
    } else {
      throw new Error('Error: type should be one of the list - Bowman, Swordsman, Magician, Daemon, Undead or Zombie.');
    }
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.health = 100;
      Math.round(this.attack *= 1.2);
      Math.round(this.defence *= 1.2);
    } else {
      throw new Error('You cannot level up.The hero is dead.');
    }
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      throw new Error('The hero is dead.');
    }
  }
}
