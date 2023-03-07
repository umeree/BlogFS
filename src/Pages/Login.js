import React from 'react'
import { Link } from 'react-router-dom'
// import style from ".style.scss"
function Login() {
    return (
        <div className='auth'>
            <h1>
                Login
            </h1>
            <form>
                <input type= "text" placeholder= "Enter your username" />
                <input type= "password" placeholder= "Enter your password" />
                <button>Login</button> 
                <p>This is an error!</p>
                <span>Don't you have any account? <Link to= "/register">Register</Link></span>
            </form>
        </div>
    )
}

export default Login
