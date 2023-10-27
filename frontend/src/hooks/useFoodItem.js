import { FoodItemsContext} from "../context/FoodItemContext";
import { useContext } from "react";

export const useFoodItemsContext = () =>{ 
    const context = useContext(FoodItemsContext)

    if(!context){
        throw Error('useFoodItems must be used inside an FoodItemsProvider')
    }
    return context
}