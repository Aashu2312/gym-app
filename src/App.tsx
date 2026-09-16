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
  onComplete: (id: number) => void
}

type WorkoutCardProps = {
  workout : Workout
}

function ExerciseRow({id, name, sets, reps, rest, onComplete}: ExerciseRowProps){
  const[completed, setCompleted] = useState(false)
  return(
    <div>
      <h4>{name}</h4>
      <p>{sets} X {reps}</p>
      <p>{rest} Seconds </p> 
      <p>{completed ? "Completed":"Not Completed"}</p>
      <button onClick={() => {setCompleted(true);onComplete(id)}}>Completed</button>

    </div>
  )
}

function WorkoutCard({ workout }: WorkoutCardProps){
  function handleComplete(id:number){
    console.log(id)
  }
  return(
    <div>
      <h2>{workout.day}</h2>
      <h3>{workout.name}</h3>
      {workout.exercises.map((exercise) =>

      <ExerciseRow 
      id={exercise.id}
      name={exercise.name}
      sets={exercise.sets}
      reps={exercise.reps}
      rest={exercise.rest}
      onComplete= {handleComplete}
      />
      
      
     )}

    </div>
  )
}

function App() {
  return(
    <div>
      <h1>GymTrackr</h1>

      <WorkoutCard workout={workout} />

    </div>

  )
 
}

export default App