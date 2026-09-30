import { Card, Chip } from "@heroui/react"

const meals = [
  { meal: "Breakfast", food: "Oats, banana and milk", calories: "450 kcal", protein: "18g protein" },
  { meal: "Lunch", food: "Rice, dal, vegetables and paneer", calories: "650 kcal", protein: "30g protein" },
  { meal: "Evening Snack", food: "Fruit and curd", calories: "250 kcal", protein: "10g protein" },
  { meal: "Dinner", food: "Roti, vegetables and paneer", calories: "550 kcal", protein: "28g protein" }
]

function MemberDiet() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
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
            <Chip color = "primary">Member Plan</Chip>
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

        <div className="flex flex-col gap-4">
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
      </div>
    </div>
  )
}

export default MemberDiet