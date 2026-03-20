import { useEffect, useState } from "react";
import MealItem from "./MealItem";

const Meals = () => {
    const [loadedMeals, setLoadedMeals] = useState([]);

    useEffect(() => {
        const dataMeals = async () => {
            try {
                const response = await fetch('http://localhost:3001/meals')
                if (!response.ok) {
                    throw new Error('Failed to fetch meals')
                }

                const mealsData = await response.json()
                setLoadedMeals(mealsData)
                console.log(mealsData)

            } catch (error) {
                console.error('Viga', error)
            }
        }
        dataMeals()
    }, []);
    return (
        <ul id="meals">
            {loadedMeals.map((meal) => (
                <MealItem 
                    key={meal.id} 
                    id={meal.id}
                    name={meal.name} 
                    price={meal.price} 
                    description={meal.description} 
                    image={meal.image}
                />
            ))}
        </ul>
    )
}

export default Meals