import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { WorkoutsContextProvider } from './context/WorkoutContext';
import { FoodItemsContextProvider } from './context/FoodItemContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WorkoutsContextProvider>
    <FoodItemsContextProvider>
    <App />
    </FoodItemsContextProvider>
    </WorkoutsContextProvider>
  </React.StrictMode>
);

