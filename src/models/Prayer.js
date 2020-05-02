import { format, differenceInMinutes } from 'date-fns';
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
    const [h, m] = time.split(':');
    const date = new Date();
    date.setHours(h);
    date.setMinutes(m);
    
    this.id = id;
    this.time = format(date, 'HH:mm');
    this.name = map[id];
    this.remaining = differenceInMinutes(date, new Date());
  }
}

export default Salah;