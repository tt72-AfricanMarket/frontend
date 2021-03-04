import React from 'react'
import { connect } from 'react-redux'

import { addToCart } from '../../store/actions'

import styled from 'styled-components'

import img1 from '../../images/pic01.jpeg'

const Card = styled.div`
    width: 28%;
    border: 1px solid black;
    padding: 1rem;
    margin: 1rem;
    border-radius: .5em;
    background-color:#e8e2d6;
`
const ItemName = styled.h2`
    text-align:center;
    color:#ffffff;
    background-color:#4a3730;
    width:150px;

`

// image needs to be able to be replaced with information
const SampleImg = styled.img`
    width: 80%;
    margin: 0 10%;
`

// hard coded "description"
// const ItemDesc = styled.h4`
//     padding-left: 2rem;
// `

// item description paragraph.
const ItemPara = styled.p`
    text-align:justify;
    padding: 0 2rem;
`

// hard coded "price"
const Price = styled.p`
    font-size:11px;
`
// seller needs to be able to update the number
const Number = styled.span``

// amount is a number input with arrow buttons, user needs to be able to choose max amount for sale.
const OrderAmount = styled.input`
    width: 50px;
    height: 24px;
    margin-right:5px;
`
const OrderButton = styled.button`
    background-color: #2d2d2d;
    border: none;
    color: white;
    font-weight:bold;
    padding: 6px 18px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 15px;
    cursor: pointer;
`

const MarketplaceCard = props => {
    return (
        <Card>
            <ItemName>{props.item.name}</ItemName>

            <SampleImg src={props.item.imageUrl} alt="to be replaced with items" />

            <ItemPara>{props.item.description}</ItemPara>

            <Price>price: <Number>{props.item.price}/oz</Number></Price>

            <OrderAmount
                type='number'
                name='order_amount'
                min='1'
                placeholder={`qty. ${props.item.quantity}`}
            />
            <OrderButton onClick={props.addToCart}>Add To Cart</OrderButton>
        </Card>
    )
}

export default connect(null, { addToCart })(MarketplaceCard)
