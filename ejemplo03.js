class Figura{
    lado1

    constructor(lado1){
        this.lado1 = lado1;
    }

    area(){
        return this.lado1;
    }
}

class Cuadrado extends Figura{
    constructor(lado1){
        super(lado1)
    }

    area(){
        return super.area() * super.area()
    }
}

class Rectangulo extends Figura{
    lado2
    constructor(lado1, lado2){
        super(lado1)
        this.lado2 = lado2
    }

    area(){
        return this.lado1 * this.lado2
    }
}

class Triangulo extends Rectangulo{
    constructor(lado1, lado2){
        super(lado1, lado2)
    }

    area(){
        return super.area() / 2
    }
}

class Romboide extends Rectangulo{
    constructor(lado1, lado2){
        super(lado1, lado2)
    }
}