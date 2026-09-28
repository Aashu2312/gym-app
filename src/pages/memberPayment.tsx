import { useState } from "react"

function MemberPayment() {
  const [paid, setPaid] = useState(false)

  function handlePayment() {
    setPaid(true)
  }

  return (
    <div>
      <h1>Monthly Payment</h1>

      <p>Amount: ₹1500</p>

      <p>
        Status: {paid ? "Paid" : "Payment Due"}
      </p>

      {!paid && (
        <button onClick={handlePayment}>
          Pay Now
        </button>
      )}

      {paid && (
        <p>Payment successful!</p>
      )}
    </div>
  )
}

export default MemberPayment