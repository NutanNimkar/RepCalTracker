import { createContext, useReducer } from "react";

export const FoodItemsContext = createContext()

export const foodItemReducer = (state, action) => {
    switch(action.type){
        case 'SET_FOODITEMS':
            return {
                foodItems: action.payload
            }
        case 'CREATE_FOODITEM':
            return {
                foodItems: [action.payload, ...state.foodItems]
            }
        case 'DELETE_FOODITEM':
            return {
                foodItems: state.foodItems?.filter((f) => f._id !== action.payload._id)
            }
        default:
            return state
    }
}

export const FoodItemsContextProvider = ({ children }) => {

    const [ state, dispatch] = useReducer(foodItemReducer, {
        foodItems: null
    })

    return (
        <FoodItemsContext.Provider value={{...state, dispatch}}>
            { children }
        </FoodItemsContext.Provider>
    )
}