const BASE_URL = 'http://localhost:3000/api'


// petición que recibe los productos generales /products
export const getAllProducts = async() =>{
    const response = await fetch(`${BASE_URL}/products`)
    const results = await response.json()
    console.log(results)
    return results
}
// petición que recibe un producto según su id /products id (query string)
export const getProductDetail = async(id) =>{
    const response = await fetch(`${BASE_URL}/products?id=${id}`)
    const result = await response.json()
    console.log(result)
    return result
}
// petición que recibe todos mis productos /myproducts
export const getMyProducts = async() =>{
    const response = await fetch(`${BASE_URL}/myproducts`)
    const result = await response.json()
    return result
}
// petición que envía un producto nuevo de acuerdo a los datos completados en el formulario /products
export const postNewProduct = async(product) => {
    try {
        const options = {
            method: 'POST',
            headers:{
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        }
        const response = await fetch(`${BASE_URL}/products`, options)
        const result = await response.json()
            return result
        
    } catch (error) {
        alert(error)
    }
    console.log(result)
}