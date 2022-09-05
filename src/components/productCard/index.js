import React, { Component } from 'react'

import {
    ProductCardContainer,
    CardImage,
    ProductText
} from './style'

import {
    bag
} from '../../assets'
class ProductCard extends Component {
    render () {
        return (
            <ProductCardContainer>
                <CardImage src={this.props.image} />
                <ProductText>
                    <p>{this.props.name}</p>
                    <h5>{this.props.amount}</h5>
                </ProductText>
                
            </ProductCardContainer>
        )
    }
}

export {ProductCard}