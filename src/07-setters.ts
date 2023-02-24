/* Con set podemos modificar a una propiedad con un alcance privado, */

export class myDate {

  constructor(
    public year: number,
    /* si se va a usar getters y setters en una variable privada
    se coloca un guion bajo (underscope) */
    private _month: number,
    private _day: number,
  ) {}



  printFormat(): string {
    const day = this.addPadding(this.day);
    const month = this.addPadding(this.month);
    return `${day}/${month}/${this.year}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this._day += amount;
    } else if (type === 'months') {
      this._month += amount;
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


  get isLeapYear():boolean{
    if(this.year % 400 === 0) return true;
    if(this.year % 100 === 0) return false;
    return  this.year % 4 === 0;
  }

  get day(){
    return this._day;
  }

  get month(){
    return this._month;
  }

  /* setters */

  /* recibe un parametro y modifica un atributo de la clase, no retorna nada */
  set month(newValue: number){
    if(newValue >= 1 && newValue <=12){
      this._month = newValue;
    }else{
      throw new Error("El mes no existe")
    }
  }
}

const date = new myDate(1999,1,23);
const date1 = new myDate(2000, 4, 3);
const date2 = new myDate(2001, 4, 3);
const date3 = new myDate(2002, 4, 3);

/* isLeapYear a pesar de ser función, se usa externamente como atributo */
console.log("2000 ", date1.isLeapYear);
console.log("2001 ", date2.isLeapYear);
console.log("2002 ", date3.isLeapYear);

/* set */
/* modifica el atributo month usando set */
date.month = 11;
/* se obtiene el nuevo valor, usando la propiedad */
console.log(date.month);
