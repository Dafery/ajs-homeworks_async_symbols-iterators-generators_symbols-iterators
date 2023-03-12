class Team {
  constructor() {
    this.members = [];
  }

  compare(character) {
    for (const member of this.members) {
      if (JSON.stringify(member) === JSON.stringify(character)) {
        return true;
      }
    }
    return false;
  }

  add(character) {
    if (this.compare(character)) {
      throw new Error('Такой персонаж уже существует');
    }

    this.members.push(character);
  }

  [Symbol.iterator]() {
    let current = 0;

    return {
      next: () => (current < this.members.length ? { value: this.members[current++], done: false } : { done: true }),
    };
    // ещё один рабочий вариант
    // return this.members.values();
  }
}

const char1 = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
};

const char2 = {
  name: 'Демон',
  type: 'Daemon',
  health: 100,
  level: 1,
  attack: 10,
  defence: 40,
};

const team = new Team();
team.add(char1);
team.add(char2);

for (const char of team) {
  console.log(char);
}
