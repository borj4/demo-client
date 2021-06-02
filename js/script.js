import { getAllProducts }  from './utils/data.js'
import { paintCard } from './utils/paintData.js'

// Con init invocamos la función que pide los productos a la API y luego los pintamos
const init = async () =>{
    const allProducts = await getAllProducts()
    allProducts.forEach((product) => paintCard(product, false))
}

// Inicializar script
init()