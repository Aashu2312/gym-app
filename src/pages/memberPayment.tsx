import { useState } from "react"
import {
  getPayments,
  savePayments
} from "../data/payments"

function MemberPayment() {
  const [paid, setPaid] = useState(false)

  function handlePayment() {
    const payments = getPayments()

    const updatedPayments = payments.map((payment) => {
      if (payment.memberName === "Rahul Sharma") {
        return {
          ...payment,
          status: "Paid"
        }
      }

      return payment
    })

    savePayments(updatedPayments)
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