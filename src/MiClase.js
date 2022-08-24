class Vehiculo {
    constructor(marca, modelo, matriculacion, color) {
        //Propiedades de clase
        this.marca = marca;
        this.modelo = modelo;
        this.matriculacion = matriculacion;
        this.color = color;

        //Métodos de clase
        this.acelera = function() {
            return 'El vehículo ' + this.marca + '' + this.modelo + ' acelera.'
        }
    }
}

let vehiculo = new Vehiculo('Daewoo', ' Lanos', '25/02/2022', 'verde')
console.log(vehiculo.acelera())