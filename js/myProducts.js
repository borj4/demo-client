import { postNewProduct, getMyProducts } from './utils/data.js'
import { paintCard, clearCards } from './utils/paintData.js'

document.getElementById("new-product-btn").addEventListener("click", async (e)=>{
    e.preventDefault()
    const form = document.getElementById("form").elements
    const data = {}
    for(let input of form){
        data[input.name] = input.value
    }
    const response = await postNewProduct(data)
    paintCard(response.data, false)
})

const init = async () =>{
    const products = await getMyProducts()
    console.log(products)
    products.data.forEach(element => {
        paintCard(element, false)
    });
}
init()