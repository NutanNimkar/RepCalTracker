import React, { useState } from "react";
import { useFoodItemsContext } from "../hooks/useFoodItem";
import MacrosTable from "../components/MacroTable";
import axios from "axios";

function FoodLookup() {
  const { dispatch } = useFoodItemsContext();
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [foodData, setFoodData] = useState(null);
  const [error, setError] = useState(null);

  const appId = "58f77b40"; // Replace with your Edamam API App ID
  const appKey = "d6d3a450cfe5cdccf09b271921365b2f"; // Replace with your Edamam API App Key

  const handleLookup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://api.edamam.com/api/nutrition-data?app_id=${appId}&app_key=${appKey}&ingr=${amount}%20${name}`
      );

      if (response.status === 200) {
        const data = response.data;
        setFoodData(data);
      }
    } catch (error) {
      // Handle any errors here
      console.error("Error looking up food:", error);
      setError(error.message);
    }
  };

  const handleAddFood = async (e) => {
    e.preventDefault();

    const foodItem = { name, amount };
    try {
      const response = await axios.post("/api/foods", foodItem, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const json = response.data;
      console.log(json);

      if (response.status === 200) {
        setName("");
        setAmount("");
        console.log("new food added", json);
        dispatch({ type: "CREATE_FOODITEM", payload: json });
      }
    } catch (error) {
      // Handle any errors here
      console.error("Error adding food:", error);
      setError(error.message);
    }
  };

  return (
    <div className="">
      <form className="create-food">
        <h2>Food Lookup</h2>
        <input
          type="text"
          placeholder="Enter food(i.e 100g chicken breast) "
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label> Amount(g):</label>
        <input
          type="number"
          placeholder="Quantity"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <div className="my-4">
          <button className="button mb-2" onClick={handleLookup}>
            Lookup Food
          </button>
          <button className="button" onClick={handleAddFood}>
            Add Food
          </button>
        </div>
      </form>

      {foodData && <MacrosTable foodData={foodData} name={name} />}

      {error && <div className="error">{error}</div>}
    </div>
  );
}

export default FoodLookup;
