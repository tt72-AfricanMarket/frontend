import React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'

const Page = styled.div`
    display: flex;
    justify-content: space-around;
    /* width: 20%; */
`

const ProductName = styled.p``
const ProductPrice = styled.p``

const CategoryListingArray = props => {

    const {product} = props

    return (
        <Page>
            <ProductName>{product.name}</ProductName>
            <ProductPrice>{product.price}/oz</ProductPrice>
        </Page>
    )
}

export default connect(null,{})(CategoryListingArray);