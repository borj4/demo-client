const BASE_URL = 'http://localhost:3000/api'

export const getAllProducts = async() =>{
    const response = await fetch(`${BASE_URL}/products`)
    const results = await response.json()
    console.log(results)
    return results
}

export const getProductDetail = async(id) =>{
    const response = await fetch(`${BASE_URL}/products?id=${id}`)
    const result = await response.json()
    console.log(result)
    return result
}

export const getMyProducts = async() =>{
    const response = await fetch(`${BASE_URL}/myproducts`)
    const result = await response.json()
    return result
}

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