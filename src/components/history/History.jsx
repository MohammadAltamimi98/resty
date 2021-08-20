import React from 'react';

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
    <div>
      <h3>History:</h3>
      {props.history.map((element, index) => {
        return (
          <p key={index} onClick={fetchData}>
            {element.method.toUpperCase()}{'   ===>   '}{element.url}<br />
          </p>
        );
      })}
    </div>
  );
}

export default History;
