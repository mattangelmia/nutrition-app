import React from 'react';
import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
import foods from './foods.json';
import 'bulma/css/bulma.css';
import FoodBox from './FoodBox';
import AddFood from './AddFood';
import SubmitForm from './SubmitForm';
import SearchFoods from './SearchFoods';
import TodaysFoods from './TodaysFoods';

function App() {
  const [foodItems, setFoodItems] = useState(foods.slice(0, 5));
  const [foodQuanitity, setFoodQuantity] = useState(1);
  const [totalCalories, setTotalCalories] = useState(0);
  const [addedFoods, setAddedFoods] = useState([]);
  const [foodValue, setFoodValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [selectedFile, setSelectedFile] = useState('');
  const [calorieValue, setCalorieValue] = useState('');

  const [modalDisplay, setModalDisplay] = useState('none');

  function addItem() {
    console.log('added');
    setModalDisplay('block');
  }

  function getFoodName(e) {
    setFoodValue(e.target.value);
  }

  function getCalorieName(e) {
    setCalorieValue(e.target.value);
    console.log(calorieValue);
  }

  function setFile(e) {
    e.preventDefault();
    console.log(e.target.files[0].name);
    setSelectedFile(e.target.files[0].name);
    console.log(selectedFile);
    console.log('file');
  }

  function submitFood(e) {
    e.preventDefault();
    setModalDisplay('none');
    console.log(calorieValue);
    console.log(foodValue);
    console.log(selectedFile);

    setFoodItems([
      ...foodItems,
      {
        name: foodValue,
        calories: Number(calorieValue),
        image: `/${selectedFile}`,
      },
    ]);
  }

  console.log(calorieValue);

  function filterFoods(e) {
    setSearchValue(e.target.value.trim());
  }

  const showingFoods =
    searchValue === ''
      ? foodItems
      : foodItems.filter((food) =>
          food.name.toLowerCase().includes(searchValue.toLowerCase())
        );

  function getQuantity(e) {
    console.log(e.target.value);
    setFoodQuantity(e.target.value);
  }

  function addFood(food) {
    console.log(food);
    setAddedFoods(
      addedFoods.concat({
        name: food.name,
        calories: food.calories,
        quantity: foodQuanitity,
      })
    );
    setTotalCalories(totalCalories + food.calories * foodQuanitity);
    console.log(foodQuanitity);
  }

  console.log(addedFoods);

  function deleteFood(food) {
    console.log(food);
    setFoodItems(foodItems.filter((foodItem) => foodItem !== food));
  }

  return (
    <div className="App">
      <h1>Iron nutrition</h1>

      <SubmitForm
        display={modalDisplay}
        submitFood={submitFood}
        getFoodName={getFoodName}
        getCalorieAmount={getCalorieName}
        foodValue={foodValue}
        caloriesValue={calorieValue}
        setFile={setFile}
      />

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <AddFood addFoodItem={addItem} />
      </div>
      <div>
        <SearchFoods value={searchValue} filterFoods={filterFoods} />
      </div>
      <div style={{ display: 'flex' }}>
        <FoodBox
          foodList={showingFoods}
          addFood={addFood}
          getQuantity={getQuantity}
          foodQuantity={foodQuanitity}
          deleteFood={deleteFood}
        />
        <TodaysFoods addedFoods={addedFoods} totalCalories={totalCalories} />
      </div>
    </div>
  );
}

export default App;
