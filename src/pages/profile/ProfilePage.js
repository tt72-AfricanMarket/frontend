import React from "react";
import styled from 'styled-components'

import MarketplaceCard from '../marketplace/MarketplaceCard'
import ItemsForSale from './ItemsForSale'
import WatchedItems from '../marketplace/WatchedItems'

// Return div is always called page
const Page = styled.div``

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
`

// hard coded text to indicate whether it's items for sale or items they're watching
const Labels = styled.h2``

//main containers for listings being sold/watched. will need .map and also expand buttons.
const ListingsBox = styled.div`
    padding: 1% 5%;
    margin: auto;
    display:flex;
    justify-content: space-between;
`

const ProfilePage = () => {

    return (
        <Page>

            <HeadLinks>

            <Link>username</Link>
            <Link>profile</Link>
            <Link>marketplace</Link>
            <Link>log out</Link>

            </HeadLinks>

            <Labels>your items for sale</Labels>
                <ListingsBox>
                    {/* this will need to be .map'd */}
                    <ItemsForSale/>
                    <ItemsForSale/>
                    <ItemsForSale/>
                </ListingsBox>

            <Labels>watched items</Labels>
                <ListingsBox>
                    {/* this will need to be .map'd */}
                    <WatchedItems/>
                    <WatchedItems/>
                    <WatchedItems/>
                </ListingsBox>

        </Page>
    )
}

export default ProfilePage;