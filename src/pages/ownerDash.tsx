import { Link } from "react-router-dom"

function OwnerDash() {
  return (
    <div>
      <h1>GymTrackr Owner Dashboard</h1>

      <h2>Members</h2>
      <p>Manage your gym members.</p>
      <Link to="/owner/members">
        View Members
      </Link>

      <h2>Payments</h2>
      <p>View member payment status.</p>
      <Link to="/owner/payments">
        View Payments
      </Link>

      <h2>Announcements</h2>
      <p>Create announcements for your members.</p>
      <Link to="/owner/announcements">
        Manage Announcements
      </Link>
    </div>
  )
}

export default OwnerDash