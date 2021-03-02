import React, { useEffect } from "react";
import styled from 'styled-components'
import MarketplaceCard from './MarketplaceCard'
import { connect } from 'react-redux'
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
    background-color:#ffffff;
`
const Link = styled.h3`
    margin: 1rem;
    color:000000;
    text-decoration: none;

`

// Dropdown to choose marketplace
const MarketLocation = styled.select`
    margin-top:1vh;
    margin-right: 3rem;

`

// main div to list all items, will need a .map through it for listed items
const ListOfItems = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

const Marketplace = (props) => {
    const { products, isFetching, error } = props;

    useEffect(() => {
        props.fetchData();
    }, []);

    return (
        <Page>

            <HeadLinks>

                <Link>username</Link>
                <Link>profile</Link>
                <Link>marketplace</Link>
                <Link>log out</Link>

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
            {(isFetching)
                ? <p>Fetching Product List</p>
                : <ListOfItems>
                    {props.products.map(item => (
                        <MarketplaceCard key={item.productid} item={item} />
                    ))}
                </ListOfItems>
            }
        </Page>
    )
}

const mapStateToProps = state => {
    return {
        products: state.fetchReducer.products,
        isFetching: state.fetchReducer.isFetching,
        error: state.fetchReducer.error
    }
}

export default connect(mapStateToProps, { fetchData })(Marketplace);
