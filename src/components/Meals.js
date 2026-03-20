import { useEffect } from "react";  

const Meals = () => {
    useEffect(() => {
        const dataMeals = async () => {
            try {
                const response = await fetch('http://localhost:3001/meals')
                const mealsData = await response.json()
                console.log(mealsData)
            } catch (error) {
                console.error('Viga', error)
            }
        }
        dataMeals()
    }, []);
    return (
        <ul id="meals">
            {
               <h2>Meals</h2> 
            }
        </ul>
    )
}

export default Meals