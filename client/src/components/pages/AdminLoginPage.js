// can change any/all class names for CSS...just placeholder stuff
import '../css/AllLoginPages.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'


const AdminLoginPage = ({history}) => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    // This below redirects users to the home page if they're already logged in
    // Not using it right now b/c it makes testing annoying
    
    // useEffect(() => {
    //     if(localStorage.getItem('customerToken') || localStorage.getItem('adminToken') || localStorage.getItem('staffToken')) {
    //         history.push('/')
    //     }
    // }, [history])

    
    const adminLoginHandler = async (e) => {
        e.preventDefault()

        const config = {
            header: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const { data } = await axios.post('/auth/adminLogin', { email, password }, config)

            localStorage.setItem('adminToken', data.token)

            history.push('/')
        } catch (error) {
            setError(error.response.data.error)
            setTimeout(() => {
                setError('')
            }, 5000)
        }
    }

    return (
        <div className='login'>
            <div className = 'login-screen'>
            <form onSubmit={adminLoginHandler} className = 'login-screen__form'>
                <h3 className = 'login-screen__title'>Admin Login</h3>
                {error && <span className='error-message'>{error}</span>}
                <div className = 'form-group'>
                    <label htmlFor = 'email'>Email:</label>
                    <input type='email' required id='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} tabIndex = {1}/>
                </div>
                <div className = 'form-group'>
                    <label htmlFor = 'password'>Password:&nbsp;&nbsp;  
                            <Link to = '/auth/forgotpassword' className = 'login-screen__forgotpassword'
                                tabIndex = {4}>Forgot Password?</Link></label>
                    <input type='password' required id='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} tabIndex = {2}/>
                </div>

                <button type = 'submit' className = 'btn btn-primary' tabIndex = {3}>Log In</button>

                <span className='login-screen__subtext'>Don't have an account? Please ask your manager.</span>
            </form>
            </div>
        </div>
    )
}

export default AdminLoginPage