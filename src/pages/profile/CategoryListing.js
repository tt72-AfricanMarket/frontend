import React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'
import CategoryListingArray from './CategoryListingArray'


const Page = styled.div`
    width: 20%;
    margin: 1%;
    border: 1px solid black;
    border-radius: 20px;
    background-color:#E8E2D6;
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
    
    const total = productArray.reduce((total,item) => {
        return total += item.price;
    },0)

    const averageCost = Math.round(((total/productArray.length)*100))/100

    return (
        <Page>
            <CategoryName>{cat.categoryname}<em> (average cost: {averageCost})</em></CategoryName>
            {productArray.map(listing => (
                <CategoryListingArray key={listing.productid} product={listing}/>
            ))}
        </Page>
    )
}

export default connect(null,{})(CategoryListing);