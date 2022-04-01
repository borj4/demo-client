import { postNewProduct, getMyProducts }  from './utils/data.js'
import { paintCard, clearCards } from './utils/paintData.js'



// Añadir EventListener al botón del form y enviar la petición de tipo POST

document.getElementById("new-product-btn").addEventListener("click", async (e)=>{
    e.preventDefault()
    const form = document.getElementById("form").elements
    const data = {}
    for(let input of form){
        data[input.name] = input.value
    }
    console.log("data recogida del formulario", data)
     const response = await postNewProduct(data);

     // a continuación hay que invocar nuevamente la función que pide los productos y la que los pinta
     
     // TODO: Solucionar problema de asincronía. 
     // El servidor tarda más tiempo
     // en insertar el documento en mi fake DB, que lo que tarda en enviar la respuesta. 
})

// Con init invocamos la función que borra las tarjetas y la que pide todos mis productos a la API 
// luego iteramos el array recibido y pintamos cada elemento con la función paintCard()
const init = async () =>{
    // ...
    clearCards()
    const allProducts = await getMyProducts()
    console.log("lo que llega del fetch", allProducts)
    allProducts.data.forEach((product) => paintCard(product, false))
}

// Inicializar script invocando init
init()