import React from 'react'
import './App.css';
import { Route, Switch } from 'react-router-dom'

import HomePage from './pages/home/HomePage'
import LoginPage from './pages/login/LoginPage'
import ProfilePage from './pages/profile/ProfilePage'
import SignupPage from './pages/signup/SignupPage'
import Marketplace from './pages/marketplace/Marketplace'
import AddAListing from './pages/marketplace/AddAListing'

import ProtectedRoute from './utils/ProtectedRoute'


function App() {
  return (
    <div>
      <Switch>

        <Route exact path='/' component={HomePage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/signup' component={SignupPage} />
        <ProtectedRoute exact path='/profile' component={ProfilePage} />
        <Route path='/marketplace' component={Marketplace} />
        <ProtectedRoute exact path='/add-listing' component={AddAListing} />

        {/* <Route exact path='/'>
          <HomePage />
        </Route>

        <Route path='/login'>
          <LoginPage />
        </Route>

        <ProtectedRoute exact path='/profile'>
          <ProfilePage />
        </ProtectedRoute>

        <Route path='/signup'>
          <SignupPage />
        </Route>

        <Route path='/marketplace'>
          <Marketplace />
        </Route>

        <ProtectedRoute exact path='/add-listing'>
          <AddAListing />
        </ProtectedRoute> */}

      </Switch>
    </div>
  );
}

export default App;
