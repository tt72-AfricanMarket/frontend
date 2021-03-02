import React from "react";
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'


import styled from 'styled-components'
import roboto from 'fontsource-roboto'

import ItemsForSale from './ItemsForSale'
import WatchedItems from './WatchedItems'

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

// hard coded text to indicate whether it's items for sale or items they're watching
const Labels = styled.h2`
    margin: 0;

    @media screen and (max-width: 800px) {
        padding-left: 1rem;
    }
`

//main containers for listings being sold/watched. will need .map and also expand buttons.
const ListingsBox = styled.div`
    padding: 0 0 1%;
    margin: auto;
    display:flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`

const dummyData = {
    products: [
        { id: "1", name: "first" },
        { id: "2", name: "second" },
        { id: "3", name: "third" }
    ]
}

const ProfilePage = () => {

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

    return (
        <Page>

            <HeadLinks>

                <Link>username</Link>
                <Link onClick={goToProfile}>profile</Link>
                <Link onClick={goToMarketplace}>marketplace</Link>
                <Link onClick={goToMain}>log out</Link>

            </HeadLinks>

            <ItemBox>
                <Labels>your items for sale</Labels>
                <ListingsBox>
                    {/* this will need to be .map'd */}
                    {dummyData.products.map(item => (
                        <ItemsForSale key={item.id} item={item} />
                    ))}
                </ListingsBox>
            </ItemBox>

            <ItemBox>
                <Labels>watched items</Labels>
                <ListingsBox>
                    {dummyData.products.map(item => (
                        <WatchedItems key={item.id} item={item} />
                    ))}
                </ListingsBox>
            </ItemBox>

        </Page>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps, {})(ProfilePage);