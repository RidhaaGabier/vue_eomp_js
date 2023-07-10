// <Card v-for="product in products" :key="product.id" :product="product"/>

let products = [
    {
        id: 1,
        productName: 'Nike Shoe',
        productPrice: 1000.99,
    },
    // let product(outside the card) = {
    //     id: 1,
    //     productName: 'Nike Shoe',
    //     productPrice: 1000.99
    // },

    // let product(inside the Card) = product(outside the card)

    // INSIDE CARD COMPONENT
    // <div>
    //    {{ product(inside the card).productName }}
    // </div>

    //    |
    //    V
    
    // <div>
    //    Nike Shoe
    // </div>
    {
        id: 2,
        productName: 'Adidas Shoe',
        productPrice: 1000.99
    },
    {
        id: 3,
        productName: 'Laptop',
        productPrice: 20000.99
    },

]

