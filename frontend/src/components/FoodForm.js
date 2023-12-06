import React, { useState } from 'react'
import { useFoodItemsContext } from '../hooks/useFoodItem'
import axios from 'axios'

function FoodItemForm() {
    const { dispatch } = useFoodItemsContext()
    const[name, setName] = useState('')
    const[amount, setAmount] = useState('')
    const[error, setError] = useState(null)
    const[emptyFields, setEmptyFields] = useState([])


    const handleSubmit = async (e) => {
        e.preventDefault()

        const foodItem = {name, amount}

        // const response = await fetch('/api/foods', {
        //     method: 'POST',
        //     body: JSON.stringify(foodItem),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })
        const response = await axios.post('/api/foods', foodItem, {
            headers: {
              'Content-Type': 'application/json',
            },
        })

        const json = await response.data
        console.log(json)

        if(response.status !== 200) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if(response.status === 200){
            setName('')
            setAmount('')
            setError(null)
            setEmptyFields([])
            console.log('new food added', json)
            dispatch({type: 'CREATE_FOODITEM', payload: json})
        }
    }
    
  return (
    <form className='create-food' onSubmit={handleSubmit}>
        <h3> Add a Food Item</h3>

        <label> Food Name</label>
        <input 
          type='text'
          onChange={(e) => setName(e.target.value)}
          value={name}
          className={emptyFields?.includes('name') ? 'error' : ''}
          />

          <label> Amount(g):</label>
          <input 
          type='number'
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
          className={emptyFields?.includes('amount') ? 'error' : ''}
          />
          <button> Add Food Item</button>
          {error && <div className='error'> {error}</div>}
    </form>
  )
}

export default FoodItemForm