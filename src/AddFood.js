import React from 'react';
import 'bulma/css/bulma.css';

export default function AddFood(props) {
  return (
    <div>
      <button className="button is-large  is-light" onClick={props.addFoodItem}>
        Add New Food
      </button>
    </div>
  );
}
