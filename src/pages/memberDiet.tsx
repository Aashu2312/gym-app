type DietPlan = {
  calories: number
  protein: number
  carbs: number
  fats: number
  meals: string[]
}

const dietPlan: DietPlan = {
  calories: 2200,
  protein: 140,
  carbs: 220,
  fats: 70,
  meals: [
    "Breakfast: Oats, milk and banana",
    "Lunch: Rice, chicken and vegetables",
    "Snack: Greek yogurt and fruit",
    "Dinner: Roti, paneer and vegetables"
  ]
}

function MemberDiet() {
  return (
    <div>
      <h1>My Diet Plan</h1>

      <p>Calories: {dietPlan.calories} kcal</p>
      <p>Protein: {dietPlan.protein} g</p>
      <p>Carbs: {dietPlan.carbs} g</p>
      <p>Fats: {dietPlan.fats} g</p>

      <h2>Meals</h2>

      {dietPlan.meals.map((meal, index) => (
        <p key={index}>{meal}</p>
      ))}
    </div>
  )
}

export default MemberDiet