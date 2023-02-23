/* se utiliza private para privar a una propiedad de la clase, puede usarse
en todos lados dentro de la clase, pero no fuera de él.

la palabra reservada es private */
export class myDate {
  public year: number;
  public month: number;
  private day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
  /* si no se coloca por defecto es publico */
  printFormat(): string {
    const day = this.addPadding(this.day)
    const month = this.addPadding(this.month)
    return `${day}/${month}/${this.year}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this.day += amount;
    } else if (type === 'months') {
      this.month += amount;
    } else {
      this.year += amount;
    }
  }

/* metodo privado, solo puede usarse dentro de la clase */
 private addPadding(value: number) {
    if (value < 10) {
      return `0${value}`;
    } else {
      return value.toString();
    }
  }
}

const date = new myDate(2023, 4, 3);

date.add(4, 'years');
console.log(date.printFormat());

/* error, no se puede acceder desde afuera */
//date.addPadding()
