//react
import React, { useEffect } from 'react'

//redux
import { connect } from 'react-redux'

//style
import styled from 'styled-components'

const ItemsForSale = props => {
    const { item } = props;
    console.log(`item`, item)

    return (
        <Card>
            <ItemName>{item.name}</ItemName>

            <SampleImg src={item.imageUrl} alt="to be replaced with items" />

            <ItemPara>{item.description}</ItemPara>

            <Price>price: <Number>{props.item.price}/oz</Number></Price>

            {/* <TopBox>
                <SampleImg src={item.imageUrl} alt={item.name} />
                <TitleInfo>
                    <ItemName>{item.name}</ItemName>
                    <MarketLoc><em>{item.location.country}</em></MarketLoc>
                </TitleInfo>
            </TopBox>

            <ItemPara>{item.description}</ItemPara>
            <Price>price: <Number>{item.price}/oz</Number></Price>
            <Price>quantity: <Number>{item.quantity}</Number></Price> */}

            <Buttons>
                <Edit>Edit this listing</Edit>
                <Delete>Delete this listing</Delete>
            </Buttons>

        </Card>
    )
}

export default connect(null, {})(ItemsForSale);


// ================================= styling =================================


const Card = styled.div`
    width: 28%;
    border: 1px solid black;
    padding: 1rem;
    margin: 1rem;
    border-radius: .5em;
    background-color:#e8e2d6;

    @media screen and (max-width: 800px) {
        width: 35%;
    }

    @media screen and (max-width: 500px) {
        width: 100%;
    }
`

// top half of card, holds image and name info
const TopBox = styled.div`
    padding-top: 3%;
    display:flex;
`

const SampleImg = styled.img`
    /* width: 30%; */
    width: 80%;
    margin: 0 10%;

    @media screen and (max-width: 800px) {
        height: 5rem;
    }

    @media screen and (max-width: 500px) {
        height: 7rem;
    }
`
const TitleInfo = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
`
const ItemName = styled.h2`
    text-align:center;
    color:#ffffff;
    background-color:#4a3730;
    width:150px;

    @media screen and (max-width: 800px) {
        font-size: 1.25rem;
        
    }

    @media screen and (max-width: 500px) {
        font-size: 1.5rem;
    }
`
// marketplace location, should preset to seller's primary market
const MarketLoc = styled.p`
    margin: 0;

    @media screen and (max-width: 800px) {
        font-size: .9rem;
    }

    @media screen and (max-width: 500px) {
        font-size: 1rem;
    }
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
    font-size:11px;
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
    background-color: #2d2d2d;
    border: none;
    color: white;
    font-weight:bold;
    padding: 6px 18px;
    margin: 0 3%;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 15px;
    cursor: pointer;

    &:hover {
        color: #c35b48;
        border-bottom: 1px solid #e5c027;
    }
`
const Delete = styled.button`
    background-color: #2d2d2d;
    border: none;
    color: white;
    font-weight:bold;
    padding: 6px 18px;
    margin: 0 3%;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 15px;
    cursor: pointer;

    &:hover {
        color: #c35b48;
        border-bottom: 1px solid #e5c027;
    }
`