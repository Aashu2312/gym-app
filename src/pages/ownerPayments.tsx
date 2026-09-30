import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Card, Chip, Button, CloseButton } from "@heroui/react"
import { getPayments, savePayments } from "../data/payments"

function OwnerPayments() {
  const navigate = useNavigate()
  const [payments, setPayments] = useState(getPayments())

  function markAsPaid(id: number) {
    const updatedPayments = payments.map((payment) => payment.id === id ? { ...payment, status: "Paid" as const } : payment)
    savePayments(updatedPayments)
    setPayments(updatedPayments)
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-end mb-4">
          <CloseButton aria-label="Back to dashboard" className="size-8 rounded-full bg-default text-muted hover:bg-default-hover hover:text-foreground active:scale-95" onPress={() => navigate("/owner")} />
        </div>

        <div className="mb-8">
          <p className="text-gray-500">Gym Management</p>
          <h1 className="text-3xl font-bold">Payments</h1>
          <p className="text-gray-500 mt-2">View and manage member payment status.</p>
        </div>

        {payments.length === 0 ? (
          <Card className="p-6">
            <p className="text-gray-500">No payment records available.</p>
          </Card>
        ) : (
          <div className="flex flex-col gap-5">
            {payments.map((payment) => (
              <Card key={payment.id} className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                  <div>
                    <h2 className="text-xl font-semibold">{payment.memberName}</h2>
                    <p className="text-gray-500 mt-1">Monthly Membership</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Amount</p>
                    <p className="font-semibold">₹{payment.amount}</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Due Date</p>
                    <p className="font-semibold">{payment.dueDate}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <Chip color={payment.status === "Paid" ? "success" : "warning"}>{payment.status}</Chip>

                    {payment.status === "Due" && (
                      <Button variant="primary" onPress={() => markAsPaid(payment.id)}>Mark as Paid</Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default OwnerPayments