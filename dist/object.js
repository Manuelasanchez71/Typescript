"use strict";
class Animal {
    constructor(especie, nombre) {
        this._especie = especie;
        this.nombre = nombre;
        this._edad = 0;
        Animal.cantidadDeAnimales++;
    }
    crecer(anios) {
        this._edad += anios;
        console.log(`${this.nombre} ha crecido ${anios} años. Edad actual: ${this._edad} años.`);
    }
    obtenerEspecie() {
        return this._especie;
    }
}
Animal.cantidadDeAnimales = 0;
class Perro extends Animal {
    constructor(nombre, raza) {
        super('Perro', nombre);
        this._raza = raza;
    }
    hacerSonido() {
        console.log(`${this.nombre} dice: ¡Guau, guau!`);
    }
    jugar() {
        console.log(`${this.nombre} está jugando.`);
    }
}
class Gato extends Animal {
    constructor(nombre, color) {
        super('Gato', nombre);
        this._color = color;
    }
    hacerSonido() {
        console.log(`${this.nombre} dice: ¡Miau, miau!`);
    }
    ronronear() {
        console.log(`${this.nombre} está ronroneando.`);
    }
}
const perro1 = new Perro('Fido', 'Labrador');
perro1.hacerSonido();
perro1.crecer(3);
perro1.jugar();
const gato1 = new Gato('Whiskers', 'Gris');
gato1.hacerSonido();
gato1.crecer(2);
gato1.ronronear();
console.log(`Cantidad total de animales creados: ${Animal.cantidadDeAnimales}`);
