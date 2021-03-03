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

    const {item} = props
    console.log(`props`, item)

    const averageCost = (a,b) => {
        return Math.round(((a+b)/2)*100)/100;
    }

    return (
        <Page>
            <TableRow>
                    <ItemCat>
                        {item.name} - <em>[cat name]</em>
                    </ItemCat>
                    <MarketplaceLocation>
                        {item.location.country}
                    </MarketplaceLocation>
                    <Costs>
                        ${averageCost(item.price,item.price)}/oz
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
            {/* <TableRow>
                    <ItemCat>
                        Flank steak - <em>meat</em>
                    </ItemCat>
                    <MarketplaceLocation>
                        Uganda
                    </MarketplaceLocation>
                    <Costs>
                        ${averageCost(0.7, 1.57)}/oz
                    </Costs>
                    <Costs>
                        $0.7/oz
                    </Costs>
                    <Costs>
                        $1.57/oz
                    </Costs>
                    <InStock>
                        58
                    </InStock>
                </TableRow>
            <TableRow>
                    <ItemCat>
                        Carrots - <em>vegetables</em>
                    </ItemCat>
                    <MarketplaceLocation>
                        Uganda
                    </MarketplaceLocation>
                    <Costs>
                        ${averageCost(0.03, 0.09)}/oz
                    </Costs>
                    <Costs>
                        $0.03/oz
                    </Costs>
                    <Costs>
                        $0.09/oz
                    </Costs>
                    <InStock>
                        1,587
                    </InStock>
                </TableRow> */}
        </Page>
    )
}

export default connect(null,{})(SearchedItems);