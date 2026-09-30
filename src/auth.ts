export type MemberAccount = { name: string; email: string; password: string }

export const ownerAccount = { email: "pavbhatura@gmail.com", password: "horse123" }

export function getMemberAccounts(): MemberAccount[] {
  const storedAccounts = localStorage.getItem("memberAccounts")
  return storedAccounts ? JSON.parse(storedAccounts) : []
}

export function signupMember(name: string, email: string, password: string) {
  const accounts = getMemberAccounts()
  const existingAccount = accounts.find((account) => account.email.toLowerCase() === email.toLowerCase())

  if (existingAccount) return false

  const newAccount = { name: name.trim(), email: email.trim(), password }
  localStorage.setItem("memberAccounts", JSON.stringify([...accounts, newAccount]))
  return true
}

export function login(email: string, password: string, role: "member" | "owner") {
  if (role === "owner") {
    if (email.toLowerCase() !== ownerAccount.email || password !== ownerAccount.password) return false

    localStorage.setItem("isAuthenticated", "true")
    localStorage.setItem("currentRole", "owner")
    localStorage.setItem("currentUser", "Gym Owner")
    return true
  }

  const member = getMemberAccounts().find((account) => account.email.toLowerCase() === email.toLowerCase() && account.password === password)

  if (!member) return false

  localStorage.setItem("isAuthenticated", "true")
  localStorage.setItem("currentRole", "member")
  localStorage.setItem("currentUser", member.name)
  localStorage.setItem("currentEmail", member.email)
  return true
}

export function logout() {
  localStorage.removeItem("isAuthenticated")
  localStorage.removeItem("currentRole")
  localStorage.removeItem("currentUser")
  localStorage.removeItem("currentEmail")
}