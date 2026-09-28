type Payment = {
  id: number
  memberName: string
  amount: number
  status: "Paid" | "Due"
  dueDate: string
}

const payments: Payment[] = [
  {
    id: 1,
    memberName: "Rahul Sharma",
    amount: 1500,
    status: "Paid",
    dueDate: "30 September 2026"
  },
  {
    id: 2,
    memberName: "Aman Verma",
    amount: 1500,
    status: "Due",
    dueDate: "30 September 2026"
  },
  {
    id: 3,
    memberName: "Priya Singh",
    amount: 1500,
    status: "Due",
    dueDate: "25 September 2026"
  }
]

function OwnerPayments() {
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