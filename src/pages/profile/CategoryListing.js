import React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'
import CategoryListingArray from './CategoryListingArray'


const Page = styled.div`
    width: 20%;
    margin: 1%;
    border: 1px solid black;
`

const CategoryName = styled.h3`
    text-align:center;
`

const ProductName = styled.p``
const ProductPrice = styled.p``

const CategoryListing = props => {

    const {cat} = props
    // console.log(`cat`, cat)

    const productArray = cat.products
    // console.log(productArray)

    return (
        <Page>
            <CategoryName>{cat.categoryname}</CategoryName>
            {productArray.map(listing => (
                <CategoryListingArray key={listing.productid} product={listing}/>
            ))}
        </Page>
    )
}

export default connect(null,{})(CategoryListing);