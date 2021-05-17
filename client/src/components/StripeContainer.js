import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

const stripeTestPromise = loadStripe('pk_test_51In4ABCDwFUaylUuuSu1e43AVzMfTkMUQq4wu5sU7iTRpVkTjhQD9JxkVTZiZPKQLH0VOtKfVPgVP6naDlrpDx4Z00SDMXekQC')

const StripeContainer = () => {
  return (
      <div>
          <Elements stripe = {stripeTestPromise}>
              <PaymentForm />
          </Elements>
      </div>
  )
}


export default StripeContainer
