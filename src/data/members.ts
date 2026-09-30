export type Member = {
  id: number
  name: string
  membership: "Active" | "Expired"
}

const defaultMembers: Member[] = []

export function getMembers(): Member[] {
  const storedMembers = localStorage.getItem("members")
  if (storedMembers) return JSON.parse(storedMembers)
  localStorage.setItem("members", JSON.stringify(defaultMembers))
  return defaultMembers
}

export function saveMembers(members: Member[]) {
  localStorage.setItem("members", JSON.stringify(members))
}

export function addMember(name: string) {
  const members = getMembers()
  const existingMember = members.find((member) => member.name.toLowerCase() === name.toLowerCase())

  if (!existingMember) {
    const newMember: Member = { id: Date.now(), name, membership: "Active" }
    saveMembers([...members, newMember])
  }
}