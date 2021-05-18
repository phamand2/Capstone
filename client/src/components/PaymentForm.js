import { useState } from 'react'
import { connect } from 'react-redux'
import './css/Checkout.css'; 
import * as actionCreators from '../stores/creators/actionCreators'
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


const PaymentForm = (props) => {
    const [success, setSuccess] = useState(false)
    const [OrderConformation] = useState(Math.random().toString(36).substr(2, 8));
    const stripe = useStripe()
    const elements = useElements()
    const cart = props.cart 
    const subtotal = cart.reduce((prev, current) => {
        return prev + current.subtotal
    }, 0)

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
                    amount: {subtotal} * 100,
                    id 
                })

                if(response.data.success) {
                    console.log('your payment went through successfully')
                    setSuccess(true)
                    props.OrderConformation()
                    
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
            
            <button>Place Your Order: ${subtotal.toFixed(2)}</button>
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


const mapDispatchToProps = (dispatch) => {
    return {
        OrderConformation: (OrderConformation) => dispatch(actionCreators.OrderConformation(OrderConformation)),
    }
  }
  

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps)(PaymentForm)