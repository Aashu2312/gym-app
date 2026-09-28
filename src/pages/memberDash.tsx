import { Link } from "react-router-dom"
import { getPayments } from "../data/payments"

function MemberDash() {
  const payments = getPayments()

  const currentMemberPayment = payments.find(
    (payment) => payment.memberName === "Rahul Sharma"
  )

  return (
    <div>
      <h1>Welcome to GymTrackr</h1>

      <h2>Membership</h2>
      <p>Status: Active</p>
      <p>Expires: 30 October 2026</p>

      <Link to="/member/membership">
        View Membership
      </Link>

      <h2>Payment</h2>
      <p>Monthly payment: ₹1500</p>

      <p>
        Status: {currentMemberPayment?.status}
      </p>

      <Link to="/member/payment">
        Make Payment
      </Link>

      <h2>Today's Workout</h2>

      <p>Push Day</p>

      <Link to="/member/workout">
        View Workout
      </Link>

      <h2>Diet</h2>

      <Link to="/member/diet">
        View Diet Plan
      </Link>

      <h2>Announcements</h2>

      <p>No new announcements</p>

      <Link to="/member/announcements">
        View Announcements
      </Link>
    </div>
  )
}

export default MemberDash