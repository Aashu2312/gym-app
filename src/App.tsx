import { useState } from 'react'
import './App.css'


type Exercise = {
  id: number
  name: string
  sets: string
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
    sets: "3X10"
  },
  {
    id:2,
    name: "Incline Dumbbell Press",
    sets: "3X12"
  },
  {
    id:3,
    name: "Tricep Pushdown",
    sets: "3X12"
  }
  ]
  
}

const exercises: Exercise[] = [
  {
    id:1,
    name: "Benchpress",
    sets: "3X10"
  },
  {
    id:2,
    name: "Incline Dumbbell Press",
    sets: "3X12"
  },
  {
    id:3,
    name: "Tricep Pushdown",
    sets: "3X12"
  }
]


type ExerciseRowProps = {
  name: string
  sets: string
}


function ExerciseRow({name, sets}: ExerciseRowProps){
  const[completed, setCompleted] = useState(false)
  return(
    <div>
      <h3>{name}</h3>
      <p>{sets}</p>
      <p>{completed ? "Completed":"Not Completed"}</p>
      <button onClick={() => setCompleted(true)}>Completed</button>

    </div>
  )
}


function WorkoutCard(){
  return(
    <div>
      <h2>Today's Workout</h2>
      <p>Push Day</p>
      {workout.exercises.map((exercise) =>

      <ExerciseRow 
      key={exercise.id}
      name={exercise.name}
      sets={exercise.sets}
      />
      
      
     )}

    </div>
  )
}


function App() {
  return(
    <div>
      <h1>GymTrackr</h1>
      <p>welcome to the home page</p>

      <WorkoutCard />

    </div>

  )
 
}


export default App
