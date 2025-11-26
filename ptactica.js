
const pizza = {
    size: "large",
    price: 10.99,
    toppings: {
        sauce: "extra",
        pepperoni: "double",
        cheese: "extra"
        
    }
}

const {toppings: {pepperoni: pizzaTopping, cheese: pizzaCheese} , price} = pizza;

const persona = {
    nombre: "Sebastian",
    saludar() {
        console.log(`Hola me llamo ${this.nombre} tengo ${this.edad}`)
    },
    edad: 33
}

console.log(persona.nombre)
console.log(persona.edad);

persona.saludar()

