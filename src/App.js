import React, {useState} from 'react'
import './App.css';
import { Route, Switch } from 'react-router-dom'
import axios from 'axios'
import HomePage from './pages/home/HomePage'
import LoginPage from './pages/login/LoginPage'
import ProfilePage from './pages/profile/ProfilePage'
import SignupPage from './pages/signup/SignupPage'
import Marketplace from './pages/marketplace/Marketplace'
import AddAListing from './pages/marketplace/AddAListing'

const initialFormValues = {
  name: '',
  username: '',
  email: '',
  password: '',
  market_location: 'Select',
  user_type:''
}

function App() {

  
  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue
    })
    }

    const addNewUser = (newUser) => {
      axios.post('https://african-marketplace-tt72.herokuapp.com/users/user', newUser)
        .then (res => {
          console.log(res)
        })
        .catch (err => {
          console.log(err)
        })
        .finally(() => {
          setFormValues(initialFormValues)
        })
    }


    const submitForm = () => {
      const newUser = {
        name: formValues.name.trim(),
        username: formValues.username.trim(),
        email: formValues.email.trim(),
        password: formValues.password.trim(),
        market_location: formValues.market_location,
        user_type: formValues.user_type,
      }
      if (!newUser.name || !newUser.username || !newUser.email || !newUser.password || !newUser.market_location) {
        return;
      }
      addNewUser(newUser)
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
          <SignupPage
          values={formValues}
          update={updateForm}
          submit={submitForm}
          />
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

export default App;
