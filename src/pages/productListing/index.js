import React, { Component } from 'react'
import {
    Container
} from './style'
import { ProductCard } from '../../components/productCard'

class ProductListing extends Component {
    render () {
        return (
            <Container>
                <h2>Top Selling</h2>

                <ProductCard />
            </Container>
        )
    }
}

export {ProductListing}