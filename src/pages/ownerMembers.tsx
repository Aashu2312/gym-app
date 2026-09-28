type Member = {
  id: number
  name: string
  membership: string
  paymentStatus: string
}

const members: Member[] = [
  {
    id: 1,
    name: "Yashasvi",
    membership: "Active",
    paymentStatus: "Paid"
  },
  {
    id: 2,
    name: "Aashu",
    membership: "Active",
    paymentStatus: "Due"
  },
  {
    id: 3,
    name: "pavbhatura",
    membership: "Expired",
    paymentStatus: "Due"
  }
]

function OwnerMembers() {
  return (
    <div>
      <h1>Members</h1>

      {members.map((member) => (
        <div key={member.id}>
          <h2>{member.name}</h2>
          <p>Membership: {member.membership}</p>
          <p>Payment: {member.paymentStatus}</p>
        </div>
      ))}
    </div>
  )
}

export default OwnerMembers