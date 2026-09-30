import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Card, Button, Chip, Select, Label, ListBox, CloseButton } from "@heroui/react"

type Exercise = { id: number; name: string; sets: number; reps: number; rest: number; apiId?: number }
type Workout = { id: number; day: string; name: string; exercises: Exercise[] }

type ApiExercise = {
  id: number
  muscles: { name: string; name_en: string }[]
  muscles_secondary: { name: string; name_en: string }[]
  equipment: { id: number; name: string }[]
  images: { image: string; is_main: boolean }[]
  translations: { name: string; language: number; description: string }[]
}

const workouts: Workout[] = [
  { id: 1, day: "Monday", name: "Push Day", exercises: [
    { id: 1, name: "Bench Press", sets: 3, reps: 10, rest: 60, apiId: 73 },
    { id: 2, name: "Dumbbell Bench Press", sets: 3, reps: 10, rest: 60, apiId: 75 },
    { id: 3, name: "Arnold Press", sets: 3, reps: 10, rest: 60, apiId: 20 },
    { id: 4, name: "Barbell Triceps Extension", sets: 3, reps: 12, rest: 45, apiId: 50 }
  ]},
  { id: 2, day: "Tuesday", name: "Pull Day", exercises: [
    { id: 5, name: "Bent Over Dumbbell Row", sets: 3, reps: 10, rest: 60, apiId: 81 },
    { id: 6, name: "Bent Over Rowing", sets: 3, reps: 10, rest: 60, apiId: 83 },
    { id: 7, name: "Barbell Biceps Curl", sets: 3, reps: 12, rest: 45, apiId: 91 },
    { id: 8, name: "Face Pulls", sets: 3, reps: 15, rest: 45, apiId: 222 }
  ]},
  { id: 3, day: "Wednesday", name: "Leg Day", exercises: [
    { id: 9, name: "Goblet Squat", sets: 3, reps: 12, rest: 60, apiId: 203 },
    { id: 10, name: "Barbell Hack Squat", sets: 3, reps: 10, rest: 60, apiId: 43 },
    { id: 11, name: "Barbell Lunges", sets: 3, reps: 10, rest: 60, apiId: 46 },
    { id: 12, name: "Calf Press", sets: 4, reps: 15, rest: 45, apiId: 146 }
  ]},
  { id: 4, day: "Thursday", name: "Upper Body", exercises: [
    { id: 13, name: "Decline Bench Press", sets: 3, reps: 10, rest: 60, apiId: 185 },
    { id: 14, name: "Dumbbell Decline Bench Press", sets: 3, reps: 10, rest: 60, apiId: 186 },
    { id: 15, name: "Dumbbell Biceps Curl", sets: 3, reps: 12, rest: 45, apiId: 92 },
    { id: 16, name: "Dumbbell Triceps Extension", sets: 3, reps: 12, rest: 45, apiId: 211 }
  ]},
  { id: 5, day: "Friday", name: "Shoulders & Arms", exercises: [
    { id: 17, name: "Arnold Press", sets: 3, reps: 10, rest: 60, apiId: 20 },
    { id: 18, name: "Lateral Raises", sets: 3, reps: 15, rest: 45, apiId: 348 },
    { id: 19, name: "Dumbbell Biceps Curl", sets: 3, reps: 12, rest: 45, apiId: 92 },
    { id: 20, name: "Dumbbell Triceps Extension", sets: 3, reps: 12, rest: 45, apiId: 211 }
  ]},
  { id: 6, day: "Saturday", name: "Legs & Core", exercises: [
    { id: 21, name: "Goblet Squat", sets: 3, reps: 12, rest: 60, apiId: 203 },
    { id: 22, name: "Walking Lunges", sets: 3, reps: 10, rest: 60, apiId: 206 },
    { id: 23, name: "Calf Press", sets: 4, reps: 15, rest: 45, apiId: 146 },
    { id: 24, name: "Abdominal Exercise", sets: 3, reps: 15, rest: 30, apiId: 167 }
  ]}
]

type ExerciseRowProps = {
  exercise: Exercise
  apiInfo?: ApiExercise
  completed: boolean
  onComplete: (id: number) => void
}

function ExerciseRow({ exercise, apiInfo, completed, onComplete }: ExerciseRowProps) {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">{exercise.name}</h2>
        <Chip color={completed ? "success" : "default"}>{completed ? "Completed" : "Not Completed"}</Chip>
      </div>
      <div className="flex gap-6 text-gray-600 mb-4">
        <p>{exercise.sets} sets × {exercise.reps} reps</p>
        <p>Rest: {exercise.rest}s</p>
      </div>
      {apiInfo && <div className="mb-4"><p className="text-sm text-gray-500">Equipment: {apiInfo.equipment.map((item) => item.name).join(", ") || "None"}</p><p className="text-sm text-gray-500">Muscles: {apiInfo.muscles.map((muscle) => muscle.name_en || muscle.name).join(", ") || "Not available"}</p></div>}
      <Button variant={completed ? "secondary" : "primary"} onPress={() => onComplete(exercise.id)}>{completed ? "Mark as Not Completed" : "Mark as Completed"}</Button>
    </Card>
  )
}

function MemberWorkout() {
  const navigate = useNavigate()
  const [selectedDay, setSelectedDay] = useState("Monday")
  const [completedExercises, setCompletedExercises] = useState<number[]>([])
  const [apiExercises, setApiExercises] = useState<ApiExercise[]>([])

  const currentWorkout = workouts.find((workout) => workout.day === selectedDay) || workouts[0]

  useEffect(() => { fetch("https://wger.de/api/v2/exerciseinfo/?limit=100").then((response) => response.json()).then((data) => setApiExercises(data.results)).catch((error) => console.error("Wger API error:", error)) }, [])

  function handleComplete(id: number) {
    if (completedExercises.includes(id)) {
      setCompletedExercises(completedExercises.filter((exerciseId) => exerciseId !== id))
    } else {
      setCompletedExercises([...completedExercises, id])
    }
  }

  function getApiExercise(apiId?: number) {
    return apiExercises.find((exercise) => exercise.id === apiId)
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-end mb-4">
          <CloseButton aria-label="Back to dashboard" className="size-8 rounded-full bg-default text-muted hover:bg-default-hover hover:text-foreground active:scale-95" onPress={() => navigate("/member")} />
        </div>

        <div className="mb-8">
          <p className="text-gray-500">My Workout</p>
          <h1 className="text-3xl font-bold">{currentWorkout.name}</h1>
          <p className="text-gray-500 mt-2">Select a day to view your workout.</p>
        </div>

        <Select selectedKey={selectedDay} onSelectionChange={(key) => setSelectedDay(String(key))} className="mb-8">
          <Label>Workout Day</Label>
          <Select.Trigger>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              {workouts.map((workout) => <ListBox.Item key={workout.day} id={workout.day} textValue={workout.day}>{workout.day}<ListBox.ItemIndicator /></ListBox.Item>)}
            </ListBox>
          </Select.Popover>
        </Select>

        <div className="mb-6">
          <p className="text-gray-500">{currentWorkout.day}</p>
          <h2 className="text-2xl font-bold">{currentWorkout.name}</h2>
          <p className="text-gray-500 mt-2">Progress: {currentWorkout.exercises.filter((exercise) => completedExercises.includes(exercise.id)).length} / {currentWorkout.exercises.length} exercises completed</p>
        </div>

        <div className="flex flex-col gap-5">
          {currentWorkout.exercises.map((exercise) => <ExerciseRow key={exercise.id} exercise={exercise} apiInfo={getApiExercise(exercise.apiId)} completed={completedExercises.includes(exercise.id)} onComplete={handleComplete} />)}
        </div>
      </div>
    </div>
  )
}

export default MemberWorkout