import { useState } from 'react'
import './css/Checkout.css'; 
import axios from 'axios'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'

const CARD_OPTIONS = {
    iconStyle: 'solid',
    style: {
        base: {
            iconColor: '#c4f0ff',
            color: '#fff',
            fontWeight: 500,
            fontFamily: 'Roboto, OpenSans, Segoe UI, sans-serif',
            fontSize: '16px',
            fontSmoothing: 'antialiased',
            ':-webkit-autofill': { color: '#fce883'},
            '::placeholder': { color: '#87bbfd' }
        },
        invalid: {
            iconColor: '#ffc7ee',
            color: '#ff0000'
        }
    }
}


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
                    id 
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
            <button>Place Your Order</button>
        </form>
        :
        <div>
            <h2>Thank you for your purchase!<br/>
            Your items will be selected for maximum freshness and delivered to you within 24 hours.<br/>
            Please print this page for your receipt.</h2>
        </div>
        }
        </>
    )
}

export default PaymentForm