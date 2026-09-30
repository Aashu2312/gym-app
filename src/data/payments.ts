export type Payment = {
  id: number
  memberName: string
  amount: number
  status: "Paid" | "Due"
  dueDate: string
}

export function getPayments(): Payment[] {
  const storedPayments = localStorage.getItem("payments")

  if (storedPayments) {
    return JSON.parse(storedPayments)
  }

  localStorage.setItem("payments", JSON.stringify([]))
  return []
}

export function savePayments(payments: Payment[]) {
  localStorage.setItem("payments", JSON.stringify(payments))
}