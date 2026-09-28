import { getPayments } from "../data/payments"

function OwnerPayments() {
  const payments = getPayments()

  return (
    <div>
      <h1>Payments</h1>

      {payments.map((payment) => (
        <div key={payment.id}>
          <h2>{payment.memberName}</h2>

          <p>Amount: ₹{payment.amount}</p>

          <p>Status: {payment.status}</p>

          <p>Due Date: {payment.dueDate}</p>
        </div>
      ))}
    </div>
  )
}

export default OwnerPayments