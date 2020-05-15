import React from "react"
import { loadStripe } from "@stripe/stripe-js"

const buttonStyles = {
  fontSize: '14px',
  textAlign: 'center',
  color: '#fff',
  outline: 'none',
  padding: '6px 4px',
  height: '60px',
  width: '135px',
  boxShadow: '2px 5px 10px rgba(0,0,0,.1)',
  backgroundColor: '#25303b',
  borderRadius: '8px',
  letterSpacing: '1.5px',
  lineHeight: '1.5'
}

const stripePromise = loadStripe(process.env.STRIPE_KEY)

const redirectToCheckout = async event => {
  event.preventDefault()
  const stripe = await stripePromise
  const { error } = await stripe.redirectToCheckout({
    items: [{ sku: process.env.SKU, quantity: 1 }],
    successUrl: `http://localhost:8000/page-2/`,
    cancelUrl: `http://localhost:8000/`,
  })
  if (error) {
    console.warn("Error:", error)
  }
  else {
    console.log('Transaction processed successfully')
  }
}

class Checkout extends React.Component {
  render() {
    return (
      <button style={buttonStyles} onClick={redirectToCheckout}>
        <strong>Buy Kyle Coffee</strong>
      </button>
    )
  }
}

export default Checkout