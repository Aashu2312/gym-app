import { getPayments } from "../data/payments"

type Member = {
  id: number
  name: string
  membership: string
}

const members: Member[] = [
  {
    id: 1,
    name: "Rahul Sharma",
    membership: "Active"
  },
  {
    id: 2,
    name: "Aman Verma",
    membership: "Active"
  },
  {
    id: 3,
    name: "Priya Singh",
    membership: "Expired"
  }
]

function OwnerMembers() {
  const payments = getPayments()

  return (
    <div>
      <h1>Members</h1>

      {members.map((member) => (
        <div key={member.id}>
          <h2>{member.name}</h2>
          <p>Membership: {member.membership}</p>
          <p>Payment: {payments.find((payment) => payment.memberName === member.name)?.status ?? "Due"}</p>
        </div>
      ))}
    </div>
  )
}

export default OwnerMembers