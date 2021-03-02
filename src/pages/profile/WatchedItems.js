import React from 'react'
import { connect } from 'react-redux'

import styled from 'styled-components'

import img1 from '../../images/pic01.jpeg'

const Card = styled.div`
    width: 28%;
    border: 1px solid black;
    padding: 1rem;
    margin: 1rem;

    @media screen and (max-width: 800px) {
        width: 35%;
    }

    @media screen and (max-width: 500px) {
        width: 100%;
    }
`

// top half of card with image, title, and marketplace location
const TopBox = styled.div`
    padding-top: 3%;
    display:flex;
`
// user needs to be able to change this
const SampleImg = styled.img`
    /* width: 30%; */
    height: 7rem;
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
    margin: 0;

    @media screen and (max-width: 800px) {
        font-size: 1.25rem;
        
    }

    @media screen and (max-width: 500px) {
        font-size: 1.5rem;
    }
`
// specific marketplace this is sold in; should preset to seller's primary market
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
// paragraph for item description
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
// user needs to be able to update number and amount for sale
const Number = styled.span`
    font-weight: normal;
`

const Button = styled.div`
    display:flex;
    justify-content:center;
`
const StopWatching = styled.button`
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

const WatchedItems = props => {
    return (
        <Card>
            <TopBox>
                <SampleImg src={img1} alt="to be replaced with items" />

                <TitleInfo>

                    <ItemName>{props.item.name}</ItemName>
                    <MarketLoc><em>Rwanda</em></MarketLoc>

                </TitleInfo>
            </TopBox>


            <ItemDesc>description:</ItemDesc>
            <ItemPara>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac dignissim leo. Fusce vestibulum nunc at neque luctus volutpat. Quisque venenatis iaculis convallis. Cras urna elit, dapibus in ultricies quis, sollicitudin non erat. Nunc scelerisque cursus orci, vel malesuada elit elementum eget. Proin sed leo vel nulla hendrerit euismod. Vestibulum faucibus augue quis convallis mattis.</ItemPara>

            <Price>price: <Number>$12.00/oz</Number></Price>

            <Button>
                <StopWatching>Stop watching this listing</StopWatching>
            </Button>

        </Card>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps, {})(WatchedItems)