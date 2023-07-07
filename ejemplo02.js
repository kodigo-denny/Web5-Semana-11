// Clase padre
class Animal{
    color
    peso

    constructor(color, peso){
        this.color = color;
        this.peso = peso;
    }

    makeSound(){
        console.log("Emitiendo sonido de un animal")
    }

    comer(){
        console.log("Comiendo...")
    }

    morverse(){
        console.log("Me estoy moviendo")
    }
}

class Gato extends Animal{
    constructor(color, peso){
        super(color, peso)
    }

    makeSound(){
        console.log("Maullar")
    }
}

class Perro extends Animal{
    raza
    constructor(color, peso, raza){
        super(color, peso)
        this.raza = raza
    }

    ladrar(){
        console.log("Ladrando")
    }

    makeSound(){
        this.ladrar()
    }
}

class Cachorro extends Perro{
    valor
    constructor(color, peso, raza, valor){
        super(color, peso, raza)
        this.valor = valor
    }
}

class Ave extends Animal{
    tipo
    constructor(color, peso, tipo){
        super(color, peso)
        this.tipo = tipo;
    }

    comer(){
        console.log("Comiendo desde clase AVE")
        super.comer()
    }

    volar(){
        console.log("Volando")
    }
}