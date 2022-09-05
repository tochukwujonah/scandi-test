import React, { Component } from 'react'
import {
    Container
} from './style'
import { ProductCard } from '../../components/productCard'

import { ProductList } from '../../data/products.data'

class ProductListing extends Component {
    render () {
        return (
            <Container>
                <h2>Top Selling</h2>
                <div>
                {
                    ProductList.map((products) =>{
                            // console.log(products)
                        return(
                            <ProductCard key={products.id} 
                                name={products.name}
                                image={products.image}
                                amount={products.price} 
                            />
                        )

                    } )
                }
                
                </div>
            </Container>
        )
    }
}

export {ProductListing}