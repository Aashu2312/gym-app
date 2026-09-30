import { useNavigate } from "react-router-dom"
import { getMembers } from "../data/members"
import { getPayments } from "../data/payments"
import { Card, Chip, CloseButton } from "@heroui/react"

function OwnerMembers() {
  const navigate = useNavigate()
  const members = getMembers()
  const payments = getPayments()

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-end mb-4">
          <CloseButton aria-label="Back to dashboard" className="size-8 rounded-full bg-default text-muted hover:bg-default-hover hover:text-foreground active:scale-95" onPress={() => navigate("/owner")} />
        </div>

        <div className="mb-8">
          <p className="text-gray-500">Gym Management</p>
          <h1 className="text-3xl font-bold">Members</h1>
          <p className="text-gray-500 mt-2">View your gym members and their payment status.</p>
        </div>

        {members.length === 0 ? (
          <Card className="p-6">
            <p className="text-gray-500">No members have registered yet.</p>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {members.map((member) => {
              const paymentStatus = payments.find((payment) => payment.memberName.toLowerCase() === member.name.toLowerCase())?.status ?? "Due"

              return (
                <Card key={member.id} className="p-6">
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <h2 className="text-xl font-semibold">{member.name}</h2>
                      <p className="text-gray-500 text-sm mt-1">Member ID: {member.id}</p>
                    </div>
                    <Chip color={member.membership === "Active" ? "success" : "danger"}>{member.membership}</Chip>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-500 mb-2">Monthly Payment</p>
                    <Chip color={paymentStatus === "Paid" ? "success" : "warning"}>{paymentStatus}</Chip>
                  </div>
                </Card>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default OwnerMembers