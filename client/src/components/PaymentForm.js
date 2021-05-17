import { useState } from 'react'
import '../css/Checkout.css'; 
import axios from 'axios'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'

const PaymentForm = () => {
    const [success, setSuccess] = useState(false)
    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)
        })
  

        if(!error) {
            try {
                const { id } = paymentMethod
                const response = await axios.post('http://localhost:5000/nonmodalpayment', {
                    amount: 2829,
                    id: 
                })

                if(response.data.success) {
                    console.log('your payment went through successfully')
                    setSuccess(true)

                }
            } catch (error) {
                console.log('error: ', error)
            }
        } else {
            console.log(error.message)
        }
    }

    return (
        <>
        {!success ?
        <form onSubmit = {handleSubmit}>
            <fieldset className = 'FormGroup'>
                <div className = 'FormRow'>
                    <CardElement options = {CARD_OPTIONS}/>
                </div>
            </fieldset>
            <button>Pay Securely Through Stripe</button>
        </form>
        
        }
        </>
    )
}

export default PaymentForm