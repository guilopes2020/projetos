let cart = []
let modalqt = 1
let modalkey = 0
pizzaJson.map((item, index) => {
    let pizzaItem = document.querySelector('div.pizza-item').cloneNode(true)
    
    pizzaItem.setAttribute('data-key', index)
    pizzaItem.querySelector('div.pizza-item-img img').src = item.img
    pizzaItem.querySelector('div.pizza-item-price').innerHTML = `R$ ${item.price.toFixed(2)}`
    pizzaItem.querySelector('div.pizza-item-name').innerHTML = item.name
    pizzaItem.querySelector('div.pizza-item-desc').innerHTML = item.description
    pizzaItem.querySelector('a').addEventListener('click', (e) => {
        e.preventDefault()
        let key = e.target.closest('div.pizza-item').getAttribute('data-key')
        modalqt = 1
        modalkey = key

        document.querySelector('div.pizzaBig img').src = pizzaJson[key].img
        document.querySelector('div.pizzaInfo h1').innerHTML = pizzaJson[key].name
        document.querySelector('div.pizzaInfo-desc').innerHTML = pizzaJson[key].description
        document.querySelector('div.pizzaInfo-actualPrice').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2)}`
        document.querySelector('div.pizzaInfo-size.selected').classList.remove('selected')
        document.querySelectorAll('.pizzaInfo-size').forEach((size, sizeIndex) => {
            if (sizeIndex == 2) {
                size.classList.add('selected')
            }
            size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex]
        })
        document.querySelector('div.pizzaInfo-qt').innerHTML = modalqt

        const pizzaWinArea = document.querySelector('div.pizzaWindowArea')
        pizzaWinArea.style.opacity = 0
        pizzaWinArea.style.display = 'flex'
        setTimeout(() => {
            pizzaWinArea.style.opacity = 1
        }, 150)
        
    })
    document.querySelector('div.pizza-area').append(pizzaItem)
})

//eventos do modal
function closeModal() {
    const fecharModal = document.querySelector('div.pizzaWindowArea')
    fecharModal.style.opacity = 0
    setTimeout(() => {
        fecharModal.style.display = 'none'
    }, 500);
}
document.querySelectorAll('div.pizzaInfo-cancelButton, div.pizzaInfo-cancelMobileButton').forEach((item) => {
     item.addEventListener('click', closeModal)         
})

document.querySelector('button.pizzaInfo-qtmenos').addEventListener('click', () => {
    if (modalqt > 1) {
        modalqt--
        document.querySelector('div.pizzaInfo-qt').innerHTML = modalqt 
    }
})

document.querySelector('button.pizzaInfo-qtmais').addEventListener('click', () => {
    modalqt++
    document.querySelector('div.pizzaInfo-qt').innerHTML = modalqt
})

document.querySelectorAll('div.pizzaInfo-size').forEach((size, sizeIndex) => {
    size.addEventListener('click', (e) => {
        document.querySelector('div.pizzaInfo-size.selected').classList.remove('selected')
        size.classList.add('selected')
    })
})

document.querySelector('div.pizzaInfo-addButton').addEventListener('click', () => {
    let size = parseInt(document.querySelector('div.pizzaInfo-size.selected').getAttribute('data-key'))
    let identificador = pizzaJson[modalkey].id+'@'+size
    let chave = cart.findIndex((item) => item.identificador == identificador)

    if (chave > -1) {
        cart[chave].qt += modalqt
    } else {
        cart.push({
            identificador,
            id: pizzaJson[modalkey].id,
            size,
            qt: modalqt
        })
    }
    
    updateCart()
    closeModal()
    
})

document.querySelector('div.menu-openner').addEventListener('click', () => {
    if (cart.length > 0) {
        document.querySelector('aside').style.left = '0'
    }
})
document.querySelector('div.menu-closer').addEventListener('click', () => {
    document.querySelector('aside').style.left = '100vw'
})

function updateCart() {
    document.querySelector('div.menu-openner span').innerHTML = cart.length
    if (cart.length > 0) {
        document.querySelector('aside').classList.add('show')
        document.querySelector('div.cart').innerHTML = ''
        let subtotal = 0
        let desconto = 0
        let total = 0
        for(let i in cart) {
            let itempizza = pizzaJson.find((item) => item.id == cart[i].id)
            subtotal += itempizza.price * cart[i].qt
            let cartitem = document.querySelector('div.models div.cart-item').cloneNode(true)

            let pizzaSizeName = ''
            switch (cart[i].size) {
                case 0:
                    pizzaSizeName = 'P'
                    break;
                case 1:
                    pizzaSizeName = 'M'
                    break
                case 2:
                    pizzaSizeName = 'G'
                    break;
            }
            let pizzaName = `${itempizza.name} (${pizzaSizeName})`
            cartitem.querySelector('img').src = itempizza.img
            cartitem.querySelector('div.cart-item-nome').innerHTML = pizzaName
            cartitem.querySelector('div.cart-item-qt').innerHTML = cart[i].qt
            cartitem.querySelector('button.cart-item-qtmenos').addEventListener('click', () => {
                if (cart[i].qt > 1) {
                    cart[i].qt--
                } else {
                    cart.splice(i, 1)
                }
                updateCart()
            })
            cartitem.querySelector('button.cart-item-qtmais').addEventListener('click', () => {
                cart[i].qt++
                updateCart()
            })

            document.querySelector('div.cart').append(cartitem)
        }

        desconto = subtotal * 0.1
        total = subtotal - desconto

        document.querySelector('div.subtotal span:last-child').innerHTML = `R$ ${subtotal.toFixed(2)}`
        document.querySelector('div.desconto span:last-child').innerHTML = `R$ ${desconto.toFixed(2)}`
        document.querySelector('div.total span:last-child').innerHTML = `R$ ${total.toFixed(2)}`
    } else{
        document.querySelector('aside').classList.remove('show')
        document.querySelector('aside').style.left = '100vw'
    }
}
