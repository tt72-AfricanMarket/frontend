import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { fetchData } from "../../store/actions"

import img1 from '../../images/pic01.jpeg'

const Card = styled.div`
    width: 28%;
    border: 1px solid black;
    padding: 1rem;
    margin: 1rem;
    border-radius: .5em;

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

    // const {categories, isFetching, error} = props

    // useEffect(() => {
    //     props.fetchData();
    // },[])

    // const foods = []
    // categories.map(cat => {
    //     let category = cat.products
    //     category.map(cat => {
    //         // console.log(cat)
    //         foods.push(cat)
    //     })
    // })
    // console.log(`foods`,foods)

    const {item} = props

    console.log(`prlops`, item)
    
    return (
        <Card>
            
            
            <TopBox>
            <SampleImg src={props.item.imageUrl} alt="{props.item.name}"/>
            
            <TitleInfo>

                <ItemName>{props.item.name}</ItemName>
                <MarketLoc><em>{props.item.location.country}</em></MarketLoc>

            </TitleInfo>
            </TopBox>
            
            
            
            <ItemPara>{props.item.description}</ItemPara>
            
            <Price>price: <Number>{props.item.price}/oz</Number></Price>
            <Price>quantity: <Number>{props.item.quantity}</Number></Price>
            
            <Buttons>
                <Edit>Edit this listing</Edit>
                <Delete>Delete this listing</Delete>
            </Buttons>
        </Card>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         categories: state.fetchReducer.categories,
//         isFetching: state.fetchReducer.isFetching,
//         error: state.fetchReducer.error
//     }
// }

export default connect(null, {})(ItemsForSale);

// export default ItemsForSale