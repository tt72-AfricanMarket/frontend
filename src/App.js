import React, { useState, useEffect } from 'react'
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
import NewSignupPage from './pages/signup/NewSignupPage'
import Marketplace from './pages/marketplace/Marketplace'
import AddAListing from './pages/marketplace/AddAListing'
import Checkout from './pages/checkout/Checkout.js'
import UpdateForm from './pages/profile/UpdateForm';
import Cart from './pages/marketplace/Cart';

import ProtectedRoute from './utils/ProtectedRoute'

function App() {

  return (
    <div>
      <Switch>

        <Route exact path='/' component={HomePage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/signup' component={NewSignupPage} />
        <ProtectedRoute exact path='/profile' component={ProfilePage} />
        <Route path='/marketplace' component={Marketplace} />
        <ProtectedRoute exact path='/add-listing' component={AddAListing} />
        <Route path='/checkout' component={Checkout} />
        <Route path='/editItem/:id' component={UpdateForm} />
        {/* <Route path='/checkout' component={Checkout} /> */}
      </Switch>
    </div>
  )
}

export default App;
