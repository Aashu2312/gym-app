import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Card, Button, Chip, CloseButton } from "@heroui/react"
import { getPayments, savePayments } from "../data/payments"

function MemberPayment() {
  const navigate = useNavigate()
  const currentUser = localStorage.getItem("currentUser") || ""
  const currentEmail = localStorage.getItem("currentEmail") || ""

  const [paid, setPaid] = useState(() => {
    const payments = getPayments()
    const currentPayment = payments.find((payment) => currentEmail ? payment.memberEmail?.toLowerCase() === currentEmail.toLowerCase() : payment.memberName.toLowerCase() === currentUser.toLowerCase())
    return currentPayment?.status === "Paid"
  })

  function handlePayment() {
    const payments = getPayments()
    const existingPayment = payments.find((payment) => currentEmail ? payment.memberEmail?.toLowerCase() === currentEmail.toLowerCase() : payment.memberName.toLowerCase() === currentUser.toLowerCase())

    if (existingPayment) {
      const updatedPayments = payments.map((payment) => payment.id === existingPayment.id ? { ...payment, status: "Paid" as const, memberEmail: payment.memberEmail || currentEmail } : payment)
      savePayments(updatedPayments)
    } else {
      const newPayment = { id: Date.now(), memberName: currentUser, memberEmail: currentEmail, amount: 1500, status: "Paid" as const, dueDate: "30 September 2026" }
      savePayments([...payments, newPayment])
    }

    setPaid(true)
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-end mb-4">
          <CloseButton aria-label="Back to dashboard" className="size-8 rounded-full bg-default text-muted hover:bg-default-hover hover:text-foreground active:scale-95" onPress={() => navigate("/member")} />
        </div>

        <div className="mb-8">
          <p className="text-gray-500">Membership</p>
          <h1 className="text-3xl font-bold">Monthly Payment</h1>
          <p className="text-gray-500 mt-2">Manage your gym membership payment.</p>
        </div>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold">September Membership</h2>
              <p className="text-gray-500 mt-1">Due date: 30 September 2026</p>
            </div>
            <Chip color={paid ? "success" : "warning"}>{paid ? "Paid" : "Payment Due"}</Chip>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <p className="text-gray-500">Amount</p>
            <p className="text-3xl font-bold mt-1">₹1,500</p>
          </div>

          {!paid ? (
            <Button variant="primary" className="w-full mt-6" onPress={handlePayment}>Pay ₹1,500</Button>
          ) : (
            <div className="mt-6">
              <p className="text-green-600 font-medium">Payment successful!</p>
              <p className="text-gray-500 text-sm mt-1">Your membership payment has been recorded.</p>
            </div>
          )}
        </Card>
      </div>
    </div>
  )
}

export default MemberPayment