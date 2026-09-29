import { useEffect, useState } from "react"

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
  name: string
  exercises: Exercise[]
}

type ApiExercise = {
  id: number
  muscles: { name: string; name_en: string }[]
  muscles_secondary: { name: string; name_en: string }[]
  equipment: { id: number; name: string }[]
  images: { image: string; is_main: boolean }[]
  translations: { name: string; language: number; description: string }[]
}

const workout: Workout = {
  id: 1,
  day: "Monday",
  name: "Push Day",
  exercises: [
    { id: 1, name: "Benchpress", sets: 3, reps: 10, rest: 30 },
    { id: 2, name: "Incline Dumbbell Press", sets: 3, reps: 10, rest: 30 },
    { id: 3, name: "Tricep Pushdown", sets: 3, reps: 10, rest: 30 }
  ]
}

type ExerciseRowProps = {
  id: number
  name: string
  sets: number
  reps: number
  rest: number
  completed: boolean
  apiInfo?: ApiExercise
  onComplete: (id: number) => void
}

function ExerciseRow({ apiInfo, id, name, sets, reps, rest, completed, onComplete }: ExerciseRowProps) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{sets} × {reps}</p>
      <p>Rest: {rest} seconds</p>
      {apiInfo && <p>Equipment: {apiInfo.equipment.map((item) => item.name).join(", ") || "None"}</p>}
      {apiInfo && <p>Muscles: {apiInfo.muscles.map((muscle) => muscle.name_en || muscle.name).join(", ")}</p>}
      <p>{completed ? "Completed" : "Not Completed"}</p>
      <button onClick={() => onComplete(id)}>{completed ? "Mark as Not Completed" : "Mark as Completed"}</button>
    </div>
  )
}

function MemberWorkout() {
  const [completedExercises, setCompletedExercises] = useState<number[]>([])
  const [apiExercises, setApiExercises] = useState<ApiExercise[]>([])

  useEffect(() => { fetch("https://wger.de/api/v2/exerciseinfo/?limit=1000").then((response) => response.json()).then((data) => setApiExercises(data.results)).catch((error) => console.error("Wger API error:", error)) }, [])

  function handleComplete(id: number) {
    if (completedExercises.includes(id)) {
      setCompletedExercises(completedExercises.filter((exerciseId) => exerciseId !== id))
    } else {
      setCompletedExercises([...completedExercises, id])
    }
  }

  return (
    <div>
      <h1>My Workout</h1>
      <h2>{workout.day}</h2>
      <h3>{workout.name}</h3>
      <p>Progress: {completedExercises.length} / {workout.exercises.length}</p>

      {workout.exercises.map((exercise) => (
<ExerciseRow key={exercise.id} id={exercise.id} name={exercise.name} sets={exercise.sets} reps={exercise.reps} rest={exercise.rest} completed={completedExercises.includes(exercise.id)} onComplete={handleComplete} />      ))}

 <h3>API Exercises</h3>
{apiExercises.slice(0, 300).map((exercise) => <p key={exercise.id}>{exercise.id}: {exercise.translations.map((translation) => translation.name).join(" | ")}</p>)}
 </div>
  )
}

export default MemberWorkout