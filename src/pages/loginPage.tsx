import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button, Form, Input, Label, ListBox, Select, TextField } from "@heroui/react"

function LoginPage() {
  const [name, setName] = useState("")
  const [role, setRole] = useState("")
  const navigate = useNavigate()

  function handleLogin() {
    if (name.trim() === "" || role === "") {
      alert("Please enter your name and select a role")
      return
    }

    localStorage.setItem("currentUser", name.trim())
    localStorage.setItem("currentRole", role)

    if (role === "member") {
      navigate("/member")
    }

    if (role === "owner") {
      navigate("/owner")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Form className="w-full max-w-md flex flex-col gap-6 rounded-2xl bg-white p-8 shadow-lg" onSubmit={(event) => { event.preventDefault(); handleLogin() }}>
        <div className="text-center">
          <h1 className="text-3xl font-bold">GymTrackr</h1>
          <p className="text-gray-500 mt-2">Manage your gym, your way.</p>
        </div>

        <TextField isRequired name="name">
          <Label>Name</Label>
          <Input placeholder="Enter your name" value={name} onChange={(event) => setName(event.target.value)} />
        </TextField>

        <Select name="role" placeholder="Select your role" value={role || null} onChange={(value) => setRole(value as string)}>
          <Label>Role</Label>
          <Select.Trigger>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              <ListBox.Item id="member" textValue="Member">Member<ListBox.ItemIndicator /></ListBox.Item>
              <ListBox.Item id="owner" textValue="Owner">Owner<ListBox.ItemIndicator /></ListBox.Item>
            </ListBox>
          </Select.Popover>
        </Select>

        <Button type="submit" variant="primary" className="w-full">Login</Button>
      </Form>
    </div>
  )
}

export default LoginPage