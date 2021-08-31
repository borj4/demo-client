// creo una constante con la url base
const BASE_URL = 'http://localhost:3000/api'


// petición que recibe los productos generales /products
export const getAllProducts =  () =>{

}

// petición que recibe un producto según su id /products id (query string)
export const getProductDetail =  (id) =>{
  
}


// petición que recibe todos mis productos /myproducts
export const getMyProducts =  () =>{

}

// petición que envía un producto nuevo de acuerdo a los datos completados en el formulario /products
export const postNewProduct =  (product) => {

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