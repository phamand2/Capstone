import { useState } from 'react'
import '../css/App.css';
import StripeCheckout from 'react-stripe-checkout';

const Checkout = () => {
    const [product, setProduct] = useState({
        name: 'lilies',
        rate: 1.99
    })

    const makePayment = (token, addresses) => {
        const body = {
            token,
            product
        }
        const headers = {
            'Content-Type': 'application/json',
        }
        return fetch(`http://localhost:5000/payment`, {
            method: 'POST',
            headers,
            body: JSON.stringify(body)
        }).then(response => {
            console.log('RESPONSE', response)
            const { status } = response
            console.log('STATUS', status)
        }).catch(error => console.log(error))
    }

    return (
        <div className = 'checkout'>
            <h1>FruveFlow Checkout - Powered by Stripe</h1>
            <h3>some kind of link to/info about Stripe here, maybe</h3>
            {/* {showItem ? <StripeContainer/> : <> <h3} */}

        </div>
        // <StripeCheckout 
        //     stripeKey = 'pk_test_51In4ABCDwFUaylUuuSu1e43AVzMfTkMUQq4wu5sU7iTRpVkTjhQD9JxkVTZiZPKQLH0VOtKfVPgVP6naDlrpDx4Z00SDMXekQC'
        //     amount = {product.rate *100} 
        //     token = {makePayment} 
        //     name = 'FruveFlow Checkout'
        //     // amount = {Number(getCartSubTotal().toFixed(2))*100}
        //     shippingAddress
        //     billingAddress>
        //     <div><button className = 'btn'>Secure Checkout With Stripe</button></div>
        // </StripeCheckout>
    )
}

export default Checkout