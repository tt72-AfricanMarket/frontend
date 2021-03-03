import React, {useState, useEffect} from "react";
import { connect } from 'react-redux'
import { fetchData } from "../../store/actions"
import { useHistory } from 'react-router-dom'

import styled from 'styled-components'
import roboto from 'fontsource-roboto'

import ItemsForSale from './ItemsForSale'
import CategoryListing from './CategoryListing'

import MarketPrices from '../marketplace/MarketPrices'

// Return div is always called page
const Page = styled.div`
    font-family: "Roboto", serif;
`

//links at top corner
const HeadLinks = styled.div`
    display:flex;
    justify-content: flex-end;
    margin-right: 2rem;

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
    width: 85%;
    margin: 0 auto 3%;

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
`

const Labels = styled.h2`
    margin: 0;

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
    padding: 0 0 1%;
    margin: auto;
    display:flex;
    justify-content: space-evenly;
    flex-wrap: wrap;  
`

const CategoryBoxes = styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;
`

// const dummyData = {
//     categories: [
//         { id: "1", name: "first" },
//         { id: "2", name: "second" },
//         { id: "3", name: "third" }
//     ]
// }

const ProfilePage = props => {

    const {categories, isFetching, error} = props

    
    // console.log(`cat`, categories)
    const foods = []
    
    useEffect(() => {
        props.fetchData();
    },[])

    // turning all items into an array
    categories.map(cat => {
        let category = cat.products
        category.map(cat => {
            // console.log(cat)
            foods.push(cat)
        })
    })
    console.log(`foods`,foods)

    const history = useHistory()

    if (isFetching) { //this will be displayed on the page while axios is getting data, feel free to style it or remove it
        return <h2>Fetching Product List</h2>
    }



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
                    
                    {/* <ItemsForSale name={foods}/> */}
                    {foods.map(item => (
                        item.user.username === "admin"
                        // console.log(item.name)
                        ? <ItemsForSale key={item.productid} item={item}/>
                        : console.log('nope')
                    ))}
                    {/* {props.categories.map(item => (
                        <ItemsForSale key={item.productid} item={item} />
                    ))} */}
                </ListingsBox>
            </ItemBox>

            <ItemBox>
                <Labels>items by category</Labels>
                <CategoryBoxes>
                {categories.map(cat => (
                    <CategoryListing cat={cat}/>
                ))}
                </CategoryBoxes>
            </ItemBox>

            <ItemBox>
                <MarketHead>
                    <Labels>market prices (the fanciest of stretches)</Labels>
                    <SearchBy>

                        <DropdownCont>

                            <Dropdown
                                name="market_location"
                                value= "no"
                            >
                            <option value="Select">
                                Search by location
                            </option>
                            {/* {props.categories.map(country => (
                                <option
                                    value={country.location.country}
                                    id={country.location.locationid}
                                >
                                {country.location.country}
                                </option>
                            ))} */}
                            <option value="Burundi">
                                Burundi
                            </option>
                            <option value="Kenya">
                                Kenya
                            </option>
                            <option value="Rwanda">
                                Rwanda
                            </option>
                            <option value="South Sudan">
                                South Sudan
                            </option>
                            <option value="Tanzania">
                                Tanzania
                            </option>
                            <option value="Uganda">
                                Uganda
                            </option>
                            </Dropdown>

                        </DropdownCont>
                        <DropdownCont>

                            <Dropdown
                                name="product_type"
                            >
                                <option value="Select">
                                    Search by category
                            </option>
                                <option value="Fruit">
                                    Fruit
                            </option>
                                <option value="Meat">
                                    Meat
                            </option>
                                <option value="Vegetables">
                                    Vegetables
                            </option>

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
                    <MarketPrices foods={foods} />
                </ListingsBox>

            </ItemBox>

        </Page>
    )
}

const mapStateToProps = (state) => {
    return {
        categories: state.fetchReducer.categories,
        isFetching: state.fetchReducer.isFetching,
        error: state.fetchReducer.error
    }
}

export default connect(mapStateToProps, {fetchData})(ProfilePage);