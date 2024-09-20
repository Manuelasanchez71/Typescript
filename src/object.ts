
abstract class Animal {
    
    private readonly _especie: string;
    
   
    public nombre: string;

   
    protected _edad: number;

    static cantidadDeAnimales: number = 0;

    
    constructor(especie: string, nombre: string) {
        this._especie = especie;
        this.nombre = nombre;
        this._edad = 0; 
        Animal.cantidadDeAnimales++; 
    }

   
    abstract hacerSonido(): void;

    
    public crecer(anios: number): void {
        this._edad += anios;
        console.log(`${this.nombre} ha crecido ${anios} años. Edad actual: ${this._edad} años.`);
    }

    
    protected obtenerEspecie(): string {
        return this._especie;
    }
}


class Perro extends Animal {
    
    private _raza: string;

   
    constructor(nombre: string, raza: string) {
        super('Perro', nombre); 
        this._raza = raza;
    }

    
    hacerSonido(): void {
        console.log(`${this.nombre} dice: ¡Guau, guau!`);
    }

   
    public jugar(): void {
        console.log(`${this.nombre} está jugando.`);
    }
}


class Gato extends Animal {
    
    private _color: string;

   
    constructor(nombre: string, color: string) {
        super('Gato', nombre);
        this._color = color;
    }

    
    hacerSonido(): void {
        console.log(`${this.nombre} dice: ¡Miau, miau!`);
    }

   
    public ronronear(): void {
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
