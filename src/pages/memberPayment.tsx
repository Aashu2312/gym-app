import { useState } from "react"
import {
  getPayments,
  savePayments
} from "../data/payments"

function MemberPayment() {
  const [paid, setPaid] = useState(() => {
  const payments = getPayments()

  const currentPayment = payments.find(
    (payment) => payment.memberName === "Rahul Sharma"
  )

  return currentPayment?.status === "Paid"
})

  function handlePayment() {
    const payments = getPayments()

    const updatedPayments = payments.map((payment) => {
      if (payment.memberName === "Rahul Sharma") {
        return {
          ...payment,
          status: "Paid" as const
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