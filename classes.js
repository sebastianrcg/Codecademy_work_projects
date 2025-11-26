class persona {


    constructor(nombre, apellido, edad){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }

    get nombre(){
        return this._nombre;
    }

    get apellido(){
        return this._apellido;
    }

    get edad(){
        return this._edad;
    }

    set nombre(newNombre){
        this._nombre = newNombre;
    }

    set apellido(newApellido){
        this._apellido = newApellido;
    }

    set edad(newEdad){
        this._edad = newEdad;
    }
}

const estudiante = new persona("Sebastian", "Cruz", 33);

console.log(estudiante.nombre)

estudiante.nombre= "Sebas"

console.log(estudiante)


class trabajo extends persona{
    constructor(nombre, apellido, edad, sueldo, posicion){
        super(nombre, apellido, edad);
        this.sueldo = sueldo;
        this.posicion = posicion;
        this.estado = true;
    }

    getSueldo(){
        return this.sueldo;
    }

    getPosicion(){
        return this.posicion;
    }

    setSueldo(newSueldo){
        this.sueldo = newSueldo;
    }

    setPosicion(newPosicion){
        this.posicion = newPosicion;
    }

    getEstado(){
        return this.estado;
    }

    toggleEstado(){
        if (this.estado === true){
            this.estado = false;
        } else {
            this.estado = true;
        }
    }
}

const empleado1 = new trabajo("Sebastian", "Cruz", 33, 30000, "Desarrolador");

//console.log(empleado1)

console.log(empleado1.getEstado())

empleado1.toggleEstado()

console.log( empleado1.getEstado())