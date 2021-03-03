import React from 'react'
import styled from 'styled-components'
import roboto from 'fontsource-roboto'
import {useHistory} from 'react-router-dom'

const Page = styled.div`
    font-family: roboto, serif;
`

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

const ItemBox = styled.form`
    width: 85%;
    margin: 0 auto 3%;

    @media screen and (max-width: 800px) {
        width: 100%;
        
    }
`

const Labels = styled.h2`
    margin: 0;

    @media screen and (max-width: 800px) {
        padding-left: 1rem;
    }
`

const ListingBox = styled.div`
    padding: 0 0 1%;
    margin: auto;
    display:flex;
    justify-content: space-evenly;
    flex-wrap: wrap;  
`

const Inputs = styled.input`
    border: 1px solid black;
    width: 35%;
`
const Descr = styled.input`
    border: 1px solid black;
    width: 80%;
    height: 4rem;
`
const MarketLocation = styled.select`
    width: 35%;
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

const Add = styled.button`
    float:right;
    margin-right: 10rem;
    font-size: 1.5rem;
`

const ErrorNotice = styled.div``

const AddAListing = props => {

    const {form, change, submit, disabled, errors} = props
    console.log(form)

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

    const completeForm = () => {
        history.push('/profile')
    }

    const submitListing = e => {
        e.preventDefault()
        console.log(`submitted listing`)
        submit(form)
    }

    const OnChange = evt => {
        const {name,value} = evt.target
        change(name,value)
    }

    return (
        <Page>

            <HeadLinks>

            <Link>username</Link>
            <Link onClick={goToProfile}>profile</Link>
            <Link onClick={goToMarketplace}>marketplace</Link>
            <Link onClick={goToMain}>log out</Link>

            </HeadLinks>

            <ItemBox onSubmit={submitListing}>
                <Labels>add a listing</Labels>
                <ListingBox>
                    <Inputs
                        name="item_name"
                        type="text"
                        placeholder="item name"
                    />
                    <MarketLocation
                                name="market_location"
                            >
                                <option 
                                    value="Select"
                                    locationid=""
                                >
                                    Select Location
                                </option>
                                <option 
                                    value="Burundi"
                                    locationid="4"
                                >
                                    Burundi
                                </option>
                                <option 
                                    value="Kenya"
                                    locationid="5"
                                >
                                    Kenya
                                </option>
                                <option 
                                    value="Rwanda"
                                    locationid="6"
                                >
                                    Rwanda
                                </option>
                                <option 
                                    value="South Sudan"
                                    locationid="7"
                                >
                                    South Sudan
                                </option>
                                <option 
                                    value="Tanzania"
                                    locationid="8"
                                >
                                    Tanzania
                                </option>
                                <option 
                                    value="Uganda"
                                    locationid="9"
                                >
                                    Uganda
                                </option>
                        </MarketLocation>
                        <DropdownCont>

                            <Dropdown
                                name="product_type"
                            >
                                <option 
                                    value="Select"
                                    categoryid=""
                                >
                                    Select category
                            </option>
                                <option 
                                    value="fruit"
                                    categoryid="12"
                                >
                                    Fruit
                            </option>
                                <option 
                                    value="meat"
                                    categoryid="10"
                                >
                                    Meat
                            </option>
                                <option 
                                    value="vegetables"
                                    categoryid="11"
                                >
                                    Vegetables
                            </option>

                            </Dropdown>

                        </DropdownCont>
                    <Descr
                        name="description"
                        type="text"
                        placeholder="add a description"
                    />
                    
                    <Inputs
                        name="price_per_oz"
                        type="price"
                        placeholder="price per oz"
                    />
                    <Inputs
                        name="quantity"
                        type="text"
                        placeholder="quantity"
                    />
                    </ListingBox>
                <ErrorNotice>
                    {/* <div>{errors.name}</div> */}
                </ErrorNotice>
            <Add>add listing</Add>
            </ItemBox>

        </Page>
    )
}

export default AddAListing