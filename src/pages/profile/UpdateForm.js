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
    const id = props.match.params.id;

    useEffect(() => {
        axios
            .get('https://african-marketplace-tt72.herokuapp.com/category/all')
            .then(res => setItem(res.data))
            .catch(err => console.log(err))
    }, []);

    const changeHandler = e => {
        e.persist();
        let value = e.target.value;
        setItem({
            ...item,
            [ev.target.name]: value
        });
    };
}