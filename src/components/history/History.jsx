import React from 'react';

function History(props) {
  console.log(props.history);
  return (
    <div>
      <h3>History:</h3>
      {props.history.map((element, index) => {
        return (
          <span key={index}>
            {element.method.toUpperCase()} {'  ===>   '} {element.url} <br />
          </span>
        );
      })}
    </div>
  );
}

export default History;
