import React from 'react'
import styled from 'styled-components'

import img1 from '../../images/pic01.jpeg'

const Card = styled.div`
    width: 28%;
    border: 1px solid black;
    padding: 1rem;
    margin: 1rem;
`

// top half of card with image, title, and marketplace location
const TopBox = styled.div`
    display:flex;
`
// user needs to be able to change this
const SampleImg = styled.img`
    width: 30%;
    margin: 0 10%;
`

const TitleInfo = styled.div``
const ItemName = styled.h2`
`
// specific marketplace this is sold in; should preset to seller's primary market
const MarketLoc = styled.p``

// hard coded "description"
const ItemDesc = styled.h4`
    padding-left: 2rem;
`
// paragraph for item description
const ItemPara = styled.p`
    text-align:justify;
    padding: 0 2rem;
`

// hard coded "price"
const Price = styled.p``
// user needs to be able to update number and amount for sale
const Number = styled.span``

const StopWatching = styled.button``

const WatchedItems = props => {
    return (
        <Card>
            <TopBox>
            <SampleImg src={img1} alt="to be replaced with items"/>
            
            <TitleInfo>

                <ItemName>item name</ItemName>
                <MarketLoc>Rwanda</MarketLoc>

            </TitleInfo>
            </TopBox>
            
            
            <ItemDesc>description:</ItemDesc>
            <ItemPara>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac dignissim leo. Fusce vestibulum nunc at neque luctus volutpat. Quisque venenatis iaculis convallis. Cras urna elit, dapibus in ultricies quis, sollicitudin non erat. Nunc scelerisque cursus orci, vel malesuada elit elementum eget. Proin sed leo vel nulla hendrerit euismod. Vestibulum faucibus augue quis convallis mattis.</ItemPara>
            
            <Price>price: <Number>$12.00/oz</Number></Price>
            
            <StopWatching>Stop watching this listing</StopWatching>
            
        </Card>
    )
}

export default WatchedItems