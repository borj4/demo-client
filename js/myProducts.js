import { postNewProduct, getMyProducts }  from './utils/data.js'
import { paintCard } from './utils/paintData.js'



// Añadir EventListener al botón del form y enviar la petición de tipo POST

document.getElementById("new-product-btn").addEventListener("click", async (e)=>{
    e.preventDefault()
    const form = document.getElementById("form").elements
    const data = {}
    for(let input of form){
        data[input.name] = input.value
    }
    console.log("data recogida del formulario", data)
     const postResponse = await postNewProduct(data)
     const allProducts = postResponse.success ? await getMyProducts() : []
     // !!!!! LLEGUÉ HASTA ACÁ PERO HAY UN ERROR EN UN GET
     console.log("lo que llega del fetch", allProducts)
     allProducts.data.forEach((product) => paintCard(product, false))
})

/// Con init invocamos la función que pide todos mis productos a la API y luego los renderizamos en el DOM
const init = async () =>{
    const allProducts = await getMyProducts()
    console.log("lo que llega del fetch", allProducts)
    allProducts.data.forEach((product) => paintCard(product, false))
}

// Inicializar script
init()