export type Payment = { id: number; memberName: string; memberEmail: string; amount: number; status: "Paid" | "Due"; dueDate: string }

export function getPayments(): Payment[] {
  const storedPayments = localStorage.getItem("payments")
  if (storedPayments) return JSON.parse(storedPayments)
  localStorage.setItem("payments", JSON.stringify([]))
  return []
}

export function savePayments(payments: Payment[]) {
  localStorage.setItem("payments", JSON.stringify(payments))
}

export function getCurrentMemberPayment(): Payment | undefined {
  const currentEmail = localStorage.getItem("currentEmail")
  const currentName = localStorage.getItem("currentUser")
  const payments = getPayments()
  return payments.find((payment) => currentEmail ? payment.memberEmail.toLowerCase() === currentEmail.toLowerCase() : payment.memberName.toLowerCase() === currentName?.toLowerCase())
}