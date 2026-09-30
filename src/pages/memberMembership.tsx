import { Card, Button, Chip } from "@heroui/react"

function MemberMembership() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <p className="text-gray-500">My Gym</p>
          <h1 className="text-3xl font-bold">Membership</h1>
          <p className="text-gray-500 mt-2">View your current gym membership details.</p>
        </div>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-gray-500">Gym</p>
              <h2 className="text-2xl font-semibold">All Time Fitness</h2>
            </div>
            <Chip color="success">Active</Chip>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-sm text-gray-500">Membership Type</p>
              <p className="font-semibold mt-1">Monthly</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Monthly Fee</p>
              <p className="font-semibold mt-1">₹1,500</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Expiry Date</p>
              <p className="font-semibold mt-1">30 October 2026</p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-gray-500 mb-4">Your membership is currently active.</p>
            <Button variant="primary" onPress={() => window.location.href = "/member/payment"}>Manage Payment</Button>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default MemberMembership