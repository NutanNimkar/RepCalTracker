const FoodItem = require('../models/foodItemModel')
const mongoose = require('mongoose')

//get all workouts
const getFoodItems = async( req, res) => {
    const workouts = await FoodItem.find({}).sort({createAt: -1})
    res.status(200).json(workouts)
}

const createFoodItem = async(req,res) => {
    const {name, amount} = req.body
try {
    const workout = await FoodItem.create({name, amount})
    res.status(200).json(workout)
} catch (error){
    res.status(400).json({error: error.message})
}
}

const deleteFoodItem = async( req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout'})
    }
    const workout = await FoodItem.findOneAndDelete({_id: id})

    if(!workout) {
        return res.status(404).json({error: 'No such Workout'})
    }
    res.status(200).json(workout)
}

module.exports = {
    getFoodItems,
    createFoodItem,
    deleteFoodItem
}