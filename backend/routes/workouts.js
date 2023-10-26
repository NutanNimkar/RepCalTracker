const express = require('express')

const {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
} = require('../controller/workoutController')

const router = express.Router()


//get all workouts
router.get('/', getWorkouts)

// get a single workout
router.get('/:id', getWorkout)

//post a new workout
router.post('/', createWorkout)

//delete a workout 
router.delete('/:id', deleteWorkout)

//update a workout
router.patch('/:id', updateWorkout)



module.exports = router