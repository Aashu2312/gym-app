import { useNavigate } from "react-router-dom"
import { getPayments } from "../data/payments"
import { Card, Button, Chip, CloseButton } from "@heroui/react"

function MemberDash() {
  const navigate = useNavigate()
  const currentUser = localStorage.getItem("currentUser") || ""
  const payments = getPayments()
  const currentMemberPayment = payments.find((payment) => payment.memberName.toLowerCase() === currentUser.toLowerCase())

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Welcome to GymTrackr</h1>
        <p className="text-gray-500 mb-8">Here's your gym overview.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Membership</h2>
            <div className="flex items-center gap-3 mb-4">
              <Chip color="success">Active</Chip>
              <p>Expires: 30 October 2026</p>
            </div>
            <Button variant="secondary" onPress={() => navigate("/member/membership")}>View Membership</Button>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Payment</h2>
            <p className="mb-2">Monthly payment: ₹1500</p>
            <Chip color={currentMemberPayment?.status === "Paid" ? "success" : "warning"}>{currentMemberPayment?.status ?? "Due"}</Chip>
            <div className="mt-4">
              <Button variant="primary" onPress={() => navigate("/member/payment")}>Make Payment</Button>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Today's Workout</h2>
            <p className="text-gray-500 mb-4">Push Day</p>
            <Button variant="secondary" onPress={() => navigate("/member/workout")}>View Workout</Button>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Diet Plan</h2>
            <p className="text-gray-500 mb-4">View your gym-provided nutrition plan.</p>
            <Button variant="secondary" onPress={() => navigate("/member/diet")}>View Diet Plan</Button>
          </Card>

          <Card className="p-6 md:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Announcements</h2>
            <p className="text-gray-500 mb-4">Stay updated with announcements from your gym.</p>
            <Button variant="secondary" onPress={() => navigate("/member/announcements")}>View Announcements</Button>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default MemberDash