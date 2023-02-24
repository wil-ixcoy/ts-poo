/* se usa la palabra extends para heredar */

/* clase padre */
export class Animal {
  constructor(public name: string) {}

  move() {
    console.log('Moving along');
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
  }
}

/* clase hija  */
export class Dog extends Animal {
  /* al agregar un nuevo atributo, se debe inicializar en un constructor,
  se debe recibir el atributo heredado (name) y el nuevo (owner) */

  constructor(name: string, public owner: string) {
    /* se pasa  el atributo name, a donde pertenece (clase Animal) con super*/
    super(name);

    /* nuevo atributo inicializado */
    this.owner;
  }

  woof(times: number) {
    for (let i = 0; i < times; i++) {
      console.log('woof!');
    }
  }
}

const fifi = new Animal('fifi');
fifi.move();
let saludo = fifi.greeting();
console.log(saludo);

/* uso de clase hija */
const chase = new Dog('Chase', 'nico');
chase.woof(4);
