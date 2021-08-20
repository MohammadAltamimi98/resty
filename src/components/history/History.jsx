import React from 'react';
import './History.scss';

function History(props) {
  async function fetchData(e) {
    console.log(e.target.textContent);
    let array = e.target.textContent.split('   ');
    array.splice(1, 1);
    console.log(array[0]);

    const formData = {
      method: array[0],
      url: array[1],
    };
    await props.handleApiCall(formData);
  };

  return (
    <div className="div">
      <h3>History:</h3>
      {props.history.map((element, index) => {
        return (
          <span key={index} className="whatever" onClick={fetchData}>
            {element.method.toUpperCase()}{'   ===>   '}{element.url}<br />
          </span>
        );
      })}
    </div>
  );
}

export default History;
