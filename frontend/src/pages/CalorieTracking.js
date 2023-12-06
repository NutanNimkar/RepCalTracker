import React, { useEffect } from 'react'
import { useFoodItemsContext } from '../hooks/useFoodItem'
import FoodItemDetails from '../components/FoodDetails'
import axios from 'axios'
import FoodLookup from '../components/FoodLookUp'

function CalorieTracking() {

  const {foodItems, dispatch } = useFoodItemsContext()

  useEffect(() => {
    const fetchFoodItems = async () => {
        // const response = await fetch('/api/foods')
        const response = await axios.get('/api/foods')
        const json = response.data

        if (response.status === 200){
            dispatch({type: 'SET_FOODITEMS', payload: json})
        }
    }
    fetchFoodItems()
}, [dispatch])
  return (
<div className='home'>
  <div className='workouts'>
    {foodItems && foodItems.map((foodItem) => (
      <FoodItemDetails key={foodItem._id} foodItem={foodItem}/>
    ))}
    <div className="mb-0">
      <FoodLookup />
    </div>
  </div>
</div>
  )
}

export default CalorieTracking