import { getAllProducts } from './utils/data.js'
import { paintCard, clearCards } from './utils/paintData.js'

const init = () =>{
    // pedir productos
    getAllProducts()
        .then(res =>{
                res.forEach(element => {
                    paintCard(element, false)
                });
        })
}

init()