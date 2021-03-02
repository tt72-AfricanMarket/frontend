import React from 'react'
import './App.css';
import { Route, Switch } from 'react-router-dom'

import HomePage from './pages/home/HomePage'
import LoginPage from './pages/login/LoginPage'
import ProfilePage from './pages/profile/ProfilePage'
import SignupPage from './pages/signup/SignupPage'
import Marketplace from './pages/marketplace/Marketplace'
import AddAListing from './pages/marketplace/AddAListing'
// import NotFound404 from './pages/notfound/NotFound404'

import ProtectedRoute from './utils/ProtectedRoute'



function App() {
  return (
    <div>
      <Switch>

        <Route exact path='/'>
          <HomePage />
        </Route>

        <Route path='/login'>
          <LoginPage />
        </Route>

        <ProtectedRoute path='/profile'>
          <ProfilePage />
        </ProtectedRoute>

        <Route path='/signup'>
          <SignupPage />
        </Route>

        <Route path='/marketplace'>
          <Marketplace />
        </Route>

        <Route path='/add-listing'>
          <AddAListing />
        </Route>

        {/* <Route path="*">
          <NotFound404 />
        </Route> */}

      </Switch>
    </div>
  );
}

export default App;
