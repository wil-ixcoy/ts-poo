/* se usa la palabra extends para heredar */

/* clase padre */
export class Animal {
  /* protected solo permite usarse de manera interna entre la misma clase y clases a las que
  se hereda */
  constructor(protected name: string) {}

  move() {
    console.log('Moving along');
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
  }

  /* desde afuera no se usa, solo entre clases */
  protected doSomething(){
    console.log("dooo");

  }
}

export class Dog extends Animal {


  constructor(name: string, public owner: string) {
    /* el constructor del padre solo se llama dentro del constructor del hijo con super*/
    super(name);

    this.owner;
  }

  woof(times: number) {
    for (let i = 0; i < times; i++) {
      console.log('woof! ', this.name);
    }
    this.doSomething();
  }

  /* se crea una funcion que cree un nuevo movimiento */
  move(){
    console.log("Moviendose como un perro");
    /* y usa el metodo del padre con super */
    super.move();

  }
}

const fifi = new Animal('fifi');
fifi.move();
let saludo = fifi.greeting();
console.log(saludo);

const chase = new Dog('Chase', 'nico');
chase.woof(2);
/* no es la funcion del padre, es del hijo move() */
chase.move();
