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
import type { Announcement } from "../types/announcement"


import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from 'react'
import './App.css'

type Exercise = {
  id: number
  name: string
  sets: number
  reps: number
  rest: number
}

type Workout = {
  id: number
  day: string
  name:string
  exercises: Exercise[]
}
const workout: Workout = {
  id: 1,
  day:"Monday",
  name:"Push Day",
  exercises:[
     {
    id:1,
    name: "Benchpress",
    sets: 3,
    reps: 10,
    rest: 30
  },
  {
    id:2,
    name: "Incline Dumbbell Press",
    sets: 3,
    reps: 10,
    rest: 30
  },
  {
    id:3,
    name: "Tricep Pushdown",
    sets: 3,
    reps: 10,
    rest: 30
  }
  ]
  
};

type ExerciseRowProps = {
  id: number
  name: string
  sets: number
  reps: number
  rest: number
  completed: boolean
  onComplete: (id: number) => void
}

type WorkoutCardProps = {
  workout : Workout
}

function ExerciseRow({
  id,
  name,
  sets,
  reps,
  rest,
  completed,
  onComplete
}: ExerciseRowProps) {

  return (
    <div>
      <h4>{name}</h4>

      <p>
        {sets} X {reps}
      </p>

      <p>{rest} Seconds</p>

      <p>
        {completed ? "Completed" : "Not Completed"}
      </p>

      <button onClick={() => onComplete(id)}>
        {completed ? "Completed" : "Not Completed"}
      </button>
    </div>
  )
}

function WorkoutCard({ workout }: WorkoutCardProps) {
  const [completedExercises, setCompletedExercises] = useState<number[]>([])

function handleComplete(id: number) {
  if (completedExercises.includes(id)) {
    setCompletedExercises(
      completedExercises.filter((exerciseId) => exerciseId !== id)
    )
  } else {
    setCompletedExercises([...completedExercises, id])
  }
}

  return (
    <div>
      <h2>{workout.day}</h2>
      <h3>{workout.name}</h3>

      <p>
        Progress: {completedExercises.length} / {workout.exercises.length}
      </p>

    {workout.exercises.map((exercise) => (
  <ExerciseRow
    key={exercise.id}
    id={exercise.id}
    name={exercise.name}
    sets={exercise.sets}
    reps={exercise.reps}
    rest={exercise.rest}
    completed={completedExercises.includes(exercise.id)}
    onComplete={handleComplete}
  />
))}
    </div>
  )
}

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