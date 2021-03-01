import React from 'react'
import styled from 'styled-components'

import img1 from '../../images/pic01.jpeg'

const Card = styled.div`
    width: 28%;
    border: 1px solid black;
    padding: 1rem;
    margin: 1rem;
`

const ItemName = styled.h2`
    text-align:center;
`

const SampleImg = styled.img`
    width: 80%;
    margin: 0 10%;
`

const ItemDesc = styled.h4`
    padding-left: 2rem;
`

const ItemPara = styled.p`
    text-align:justify;
    padding: 0 2rem;
`

const Price = styled.p``
const Number = styled.span``

const OrderAmount = styled.input``
const OrderButton = styled.button``

const MarketplaceCard = props => {
    return (
        <Card>
            <ItemName>item name</ItemName>
            
            <SampleImg src={img1} alt="to be replaced with items"/>
            
            <ItemDesc>description:</ItemDesc>
            <ItemPara>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac dignissim leo. Fusce vestibulum nunc at neque luctus volutpat. Quisque venenatis iaculis convallis. Cras urna elit, dapibus in ultricies quis, sollicitudin non erat. Nunc scelerisque cursus orci, vel malesuada elit elementum eget. Proin sed leo vel nulla hendrerit euismod. Vestibulum faucibus augue quis convallis mattis.</ItemPara>
            
            <Price>price: <Number>$12.00/oz</Number></Price>
            
            <OrderAmount
                type='number'
                name='order_amount'
                min='1'
                placeholder='choose an amount'
            />
            <OrderButton>Order</OrderButton>
        </Card>
    )
}

export default MarketplaceCard