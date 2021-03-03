import React, {useState, useEffect} from 'react'
import './App.css';
import axios from 'axios'
import * as yup from 'yup'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchData } from "./store/actions"

import confirmListing from './pages/marketplace/confirmListing'

import HomePage from './pages/home/HomePage'
import LoginPage from './pages/login/LoginPage'
import ProfilePage from './pages/profile/ProfilePage'
import SignupPage from './pages/signup/SignupPage'
import Marketplace from './pages/marketplace/Marketplace'
import AddAListing from './pages/marketplace/AddAListing'


// data for profile and adding listing
const blankListing = {
  description: "",
  imageUrl: "",
  location: {locationid: "", country: ""},
  name: "",
  price: "",
  productid: "",
  quantity: "",
  user: {userid: "", username: "", email: "", roles: {}},
  category: {categoryid: "", categoryname: ""}
}

const addError = {
  description: "",
  location: {locationid: "", country: ""},
  name: "",
  price: "",
  productid: "",
  quantity: "",
  category: {categoryid: "", categoryname: ""}
}

const initialOrder = []
const initialDisabled = true


function App(props) {

  // to create a single array of data
    const {categories, isFetching, error} = props

      
      // console.log(`cat`, categories)
      const foods = []
      
      useEffect(() => {
          props.fetchData();
      },[])

      console.log(`cat`, categories)

      // turning all items into an array
      categories.map(cat => {
          let category = cat.products
          console.log(`cat1`, cat)
          category.map(cat => {
              // console.log(`cat2`,cat)
              foods.push(cat)
          })
      })

     

  // slices of state
  const [list, setList] = useState(foods)
  const [addAListing, setAddAListing] = useState(blankListing)
  const [errors, setErrors] = useState(addError)
  const [disabled, setDisabled] = useState(initialDisabled)

  // helpers
  const addNewListing = newListing => {
    axios.post("imightneedhelphere", newListing)
    .then(res => {
        setList([...list, res.data])
        console.log(`new list`, list)
    })
    .catch(err => {
        console.log(`no food here dummy`, err)
    })
    setAddAListing(blankListing)
  }

  // event handlers
  const change = (name, value) => {
      yup.reach(confirmListing, name)
      .validate(value)
      .then(() => {
          setErrors({...errors, [name]: ""})
      })
      .catch(err => {
          setErrors({...errors, [name]: err.errors})
      })
      setAddAListing({
          ...addAListing,
          [name]: value
      })
      console.log(addAListing)
  }

  const submitListing = data => {
      const newListing = {
          description: data.description,
          
      // location: {locationid: data.locationid, country: data.country},
      name: data.name,
      price: data.price,
      productid: data.productid,
      quantity: data.quantity,
      // category: {categoryid: data.categoryid, categoryname: data.categoryname}
      }
  }

  // side effects

  useEffect(() => {
      confirmListing.isValid(addAListing)
      .then(valid => {
          setDisabled(!valid)
      })
  }, [addAListing])

  if (isFetching) { //this will be displayed on the page while axios is getting data, feel free to style it or remove it
    return <h2>Fetching Product List</h2>
}


  return (
    <div>
      <Switch>

        <Route exact path='/'>
          <HomePage />
        </Route>

        <Route path='/login'>
          <LoginPage />
        </Route>

        <Route path='/profile'>
          <ProfilePage />
        </Route>

        <Route path='/signup'>
          <SignupPage />
        </Route>

        <Route path='/marketplace'>
          <Marketplace />
        </Route>

        <Route path='/add-listing'>
          <AddAListing/>
        </Route>

      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
      categories: state.fetchReducer.categories,
      isFetching: state.fetchReducer.isFetching,
      error: state.fetchReducer.error
  }
}

export default connect(mapStateToProps, {fetchData})(App);
// export default App;
