const express = require('express')

const { getFoodItems, createFoodItem, deleteFoodItem } = require('../controller/foodItemController')

const router = express.Router()


//get all workouts
router.get('/', getFoodItems)

// get a single workout
// router.get('/:id', getWorkout)

//post a new workout
router.post('/', createFoodItem)

//delete a workout 
router.delete('/:id', deleteFoodItem)

// //update a workout
// router.patch('/:id', updateWorkout)



module.exports = router