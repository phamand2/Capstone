// can change any/all class names for CSS...just placeholder stuff
import '../css/AllLoginPages.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const GuestLoginPage = ({history}) => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')


        const guestLoginHandler = async (e) => {
        e.preventDefault()

        const config = {
            header: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const { data } = await axios.post('/auth/customerLogin', {
                email: 'guesttestaccount@guesttestaccount.com', 
                password: 'guesttestaccount123' 
            }, config)

            localStorage.setItem('customerToken', data.token)

            history.push('/')
        } catch (error) {
            setError(error.response.data.error)
            setTimeout(() => {
                setError('')
            }, 5000)
        }
    }

    return (
            <div className = 'login-screen'>
                <form className = 'register-screen__form' onSubmit={guestLoginHandler}>
                <h3 className = 'login-screen__title'>Guest Login</h3>
                {error && <span className='error-message'>{error}</span>}
                {/* <input type = 'hidden' name = 'email' value = ''/>
                <input type = 'hidden' name = 'password' value = ''/> */}
                <button type = 'submit' className = 'btn btn-primary' >Login As Guest</button>
                <span className='login-screen__subtext'>Want to make an account instead? <Link to='/auth/customer-register'>Register</Link></span>
            </form>
                <br/>
            </div>
    )
}

export default GuestLoginPage