import { useState } from "react"
import { useNavigate } from "react-router-dom"

function LoginPage() {
  const [name, setName] = useState("")
  const [role, setRole] = useState("")
  const navigate = useNavigate()

 function handleLogin() {
  if (name === "" || role === "") {
    alert("Please enter your name and select a role")
    return
  }

  if (role === "member") {
    navigate("/member")
  }

  if (role === "owner") {
    navigate("/owner")
  }
}

  return (
    <div>
      <h1>GymTrackr Login</h1>

   <input
  type="text"
  placeholder="Enter your name"
  value={name}
  onChange={(event) => setName(event.target.value)}
/>

      <select
        value={role}
        onChange={(event) => setRole(event.target.value)}
      >
        <option value="">Select Role</option>
        <option value="member">Member</option>
        <option value="owner">Owner</option>
      </select>

      <button onClick={handleLogin}>
        Login
      </button>

      <p>Selected role: {role}</p>
    </div>
  )
}

export default LoginPage