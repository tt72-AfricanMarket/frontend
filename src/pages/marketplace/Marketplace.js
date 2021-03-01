import React from "react";
import styled from 'styled-components'

import MarketplaceCard from './MarketplaceCard'

// Return div is always called page
const Page = styled.div``

// links at top corner
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

// Dropdown to choose marketplace
const MarketLocation = styled.select`
    
    margin-right: 3rem;
`

// main div to list all items, will need a .map through it for listed items
const ListOfItems = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

const Marketplace = () => {

    return (
        <Page>

            <HeadLinks>

                <Link>username</Link>
                <Link>profile</Link>
                <Link>marketplace</Link>
                <Link>log out</Link>

            </HeadLinks>

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
                {/* this will need to be mapped through. sample @ marketplace/marketplace-card */}
                <MarketplaceCard/>
                <MarketplaceCard/>
                <MarketplaceCard/>
                <MarketplaceCard/>
                <MarketplaceCard/>
                <MarketplaceCard/>
            </ListOfItems>
        </Page>
    )
}

export default Marketplace;