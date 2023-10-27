import React from 'react'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { useFoodItemsContext } from '../hooks/useFoodItem'

const FoodItemDetails = ({ foodItem }) => {
  const { dispatch } = useFoodItemsContext()
  const handleClick = async () => {
    const response = await fetch('/api/foods/' + foodItem._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if(response.ok){
      dispatch({type: 'DELETE_FOODITEM', payload: json})
    }
  }
  return (
    <div className='workout-details'> 
        <h4>{foodItem.name}</h4>
        <p><strong> Amount </strong>{foodItem.amount}</p>
        <p>{formatDistanceToNow(new Date(foodItem.createdAt), { addSuffix: true})}</p>
        <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
    </div>
   
  )
}
export default FoodItemDetails;