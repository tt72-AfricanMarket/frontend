import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import axios from 'axios';
import axiosWithAuth from '../../utils/axiosWithAuth';

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

const Page = styled.div`
  font-family: "Roboto", serif;
  background-color:#726f5c;
  height: 100vh;
`

const Update = styled.div`
  display:flex;
  align-items:center;
  flex-direction: column;
`

const FlexDiv = styled.div`
  display:flex;
  justify-content:center;
`

const Card = styled.div`
    width: 25%;
    /* border: 1px solid black; */
    padding: 1rem;
    margin: 1rem;
    background-color:#E8E2D6;
    border-radius: 20px;

    @media screen and (max-width: 800px) {
        width: 35%;
    }

    @media screen and (max-width: 500px) {
        width: 100%;
    }
`

const UpdateItem = styled.h2`
  text-align:center;
    color:#ffffff;
    background-color:#4a3730;
    width:150px;

    @media screen and (max-width: 800px) {
        font-size: 1.25rem;
        
    }

    @media screen and (max-width: 500px) {
        font-size: 1.5rem;
    }
`

const UpdateFormDiv = styled.form`
  display:flex;
  flex-direction: column;
`

const InfoInput = styled.input`
  margin: .25rem 0;
  height: 1.5rem;
  width: 14rem;
`

const SubmitButton = styled.button`
  margin: .25rem 0;
  background-color: #2d2d2d;
    border: none;
    color: white;
    font-weight:bold;
    padding: 6px 18px;
    /* margin: 0 3%; */
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 15px;
    cursor: pointer;

    &:hover {
        color: #c35b48;
        border-bottom: 1px solid #e5c027;
    }
`

const initialItem = {
    productId: 0,
    description: "",
    imageUrl: "",
    location: {
        locationid: 0,
        country: ""
    },
    name: "",
    price: 0,
    quantity: 0,
    user: {
        userid: 0,
        username: "",
        email: "",
        roles: [{
            role: {
                roleid: 0,
                name: ""
            },
        }]
    }
}

const UpdateForm = props => {

  const [user, setUser] = useState([]);

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

    const logOut = () => {
      localStorage.clear();
      history.push('/')
    };

    useEffect(() => {
      axiosWithAuth()
        .get("/users/getuserinfo")
        .then((res) => {
          console.log(res.data);
          setUser(res.data)
        })
        .catch((err) => {
          // debugger;
                  console.log('err', err);
        });
    }, []);

    const [item, setItem] = useState(initialItem);
    const itemId = props.match.params.id;
    // const params = useParams();

    useEffect(() => {
        axios
            .get(`https://african-marketplace-tt72.herokuapp.com/products/product/${itemId}`)
            .then(res => setItem(res.data))
            .catch(err => console.log(err))
            
    }, []);


    const changeHandler = e => {
        e.persist();
        let value = e.target.value;

        setItem({
            ...item,
            [e.target.name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log("Form submitted")
        axios
        .put(`https://african-marketplace-tt72.herokuapp.com/products/product/${itemId}`, item)
        .then(res => {
          // props.setItems(res.data)
          props.history.push(`/profile`)
        })
        .catch(err => console.log(err))
      };

      return (
        <Page>
          <HeadLinks>
                <Link>{user.username}</Link>
                <Link onClick={goToProfile}>profile</Link>
                <Link onClick={goToMarketplace}>marketplace</Link>
                <Link onClick={logOut}>log out</Link>
            </HeadLinks>
            <FlexDiv>
            <Card>
          <Update>
          <UpdateItem>Update Item</UpdateItem>
          <UpdateFormDiv onSubmit={handleSubmit}>
            <InfoInput
              type="text"
              name="name"
              onChange={changeHandler}
              placeholder="name"
              value={item.name}
            />
            
    
            <InfoInput
              type="number"
              name="price"
              onChange={changeHandler}
              placeholder="Price"
              value={item.price}
            />
            
    
            <InfoInput
              type="string"
              name="imageUrl"
              onChange={changeHandler}
              placeholder="Image"
              value={item.imageUrl}
            />
            
    
            <InfoInput
              type="string"
              name="description"
              onChange={changeHandler}
              placeholder="Description"
              value={item.description}
            />
            
    
            {/* <input
              type="string"
              name="shipping"
              onChange={changeHandler}
              placeholder="Shipping"
              value={item.shipping}
            /> */}
                
            <SubmitButton className="md-button form-button">Update</SubmitButton>
          </UpdateFormDiv>
          </Update>
          </Card>
          </FlexDiv>
        </Page>
      );
}

export default UpdateForm;