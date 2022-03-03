import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';

export default function SubmitForm(props) {
  return (
    <div>
      <div id="image-popup-1" style={{ display: props.display }}>
        <div className="popup-content">
          <h1>Add A Food</h1>
          <form type="submit">
            <div style={{ marginBottom: '40px' }}>
              <h3>name</h3>
              <input
                className="input"
                type="text"
                onChange={props.getFoodName}
                value={props.foodValue}
              />
            </div>
            <div style={{ marginBottom: '40px' }}>
              <h3>Number of Calories</h3>
              <input
                className="input"
                type="text"
                onChange={props.getCalorieAmount}
                value={props.caloriesValue}
              />
            </div>
            <div style={{ marginBottom: '40px' }}>
              <h3>image</h3>
              <input className="input" type="file" onChange={props.setFile} />
            </div>
            <button className="button is-dark" onClick={props.submitFood}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
