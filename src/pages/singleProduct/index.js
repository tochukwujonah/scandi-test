import React, { Component } from 'react'

import {
  Container,
  ProductImages,
  LargeImage,
  TheThree,
  ProductVariants

} from './style'

import { 
  sleeveless,

} from '../../assets'

export class SingleProduct extends Component {
  render() {
    return (
      <Container>
        <ProductImages>

          <TheThree>
            <img src={sleeveless} alt="" />
            <img src={sleeveless} alt="" />
            <img src={sleeveless} alt="" />
          </TheThree>

          <LargeImage src={sleeveless} alt={'product'} />
        </ProductImages>

        <ProductVariants>

          <h4>Product name</h4>

        </ProductVariants>
        
      </Container>
    )
  }
}

export default SingleProduct