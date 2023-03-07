import React from 'react'
import { Link } from 'react-router-dom'
// import style from ".style.scss"
function Register() {
    return (
        <div className='auth'>
            <h1>
                Register
            </h1>
            <form>
                <input required type= "text" placeholder= "Enter your username" />
                <input required type= "text" placeholder= "Enter your email" />
                <input required type= "password" placeholder= "Enter your password" />
                <button>Register</button> 
                <p>This is an error!</p>
                <span>Don't you have any account? <Link to= "/login">Login</Link></span>
            </form>
        </div>
    )
}

export default Register