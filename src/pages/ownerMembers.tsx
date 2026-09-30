import { getPayments } from "../data/payments"
import { Card, Chip } from "@heroui/react"

function OwnerMembers() {
  const payments = getPayments()
  const currentUser = localStorage.getItem("currentUser") || "Unknown Member"
  const paymentStatus = payments.find((payment) => payment.memberName === currentUser)?.status ?? "Due"

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <p className="text-gray-500">Gym Management</p>
          <h1 className="text-3xl font-bold">Members</h1>
          <p className="text-gray-500 mt-2">View your gym members and their payment status.</p>
        </div>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-xl font-semibold">{currentUser}</h2>
              <p className="text-gray-500 text-sm mt-1">Gym Member</p>
            </div>
            <Chip color="success">Active</Chip>
          </div>

          <div className="pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-2">Monthly Payment</p>
            <Chip color={paymentStatus === "Paid" ? "success" : "warning"}>{paymentStatus}</Chip>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default OwnerMembers