// can change any/all class names for CSS...just placeholder stuff
import '../../css/AllLoginPages.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useState } from 'react'


//NONE OF THIS IS WORKING YET
const StaffLoginPage = ({history}) => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    
    const staffLoginHandler = async (e) => {
        e.preventDefault()

        const config = {
            header: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const { data } = await axios.post('/auth/staffLogin', { email, password }, config)

            localStorage.setItem('staffToken', data.token)

            history.push('/staffHome')
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
            <form onSubmit={staffLoginHandler} className = 'login-screen__form'>
                <h3 className = 'login-screen__title'>Staff Login</h3>
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

export default StaffLoginPage