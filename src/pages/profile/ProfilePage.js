import React from "react";
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import roboto from 'fontsource-roboto'

import ItemsForSale from './ItemsForSale'
import WatchedItems from '../marketplace/WatchedItems'

// Return div is always called page
const Page = styled.div`
    font-family: roboto, serif;
`

//links at top corner
const HeadLinks = styled.div`
    display:flex;
    justify-content: flex-end;
    margin-right: 2rem;
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
`

//created this box to contain the title with the cards
const ItemBox = styled.div`
    width: 85%;
    margin: 0 auto 3%;
`

// hard coded text to indicate whether it's items for sale or items they're watching
const Labels = styled.h2`
    margin: 0;
`

//main containers for listings being sold/watched. will need .map and also expand buttons.
const ListingsBox = styled.div`
    padding: 0 1% 1%;
    margin: auto;
    display:flex;
    justify-content: space-between;
`

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
                        <ItemsForSale/>
                        <ItemsForSale/>
                        <ItemsForSale/>
                    </ListingsBox>
            </ItemBox>

            <ItemBox>
                <Labels>watched items</Labels>
                    <ListingsBox>
                        {/* this will need to be .map'd */}
                        <WatchedItems/>
                        <WatchedItems/>
                        <WatchedItems/>
                    </ListingsBox>
            </ItemBox>

        </Page>
    )
}

export default ProfilePage;