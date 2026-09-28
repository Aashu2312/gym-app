import { Link } from "react-router-dom"

function MemberDash() {
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
      <p>Status: Payment Due</p>
      <Link to="/member/payment">
        Make Payment
      </Link>

      <h2>Today's Workout</h2>
      <Link to="/member/workout">
  View Workout
</Link>
      <p>Push Day</p>

      <h2>Diet</h2>
      <Link to="/member/diet">
  View Diet Plan
</Link>

      <h2>Announcements</h2>
      <Link to="/member/announcements">
  View Announcements
</Link>
      <p>No new announcements</p>
    </div>
  )
}

export default MemberDash