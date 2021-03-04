import React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'

const Page = styled.div``

const TableRow = styled.th`
    margin: 0;
    padding: 0;
    width: 100%;
    display:flex;
    justify-content:center;
    font-weight: normal;
`

const ItemCat = styled.td`
    border: 1px solid black;
    margin: 0;
    padding: 1rem;
    width: 30%;
`
const MarketplaceLocation = styled.td`
    border: 1px solid black;
    margin: 0;
    padding: 1rem;
    width: 20%;
`
const Costs = styled.td`
    border: 1px solid black;
    margin: 0;
    padding: 1rem;
    width: 13%;
`
const InStock = styled.td`
    border: 1px solid black;
    margin: 0;
    padding: 1rem;
    width: 10%;
`

const SearchedItems = props => {

    const {theme} = props

    const product = theme.products
    const categoryName = theme.categoryname
    // console.log(theme.categoryname)
    // const categoryName = product.categoryname
    
    

    // const products = (
    //     let newArray = []
    //     product.map(food => {
    //         return ([...food, food.categoryname = categoryName])
    //     })
    //     return newArray
    // )
// const {item} = props
    
    // ([...product, products.categoryname = theme.categoryname])
    // console.log(`prod`, products)


    const averageCost = (a,b) => {
        return Math.round(((a+b)/2)*100)/100;
    }

    return (
        <Page>

            {product.map(item => {
                return (

            <TableRow>
                <ItemCat>
                    {item.name} - <em>{categoryName}</em>
                </ItemCat>
                <MarketplaceLocation>
                    {item.location.country}
                </MarketplaceLocation>
                <Costs>
                    {averageCost(item.price,item.price)}/oz
                </Costs>
                <Costs>
                    {item.price}/oz
                </Costs>
                <Costs>
                    {item.price}/oz
                </Costs>
                <InStock>
                    {item.quantity}
                </InStock>
            </TableRow>
            )})}
            
        </Page>
    )
}

export default connect(null,{})(SearchedItems);