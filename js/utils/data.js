// creo una constante con la url base
const BASE_URL = 'http://localhost:3000/api'


// petición que recibe los productos generales /products
export const getAllProducts = async () =>{
    let response = await fetch(`${BASE_URL}/products`)
    let data = await response.json()
    console.log(data)
    return data
}

// petición que recibe un producto según su id /products id (query string)
export const getProductDetail = async (id) =>{
    let response = await fetch(`${BASE_URL}/products?id=${id}`)
    let data = await response.json()
    return data
}


// petición que recibe todos mis productos /myproducts
export const getMyProducts = async () =>{
    let response = await fetch(`${BASE_URL}/myproducts`)
    let data = await response.json()
    console.log(data)
    return data
}

// petición que envía un producto nuevo de acuerdo a los datos completados en el formulario /products
export const postNewProduct = async (product) => {

   let options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
            },
        body: JSON.stringify(product) 
   } 
   let response = await fetch(`${BASE_URL}/products`, options)
   let data = await response.json()
   console.log(data)
   return data

}