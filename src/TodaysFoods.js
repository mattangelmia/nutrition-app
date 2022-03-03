import React from 'react';

export default function TodaysFoods(props) {
  return (
    <div>
      <h2>TodaysFoods</h2>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        {props.addedFoods.map((food, index) => (
          <div key={index} style={{ margin: '12%' }}>
            <h3>
              Quantity: {food.quantity}, {food.name} = {food.calories}
            </h3>

            <p></p>
          </div>
        ))}
        <h1>total : {props.totalCalories}</h1>
      </div>
    </div>
  );
}
