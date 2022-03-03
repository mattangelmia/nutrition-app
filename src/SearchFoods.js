import React from 'react';
import 'bulma/css/bulma.css';

export default function SearchFoods(props) {
  return (
    <div>
      <form>
        <input
          className="input is-rounded"
          type="text"
          value={props.value}
          onChange={props.filterFoods}
          style={{ width: '80%', marginBottom: '5%', marginTop: '5%' }}
        ></input>
      </form>
    </div>
  );
}
