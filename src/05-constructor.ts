/* Es el constructor en el que construimos la instancia y mandamos
 los parámetros por defecto por el cual queremos que
 se inicialice esa instancia a un objeto. */

export class myDate {
  /* el constructor se puede acortar, definiendo los accesos de
  cada atributo y el tipo */

  /* si no se coloca el acceso no se automatiza y no funciona*/
  constructor(
    public year: number,
    private month: number,
    private day: number,
    /* podemos definir un valor por defecto */
    public hours:number = 12
  ) {}



  printFormat(): string {
    const day = this.addPadding(this.day);
    const month = this.addPadding(this.month);
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
