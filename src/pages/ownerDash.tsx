import { Link } from "react-router-dom"
import { Card, Button } from "@heroui/react"

function OwnerDash() {
return (
  <div className="min-h-screen bg-gray-50 p-6">
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">GymTrackr Owner Dashboard</h1>
      <p className="text-gray-500 mb-8">Manage your gym and members.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Members</h2>
          <p className="text-gray-500 mb-5">Manage your gym members.</p>
          <Button variant="secondary" onPress={() => window.location.href = "/owner/members"}>View Members</Button>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Payments</h2>
          <p className="text-gray-500 mb-5">View member payment status.</p>
          <Button variant="secondary" onPress={() => window.location.href = "/owner/payments"}>View Payments</Button>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Announcements</h2>
          <p className="text-gray-500 mb-5">Create announcements for your members.</p>
          <Button variant="primary" onPress={() => window.location.href = "/owner/announcements"}>Manage Announcements</Button>
        </Card>
      </div>
    </div>
  </div>
)
}

export default OwnerDash