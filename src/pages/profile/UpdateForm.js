import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import axios from 'axios';
import { fetchData } from '../../store/actions';

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
        <div>
          <h2>Update Item</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              onChange={changeHandler}
              placeholder="name"
              value={item.name}
            />
            <div className="baseline" />
    
            <input
              type="number"
              name="price"
              onChange={changeHandler}
              placeholder="Price"
              value={item.price}
            />
            <div className="baseline" />
    
            <input
              type="string"
              name="imageUrl"
              onChange={changeHandler}
              placeholder="Image"
              value={item.imageUrl}
            />
            <div className="baseline" />
    
            <input
              type="string"
              name="description"
              onChange={changeHandler}
              placeholder="Description"
              value={item.description}
            />
            <div className="baseline" />
    
            {/* <input
              type="string"
              name="shipping"
              onChange={changeHandler}
              placeholder="Shipping"
              value={item.shipping}
            /> */}
            <div className="baseline" />
    
            <button className="md-button form-button">Update</button>
          </form>
        </div>
      );
}

export default UpdateForm;