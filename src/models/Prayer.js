const map = {
  0: 'Zora',
  1: 'Sabah',
  2: 'Podne',
  3: 'Ikindija',
  4: 'Akšam',
  5: 'Jacija'
}

class Salah {
  constructor({ time, id }) {
    this.id = id;
    this.time = time;
    this.name = map[id];
    this.active = false;
  }
}

export default Salah;