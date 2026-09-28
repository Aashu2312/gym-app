type Payment = {
  id: number
  memberName: string
  amount: number
  status: "Paid" | "Due"
  dueDate: string
}

const defaultPayments: Payment[] = [
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

export function getPayments(): Payment[] {
  const storedPayments = localStorage.getItem("payments")

  if (storedPayments) {
    return JSON.parse(storedPayments)
  }

  localStorage.setItem(
    "payments",
    JSON.stringify(defaultPayments)
  )

  return defaultPayments
}

export function savePayments(payments: Payment[]) {
  localStorage.setItem(
    "payments",
    JSON.stringify(payments)
  )
}