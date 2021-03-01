import React from 'react'
import styled from 'styled-components'

import img1 from '../../images/pic01.jpeg'

const Card = styled.div`
    width: 28%;
    border: 1px solid black;
    padding: 1rem;
    margin: 1rem;
`

// top half of card, holds image and name info
const TopBox = styled.div`
    padding-top: 3%;
    display:flex;
`

const SampleImg = styled.img`
    /* width: 30%; */
    height: 7rem;
    margin: 0 10%;
`
const TitleInfo = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
`
const ItemName = styled.h2`
    margin: 0;    
`
// marketplace location, should preset to seller's primary market
const MarketLoc = styled.p`
    margin: 0;
`

// hard coded "description"
const ItemDesc = styled.h4`
    padding-left: 2rem;
`
// item description paragraph.
const ItemPara = styled.p`
    text-align:justify;
    padding: 0 2rem;
`

// hard coded "price"
const Price = styled.p`
    padding: 0 2rem;
    text-align:right;
    font-weight: bold;
`
// seller needs to be able to update the number
const Number = styled.span`
    font-weight: normal;
`

const Buttons = styled.div`
    display:flex;
    justify-content:center;
`

const Edit = styled.button`
    margin: .25rem;
    padding: .5rem;
    border: none;
    background-color:white;
    font-weight:bold;
    cursor: pointer;

    &:hover {
        color: #c35b48;
        border-bottom: 1px solid #e5c027;
    }
`
const Delete = styled.button`
    margin: .25rem 2rem;
    padding: .5rem;
    border: none;
    background-color:white;
    font-weight:bold;
    cursor: pointer;

    &:hover {
        color: #c35b48;
        border-bottom: 1px solid #e5c027;
    }
`

const ItemsForSale = props => {
    return (
        <Card>
            <TopBox>
            <SampleImg src={img1} alt="to be replaced with items"/>
            
            <TitleInfo>

                <ItemName>item name</ItemName>
                <MarketLoc><em>Rwanda</em></MarketLoc>

            </TitleInfo>
            </TopBox>
            
            
            <ItemDesc>description:</ItemDesc>
            <ItemPara>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac dignissim leo. Fusce vestibulum nunc at neque luctus volutpat. Quisque venenatis iaculis convallis. Cras urna elit, dapibus in ultricies quis, sollicitudin non erat. Nunc scelerisque cursus orci, vel malesuada elit elementum eget. Proin sed leo vel nulla hendrerit euismod. Vestibulum faucibus augue quis convallis mattis.</ItemPara>
            
            <Price>price: <Number>$12.00/oz</Number></Price>
            
            <Buttons>
                <Edit>Edit this listing</Edit>
                <Delete>Delete this listing</Delete>
            </Buttons>
        </Card>
    )
}

export default ItemsForSale