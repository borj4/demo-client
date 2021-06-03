// importar postNewProduct y getMyProducts de utils/data
// importar paintCard y clearCards de utils/paintData

// Añadir EventListener al botón del form y enviar la petición de tipo POST

document.getElementById("new-product-btn").addEventListener("click", async (e)=>{
    e.preventDefault()
    // recojo los elementos del formulario y construyo un objeto para enviar en el cuerpo de la petición
    const form = document.getElementById("form").elements
    const data = {}
    for(let input of form){
        data[input.name] = input.value
    }
    console.log("data recogida del formulario", data)
    // con postNewProduct(data) envío los datos de mi formulario
    // ...

     // a continuación hay que invocar nuevamente la función que pide los productos y la que los pinta
     
     // !!!!!! TODO: Solucionar problema de asincronía. 
     // El servidor tarda más tiempo
     // en insertar el documento en mi fake DB, que lo que tarda en enviar la respuesta. 
})

// Con init invocamos la función que borra las tarjetas y la que pide todos mis productos a la API 
// luego iteramos el array recibido y pintamos cada elemento con la función paintCard()
// Con init invocamos la función que borra las tarjetas y la que pide los productos a la API 
// luego iteramos el array recibido y pintamos cada elemento con la función paintCard()
const init = async () =>{
    //...
    // borrar tarjetas

    // pedir mis productos
    // ...

    // pintar cada uno de los elementos que recibo en el array (paint card necesita como)
    //paintCard(product, false))
}

// Inicializar script invocando init
init()