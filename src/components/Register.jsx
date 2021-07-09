import {useState} from 'react'
import axios from 'axios'
import jwt from 'jsonwebtoken'
import { Redirect } from 'react-router-dom'
import Profile from './Profile.jsx'

export default function Register(props) {
//state for the controlled form
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
//state for the flash message from the server
    const [message, setMessage] = useState('')
//function to handle form submission
const handleSubmit = async e => {
    try {
        e.preventDefault()
        //make a request body
        const requestBody = {
            name: name,
            email: email,
            password: password
        }
        //post registration data to the server
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/register`, requestBody)
        //take the token out of the response 
        const {token} = response.data
        //set token in local storage
        localStorage.setItem('jwtToken', token)
        //decode the token
        const decoded = jwt.decode(token)
        //set the user in the app.js state
        props.setCurrentUser(decoded)

    } catch(err) {
        //set message if the error is a 400
        if(err.response.status === 400) {
            setMessage(err.response.data.msg)
        } else {
            console.log(err)
        }
    }
    console.log('submit the form!! 🪲 ')
}

//redirect if the user is logged in
if(props.currentUser) return <Redirect to='/profile' component={Profile} currentUser={props.currentUser} />
    return (
        <div>
            <h3>Register Here::</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name-input'>Name::</label>
                <input id='name-input'
                        type='text'
                        placeholder='enter your name, loser...'
                        onChange={e => setName(e.target.value)}
                        value={name}
                        />

                <label htmlFor='email-input'>Email::</label>
                <input id='email-input'
                        type='email'
                        placeholder='enter your email, loser...'
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        />

                <label htmlFor='password-input'>Password::</label>
                <input id='password-input'
                        type='password'
                        placeholder='enter your password, loser...'
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        />
                
                <input type='submit'
                        value='make a new account'
                />

            </form>
        </div>
    )
}