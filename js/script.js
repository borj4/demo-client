import { getAllProducts, clearCards }  from './utils/data.js'
import { paintCard } from './utils/paintData.js'

// Con init invocamos la función que borra las tarjetas y la que pide los productos a la API 
// luego iteramos el array recibido y pintamos cada elemento con la función paintCard()
const init = async () =>{
    //...
    await clearCards()
    const allProducts = await getAllProducts()
    allProducts.forEach((product) => paintCard(product, false))
}

// Inicializar script invocando init
init()