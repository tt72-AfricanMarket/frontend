import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import MarketplaceCard from './MarketplaceCard'
import { connect } from 'react-redux'
import {useHistory} from 'react-router-dom'
import axiosWithAuth from '../../utils/axiosWithAuth'
import axios from 'axios'
import { fetchData } from "../../store/actions";
import { bindActionCreators } from "redux";
import { fetchReducer } from "../../store/reducers/fetchReducer";
import { StylesProvider } from "@material-ui/core";
import SelectInput from "@material-ui/core/Select/SelectInput";

// Return div is always called page
const Page = styled.div`
    background-color:#726f5c;
`

// links at top corner
const HeadLinks = styled.div`
    display:flex;
    justify-content: flex-end;
    padding-right: 2rem;
    background-color: #ffffff;

 & > a {
    display:flex;
    align-items:center;
    margin: 1rem;
    font-family:Arial;
    text-align: center;
    justify-content:center;
    color:#ffffff;
    text-decoration:none;
    font-size:0.9rem;
    background: #c35b48;
    width:100px;
    height: 30px;
    border-radius:10px;
    border:1px solid black;
    cursor: pointer;
    transition: all .2s ease-in;
        :hover {
            transform:scale(1.1);
            box-shadow:1px 1px black;

        }

    @media screen and (max-width: 800px) {
        justify-content: space-evenly;
        margin: 1rem 0;
    }

    @media screen and (max-width: 500px) {
        flex-direction:column;
        align-items: flex-end;
    }
`
const Links = styled.h3`
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



// Dropdown to choose marketplace
const MarketLocation = styled.select`
    margin-top: 1vh;
    margin-right: 3rem;

`

// main div to list all items, will need a .map through it for listed items
const ListOfItems = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: space-around;
`


const Marketplace = (props) => {
    const { categories, products, isFetching } = props;

    useEffect(() => {
        props.fetchData();
    }, []);

    

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

    if (isFetching) { //this will be displayed on the page while axios is getting data, feel free to style it or remove it
        return <h2>Fetching Product List</h2>
    }

    return (
        <Page>

            <HeadLinks>

                <Links>username</Links>
                <Links onClick={goToProfile}>profile</Links>
                <Links onClick={goToMarketplace}>marketplace</Links>
                <Links onClick={goToMain}>log out</Links>
                <Links to="/checkout">Cart</Links>


            </HeadLinks>
            <label><strong>Market Location:</strong></label>
            
            <MarketLocation
                name="market_location"
            >
                {/* These are the locations listed on the *actual* website */}
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
            </MarketLocation>
           
            <ListOfItems>
                {products.map(item => <MarketplaceCard key={item.productid} item={item} />)}
            </ListOfItems>
        </Page>
    )
}

const mapStateToProps = state => {
    return {
        categories: state.fetchReducer.categories,
        products: state.fetchReducer.products,
        isFetching: state.fetchReducer.isFetching,
        error: state.fetchReducer.error
    }
}

export default connect(mapStateToProps, { fetchData })(Marketplace);
