//react
import React, { useEffect, useState } from 'react'
import { Route, NavLink, useHistory, useParams } from 'react-router-dom'
import axios from 'axios'

//redux
import { connect } from 'react-redux'

//component
import UpdateForm from './UpdateForm'

//style
import styled from 'styled-components'

const ItemsForSale = props => {
    const { item } = props;
    const { id } = useParams()
    const { push } = useHistory()

    // useEffect(()=>{
    //     axios.get(`http://localhost:3333/items/${id}`)
    //       .then(res=>{
    //         setItem(res.data);
    //       });
    //   }, []);

    const handleEdit = () => {
        props.history.push(`/product-edit/${id}`)
    }

    const handleDelete = () => {
        axios
            .delete(`https://african-marketplace-tt72.herokuapp.com/products/product/${id}`)
            .then(res => {
                props.setItems(res.data);
                push('/profile')
            })
            .catch(err => console.log("Error while trying to delete an item", err))
    }

    return (
        <Card>
            <TopBox>
                <SampleImg src={item.imageUrl} alt={item.name} />
                <TitleInfo>
                    <ItemName>{item.name}</ItemName>
                    <MarketLoc><em>{item.location.country}</em></MarketLoc>
                </TitleInfo>
            </TopBox>

            <ItemPara>{item.description}</ItemPara>
            <Price>price: <Number>{item.price}/oz</Number></Price>
            <Price>quantity: <Number>{item.quantity}</Number></Price>

            <Route exact path="/product-edit/:id" render={props => <UpdateForm {...props} item={item} />} />
            <Buttons>
                <NavLink to={`/product-edit/${item.productid}`}>
                <Edit onClick={handleEdit}>Edit this listing</Edit>
                </NavLink>
                <Delete onClick={handleDelete}>Delete this listing</Delete>
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