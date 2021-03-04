//react
import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom'

//redux
import { connect } from 'react-redux'
import { fetchData } from "../../store/actions"

//components
import ItemsForSale from './ItemsForSale'
import CategoryListing from './CategoryListing'
import MarketPrices from '../marketplace/MarketPrices'

//validation
import * as yup from 'yup'

//style
import styled from 'styled-components'
import roboto from 'fontsource-roboto'

import axiosWithAuth from '../../utils/axiosWithAuth';


const ProfilePage = props => {

    const { categories, products } = props

    const [user, setUser] = useState([]);
    const [userProducts, setUserProducts] = useState([]);

    useEffect(() => {
        props.fetchData();
    }, [])

    useEffect(() => {
		axiosWithAuth()
			.get("/users/getuserinfo")
			.then((res) => {
				console.log(res.data);
                setUserProducts(res.data.products)
				setUser(res.data)
			})
			.catch((err) => {
				// debugger;
                console.log('err', err);
			});
	}, []);

    useEffect(() => {
        console.log('user', user)
        console.log('user prod', userProducts)
    }, [user])

    

    const history = useHistory()

    const goToProfile = () => {
        history.push('/profile')
    }

    const goToMarketplace = () => {
        history.push('/marketplace')
    }

    const goToMain = () => {
        history.push('/')
    }

    const addListing = () => {
        history.push('/add-listing')
    }

    return (
        <Page>
            <HeadLinks>
                <Link>username</Link>
                <Link onClick={goToProfile}>profile</Link>
                <Link onClick={goToMarketplace}>marketplace</Link>
                <Link onClick={goToMain}>log out</Link>
            </HeadLinks>

            <ItemBox>
                <ForSaleCont>
                    <Labels>your items for sale</Labels>
                    <AddListing onClick={addListing}>+ add listing</AddListing>
                </ForSaleCont>
                <ListingsBox>
                    {
                        userProducts.map(item => (
                        <ItemsForSale key={item.productid} item={item} />
                        )) 
                    }
                </ListingsBox>
            </ItemBox>

            <ItemBox>
                <Labels>items by category</Labels>
                <CategoryBoxes>
                    {categories.map(cat => (
                        <CategoryListing cat={cat} />
                    ))}
                </CategoryBoxes>
            </ItemBox>

            <ItemBox>
                <MarketHead>
                    <Labels>market prices (the fanciest of stretches)</Labels>
                    <SearchBy>
                        <DropdownCont>
                            <Dropdown name="market_location">
                                <option value="Select">Search by location</option>
                                <option value="Burundi">Burundi</option>
                                <option value="Kenya">Kenya</option>
                                <option value="Rwanda">Rwanda</option>
                                <option value="South Sudan">South Sudan</option>
                                <option value="Tanzania">Tanzania</option>
                                <option value="Uganda">Uganda</option>
                            </Dropdown>
                        </DropdownCont>
                        <DropdownCont>
                            <Dropdown name="product_type">
                                <option value="Select">Search by category</option>
                                <option value="Fruit">Fruit</option>
                                <option value="Meat">Meat</option>
                                <option value="Vegetables">Vegetables</option>
                            </Dropdown>
                        </DropdownCont>
                        <SearchBox
                            name="searchbar"
                            type="text"
                            placeholder="Search by item"
                        />
                    </SearchBy>
                </MarketHead>
                <ListingsBox>
                    <MarketPrices foods={products} />
                </ListingsBox>
            </ItemBox>

        </Page>
    )
}

const mapStateToProps = (state) => {
    return {
        categories: state.fetchReducer.categories,
        products: state.fetchReducer.products,
        isFetching: state.fetchReducer.isFetching,
        error: state.fetchReducer.error
    }
}

export default connect(mapStateToProps, { fetchData })(ProfilePage);


// ================================= styling =================================



// Return div is always called page
const Page = styled.div`
    font-family: "Roboto", serif;
    background-color:#726f5c;
`

//links at top corner
const HeadLinks = styled.div`
    display:flex;
    justify-content: flex-end;
    padding-right: 2rem;
    background-color: #ffffff;

    @media screen and (max-width: 800px) {
        justify-content: space-evenly;
        margin: 1rem 0;
    }

    @media screen and (max-width: 500px) {
        flex-direction:column;
        align-items: flex-end;
    }
`
const Link = styled.h3`
    margin: 1rem;
    color:black;
    text-decoration: none;

    &:hover {
        border-bottom: 5px solid #125592;
        color: #458962;
        cursor: pointer;
    }

    @media screen and (max-width: 800px) {
        margin: .25rem 0;
    }
`

//created this box to contain the title with the cards
const ItemBox = styled.div`
    /* width: 85%; */
    margin: 0 auto;
    padding-bottom: 2%;

    @media screen and (max-width: 800px) {
        width: 100%;
        
    }
`

const MarketHead = styled.div`
    display:flex;
    justify-content:space-between;
`

// hard coded text to indicate whether it's items for sale or items they're watching
const ForSaleCont = styled.div`
    display: flex;
    justify-content:space-between;
    align-items: center;
    margin: 0 2rem 0 0;
`

const Labels = styled.h2`
    margin: 0 2rem;
    

    @media screen and (max-width: 800px) {
        padding-left: 1rem;
    }
`
const AddListing = styled.h3`
    font-weight: normal;
    cursor: pointer;
`

const SearchBy = styled.div`
    display:flex;
    justify-content:flex-end;
    width: 60%;
    padding-right: 2%;
`

const DropdownCont = styled.div`
    width: 40%;
`

const Dropdown = styled.select`
    width: 60%;
    display: block;
	font-size: 0.9rem;
	font-weight: 700;
	color: #444;
	line-height: 1.3;
	padding: .6em 1.4em .5em .8em;
	max-width: 100%;
	box-sizing: border-box;
	margin: 0;
	border: 1px solid #aaa;
	box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
	border-radius: .5em;
	appearance: none; // hides actual drop down arrow
	background-color: #fff;
	background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
	  linear-gradient(to bottom, #ffffff 0%,#e5e5e5 100%);
	background-repeat: no-repeat, repeat;
	background-position: right .7em top 50%, 0 0;
	background-size: .65em auto, 100%;
`

const SearchBox = styled.input`
    width: 40%;
    display: block;
	font-size: 0.9rem;
	font-weight: 700;
	color: #444;
	line-height: 1.3;
	padding: .6em 1.4em .5em .8em;
	max-width: 100%;
	box-sizing: border-box;
	margin: 0;
	border: 1px solid #aaa;
	box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
	border-radius: .5em;
	appearance: none; // hides actual drop down arrow
	background-color: #fff,
	  linear-gradient(to bottom, #ffffff 0%,#e5e5e5 100%);
	background-repeat: no-repeat, repeat;
	background-position: right .7em top 50%, 0 0;
	background-size: .65em auto, 100%;
`


const ListingsBox = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

const CategoryBoxes = styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;
    `