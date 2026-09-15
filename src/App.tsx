import { useState } from 'react'
import './App.css'


const exercises = [
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
  return(
    <div>
      <h3>{name}</h3>
      <p>{sets}</p>
    </div>
  )
}

function WorkoutCard(){
  return(
    <div>
      <h2>Today's Workout</h2>
      <p>Push Day</p>
      {exercises.map((exercises =>
      <ExerciseRow 
      key={exercises.id}
      name={exercises.name}
      sets={exercises.sets}
      />
     ))}
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
