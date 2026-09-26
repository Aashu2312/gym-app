type Membership = {
  status: "Active" | "Expired"
  expiryDate: string
  plan: string
}

const membership: Membership = {
  status: "Active",
  expiryDate: "30 October 2026",
  plan: "Monthly"
}

function MemberMembership() {
  return (
    <div>
      <h1>My Membership</h1>

      <p>Plan: {membership.plan}</p>

      <p>Status: {membership.status}</p>

      <p>Expiry Date: {membership.expiryDate}</p>
    </div>
  )
}

export default MemberMembership