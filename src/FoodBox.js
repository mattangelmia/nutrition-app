import React from 'react';
import 'bulma/css/bulma.css';
import TodaysFoods from './TodaysFoods';

export default function FoodBox(props) {
  return (
    <div
      style={{ marginBottom: '30px', marginRight: '20vw', marginLeft: '5vw' }}
    >
      {props.foodList.map((food, index) => (
        <div className="box" key={index}>
          <article className="media">
            <div className="media-left">
              <img src={food.image} alt="food-type" />
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{food.name}</strong> <br />
                  <small>{food.calories}</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input
                    className="input"
                    type="number"
                    defaultValue="1"
                    onChange={props.getQuantity}
                  />
                </div>
                <div className="control">
                  <button
                    className="button is-info"
                    onClick={() => props.addFood(food)}
                  >
                    +
                  </button>
                </div>
                <div className="control">
                  <button
                    className="button is-info"
                    onClick={() => props.deleteFood(food)}
                  >
                    x
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      ))}
    </div>
  );
}
