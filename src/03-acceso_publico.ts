/* por defecto todo lo que no se coloque explicitamente, es publico

la palabra reservada es public */
export class myDate {
  public year: number;
  public month: number;
  public day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
  /* si no se coloca por defecto es publico */
  printFormat(): string {
    return `${this.day}/${this.month}/${this.year}`;
  }

  public add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this.day += amount;
    } else if (type === 'months') {
      this.month += amount;
    } else {
      this.year += amount;
    }
  }
}

const date = new myDate(2023, 4, 3);

date.add(4, 'years');
console.log(date.printFormat());
