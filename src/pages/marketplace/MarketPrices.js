import React from 'react'
import styled from 'styled-components'

import SearchedItems from './SearchedItems'

const Card = styled.div`
    width: 100%;
    /* border: 1px solid black; */
    padding: 1rem;
    margin: 1rem;

    @media screen and (max-width: 800px) {
        width: 35%;
    }

    @media screen and (max-width: 500px) {
        width: 100%;
    }
`

const Table = styled.table`
    border-collapse: collapse;
    width: 100%;
`
const TableRow = styled.th`
    margin: 0;
    padding: 0;
    width: 100%;
    display:flex;
    justify-content:center;
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

const MarketPrices = props => {
    return (
        <Card>
            <Table>
                <TableRow>
                    <ItemCat>
                        item
                    </ItemCat>
                    <MarketplaceLocation>
                        marketplace
                    </MarketplaceLocation>
                    <Costs>
                        average cost
                    </Costs>
                    <Costs>
                        lowest cost
                    </Costs>
                    <Costs>
                        highest cost
                    </Costs>
                    <InStock>
                        stock available
                    </InStock>
                </TableRow>
                {/* will need to .map through */}
                <SearchedItems/>
                
            </Table>
            
        </Card>
    )
}

export default MarketPrices