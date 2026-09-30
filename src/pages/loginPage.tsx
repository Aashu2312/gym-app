import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button, Form, Input, Label, ListBox, Select, TextField } from "@heroui/react"
import { addMember } from "../data/members"
import { login, signupMember } from "../auth"

function LoginPage() {
  const [mode, setMode] = useState<"login" | "signup">("login")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("")
  const navigate = useNavigate()

  function handleSubmit() {
    if (mode === "signup") {
      if (!name.trim() || !email.trim() || !password) {
        alert("Please enter your name, email and password")
        return
      }

      if (signupMember(name, email, password)) {
        addMember(name.trim())
        alert("Member account created successfully! You can now log in.")
        setMode("login")
        setPassword("")
      } else {
        alert("An account with this email already exists")
      }

      return
    }

    if (!email.trim() || !password || !role) {
      alert("Please enter your email, password and select a role")
      return
    }

    const authenticated = login(email.trim(), password, role as "member" | "owner")

    if (!authenticated) {
      alert("Invalid email or password")
      return
    }

    navigate(role === "member" ? "/member" : "/owner")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Form className="w-full max-w-md flex flex-col gap-6 rounded-2xl bg-white p-8 shadow-lg" onSubmit={(event) => { event.preventDefault(); handleSubmit() }}>
        <div className="text-center">
          <h1 className="text-3xl font-bold">GymTrackr</h1>
          <p className="text-gray-500 mt-2">{mode === "login" ? "Manage your gym, your way." : "Create your GymTrackr member account."}</p>
        </div>

        {mode === "signup" && (
          <TextField isRequired name="name">
            <Label>Name</Label>
            <Input placeholder="Enter your name" value={name} onChange={(event) => setName(event.target.value)} />
          </TextField>
        )}

        <TextField isRequired name="email">
          <Label>Email</Label>
          <Input type="email" placeholder="Enter your email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </TextField>

        <TextField isRequired name="password">
          <Label>Password</Label>
          <Input type="password" placeholder="Enter your password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </TextField>

        {mode === "login" && (
          <Select name="role" placeholder="Select your role" value={role || null} onChange={(value) => setRole(value as string)}>
            <Label>Role</Label>
            <Select.Trigger><Select.Value /><Select.Indicator /></Select.Trigger>
            <Select.Popover>
              <ListBox>
                <ListBox.Item id="member" textValue="Member">Member<ListBox.ItemIndicator /></ListBox.Item>
                <ListBox.Item id="owner" textValue="Owner">Owner<ListBox.ItemIndicator /></ListBox.Item>
              </ListBox>
            </Select.Popover>
          </Select>
        )}

        <Button type="submit" variant="primary" className="w-full">{mode === "login" ? "Login" : "Create Member Account"}</Button>

        <Button type="button" variant="secondary" className="w-full" onPress={() => { setMode(mode === "login" ? "signup" : "login"); setPassword(""); setRole("") }}>
          {mode === "login" ? "Create a Member Account" : "Back to Login"}
        </Button>

     
      </Form>
    </div>
  )
}

export default LoginPage