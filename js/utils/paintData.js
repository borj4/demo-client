import { getProductDetail } from './data.js'

export const paintCard = ({id, title, price, description, category, image}, detail) => {

    const cardsContainer = document.getElementById('cards-container')
    // Creo dinámicamente todos los nodos necesarios para pintar mis tarjetas de productos
    const card = document.createElement('div')
    detail && card.setAttribute('class', 'detail-card') 
    const productTitle = document.createElement('h2')
    productTitle.innerText = `${detail ? title : title.slice(0, 20) + '...'}`
    const productPrice = document.createElement('p')
    productPrice.innerText = `€ ${price}`
    const productDescription = document.createElement('p')
    productDescription.innerText = `${detail ? description : description.slice(0, 50) + '...'}`
    const productCategory = document.createElement('p')
    productCategory.innerText = category
    const productImage = document.createElement('img')
    productImage.setAttribute('src', image)
    detail && productImage.setAttribute('class', 'detail-img') 

    // añado al div contenedor de cada tarjeta todos los nodos correspondientes a la información y la imagen
    card.appendChild(productTitle)
    card.appendChild(productCategory)
    card.appendChild(productImage)
    card.appendChild(productPrice)
    card.appendChild(productDescription)

    // añado un EventListener a la tarjeta para que me redirija a la vista detalle
    card.addEventListener('click', async () => {
        // Borrar todos los nodos dentro de cards-container
        clearCards()
        // Hacer una petición al servidor para obtener el detalle de un producto determinado
        //...
        const detail = await getProductDetail(id)
        // Pintar el detalle del producto clickeado
        detail.forEach((product)=> paintCard(product, true))
    })
    
    // añado la tarjeta completa al contenedor de mi DOM
    cardsContainer.appendChild(card)
}

export const clearCards = () =>{
    const cardsContainer = document.getElementById('cards-container')
    cardsContainer.innerHTML = ''
}