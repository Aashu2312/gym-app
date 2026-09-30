import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Card, Chip, CloseButton, Button, Input, Label, Select, ListBox, TextField } from "@heroui/react"

const meals = [
  { meal: "Breakfast", food: "Oats, banana and milk", calories: "450 kcal", protein: "18g protein" },
  { meal: "Lunch", food: "Rice, dal, vegetables and paneer", calories: "650 kcal", protein: "30g protein" },
  { meal: "Evening Snack", food: "Fruit and curd", calories: "250 kcal", protein: "10g protein" },
  { meal: "Dinner", food: "Roti, vegetables and paneer", calories: "550 kcal", protein: "28g protein" }
]

type NutritionResult = {
  bmr?: number
  tdee?: number
  maintenance_calories?: number
  protein?: number
  calories?: number
  [key: string]: unknown
}

function MemberDiet() {
  const navigate = useNavigate()
  const [age, setAge] = useState("")
  const [sex, setSex] = useState("")
  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")
  const [activity, setActivity] = useState("")
  const [result, setResult] = useState<NutritionResult | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  async function calculateNutrition() {
    if (!age || !sex || !height || !weight || !activity) {
      setError("Please fill in all fields.")
      return
    }

    setLoading(true)
    setError("")
    setResult(null)

    try {
      const response = await fetch(`https://myplate.food/api/v1/calculate/calorie-needs?age=${age}&sex=${sex}&activity=${activity}&height_cm=${height}&weight_kg=${weight}`)

      if (!response.ok) {
        throw new Error("Unable to calculate nutrition.")
      }

      const data = await response.json()
      setResult(data)
    } catch (error) {
      setError("Unable to fetch nutrition data. Please try again.")
      console.error("MyPlate API error:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-end mb-4">
          <CloseButton aria-label="Back to dashboard" className="size-8 rounded-full bg-default text-muted hover:bg-default-hover hover:text-foreground active:scale-95" onPress={() => navigate("/member")} />
        </div>

        <div className="mb-8">
          <p className="text-gray-500">Gym Plan</p>
          <h1 className="text-3xl font-bold">My Diet Plan</h1>
          <p className="text-gray-500 mt-2">Your nutrition plan provided by your gym.</p>
        </div>

        <Card className="p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold">Daily Nutrition Plan</h2>
              <p className="text-gray-500 mt-1">Recommended daily intake</p>
            </div>
            <Chip color="accent">Member Plan</Chip>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6">
            <div>
              <p className="text-sm text-gray-500">Calories</p>
              <p className="text-xl font-semibold mt-1">1,900 kcal</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Protein</p>
              <p className="text-xl font-semibold mt-1">86g</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Meals</p>
              <p className="text-xl font-semibold mt-1">4</p>
            </div>
          </div>
        </Card>

        <div className="flex flex-col gap-4 mb-8">
          {meals.map((meal) => (
            <Card key={meal.meal} className="p-5">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                  <h2 className="text-lg font-semibold">{meal.meal}</h2>
                  <p className="text-gray-600 mt-1">{meal.food}</p>
                </div>

                <div className="flex gap-4 text-sm text-gray-500">
                  <span>{meal.calories}</span>
                  <span>{meal.protein}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-6">
          <div className="mb-6">
            <p className="text-gray-500">MyPlate.food API</p>
            <h2 className="text-2xl font-semibold">Nutrition Calculator</h2>
            <p className="text-gray-500 mt-1">Calculate your estimated daily calorie and protein needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <TextField isRequired>
              <Label>Age</Label>
              <Input type="number" placeholder="Enter age" value={age} onChange={(event) => setAge(event.target.value)} />
            </TextField>

            <Select value={sex || null} onChange={(value) => setSex(value as string)}>
              <Label>Sex</Label>
              <Select.Trigger><Select.Value /><Select.Indicator /></Select.Trigger>
              <Select.Popover>
                <ListBox>
                  <ListBox.Item id="male" textValue="Male">Male<ListBox.ItemIndicator /></ListBox.Item>
                  <ListBox.Item id="female" textValue="Female">Female<ListBox.ItemIndicator /></ListBox.Item>
                </ListBox>
              </Select.Popover>
            </Select>

            <TextField isRequired>
              <Label>Height (cm)</Label>
              <Input type="number" placeholder="e.g. 175" value={height} onChange={(event) => setHeight(event.target.value)} />
            </TextField>

            <TextField isRequired>
              <Label>Weight (kg)</Label>
              <Input type="number" placeholder="e.g. 80" value={weight} onChange={(event) => setWeight(event.target.value)} />
            </TextField>

            <Select value={activity || null} onChange={(value) => setActivity(value as string)}>
              <Label>Activity Level</Label>
              <Select.Trigger><Select.Value /><Select.Indicator /></Select.Trigger>
              <Select.Popover>
            <ListBox>
              <ListBox.Item id="sedentary" textValue="Sedentary">Sedentary<ListBox.ItemIndicator /></ListBox.Item>
              <ListBox.Item id="moderately-active" textValue="Moderately Active">Moderately Active<ListBox.ItemIndicator /></ListBox.Item>
              <ListBox.Item id="active" textValue="Active">Active<ListBox.ItemIndicator /></ListBox.Item>
              <ListBox.Item id="very-active" textValue="Very Active">Very Active<ListBox.ItemIndicator /></ListBox.Item>
            </ListBox>
              </Select.Popover>
            </Select>
          </div>

          <Button variant="primary" className="w-full mt-6" onPress={calculateNutrition}>
            {loading ? "Calculating..." : "Calculate Nutrition"}
          </Button>

          {error && <p className="text-red-500 mt-4">{error}</p>}

          {result && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
              <Card className="p-5">
                <p className="text-sm text-gray-500">BMR</p>
                <p className="text-2xl font-bold mt-1">{result.bmr ?? "N/A"} kcal</p>
              </Card>

              <Card className="p-5">
                <p className="text-sm text-gray-500">Daily Energy</p>
                <p className="text-2xl font-bold mt-1">{result.tdee ?? result.maintenance_calories ?? "N/A"} kcal</p>
              </Card>

              <Card className="p-5">
                <p className="text-sm text-gray-500">Protein</p>
                <p className="text-2xl font-bold mt-1">{result.protein ?? "N/A"}g</p>
              </Card>
            </div>
          )}
        </Card>
      </div>
    </div>
  )
}

export default MemberDiet