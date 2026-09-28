import LoginPage from "./pages/loginPage"
import MemberDash from "./pages/memberDash"
import MemberMembership from "./pages/memberMembership"
import MemberPayment from "./pages/memberPayment"
import MemberWorkout from "./pages/memberWorkout"
import MemberDiet from "./pages/memberDiet"
import MemberAnnouncements from "./pages/memberAnnouncements"
import OwnerDash from "./pages/ownerDash"
import OwnerMembers from "./pages/ownerMembers"
import OwnerPayments from "./pages/ownerPayments"
import OwnerAnnouncement from "./pages/ownerAnnouncements"



import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>GymTrackr Home</h1>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/member" element={<MemberDash />} />
        <Route path="/member/membership" element={<MemberMembership />} />
        <Route path="/member/payment" element={<MemberPayment />} />
        <Route path="/member/workout" element={<MemberWorkout />} />
        <Route path ="/member/diet" element={<MemberDiet/>}/>
        <Route path ="/member/announcements" element={<MemberAnnouncements/>}/>
        <Route path="/owner" element={<OwnerDash />} />
        <Route path="/owner/members" element={<OwnerMembers />} />
        <Route path="/owner/payments" element={<OwnerPayments />} />
        <Route path="/owner/announcements" element={<OwnerAnnouncement />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App