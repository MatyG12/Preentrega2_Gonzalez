const Producto = function(modelo,precio,stock){
    this.modelo=modelo;
    this.precio=precio;
    this.stock=stock;
}

let producto1 = new Producto("artillery genius pro", 253000, 12)
let producto2 = new Producto("creality ender 3", 152000, 8)
let producto3 = new Producto("creality ender 3 v2 neo", 199000, 5)
let producto4 = new Producto("artillery hornet", 134000, 10)
let producto5 = new Producto("creality cr-10 smart", 365000, 2)



let lista = [producto1,producto2,producto3,producto4,producto5]

function filtrarImpresora(){
    let impresora = prompt("Ingrese la impresora que desea buscar").trim() .toUpperCase()
    let resultado = lista.filter ((x)=> x.modelo.toUpperCase() .includes (impresora))

    if (resultado.length > 0){
        console.table(resultado)
    }else{
        alert("no se encontro ninguna coincidencia con:"+impresora)
    }
}


function agregarImpresora(){
    let modelo = prompt("Ingresa la nueva impresora")
    let precio = parseInt(prompt("Ingresa el precio"))
    let stock = parseInt(prompt("Ingresa el stock"))

    if(modelo === "" || isNaN(precio) || isNaN(stock)){
        alert("Completar correctamente los datos")
        return
    }

    let producto = new Producto(modelo,precio,stock)
    lista.push(producto)    
    console.table(lista)
}


function ordenarPrecio(){
    lista.sort((a,b)=> a.precio - b.precio)
    return console.table(lista)
}

function ordenarStock(){
    lista.sort((a,b)=> a.stock - b.stock)
    return console.table(lista)
}




