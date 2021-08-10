// import './Form.scss';
// import { useState } from 'react';

// function Form({ handleApiCall }) {

//   function handleSubmit(e) {
//     e.preventDefault();
//     const formData = {
//       method: 'GET',
//       url: 'https://pokeapi.co/api/v2/pokemon',
//     };
//     handleApiCall(formData);
//   }

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <label >
//           <span>URL: </span>
//           <input name='url' type='text' />
//           <button type="submit">GO!</button>
//         </label>
//         <label className="methods">
//           <span id="get">GET</span>
//           <span id="post">POST</span>
//           <span id="put">PUT</span>
//           <span id="delete">DELETE</span>
//         </label>
//       </form>
//     </>
//   );
// }

// export default Form;

import './Form.scss';
import { useState } from 'react';

function Form(props) {
  // we define the states inside the function out of any if statement or other blocks
  const [textArea, settextArea] = useState(false);
  const [method, setmethod] = useState('get');
  const [url, seturl] = useState('https://pokeapi.co/api/v2/pokemon');
  const [request, setrequest] = useState('https://pokeapi.co/api/v2/pokemon');

  //function to ahndle submit
  function handleSubmit(event) {
    event.preventDefault();
    const formData = {
      url: url,
      method: method
    };
    props.handleApiCall(formData); // handle props was sent from app.js as a prop 
  }

  // function to handle url and update it
  function urlHandler(e) {
    seturl(e.target.value);
  }

  // function to handle method and update it
  function methodHandler(e) {
    setmethod(e.target.id); // we can use the id given for each option
  }


  // function to handle request and update it
  function requestHandler(e) {
    setrequest(e.target.value);
  }


  function showTextArea(e) {
    settextArea(!textArea); //here we set the textarea state to the negative of the initial state;
    setmethod(e.target.id);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input name='url' type='text' onChange={urlHandler} />
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <span id="get" onClick={methodHandler}>GET</span>
          <span id="post" onClick={showTextArea}>POST</span>
          <span id="put" onClick={showTextArea}>PUT</span>
          <span id="delete" onClick={methodHandler}>DELETE</span>
        </label>
        {showTextArea && <textArea rows='20' cols='40' onChange={requestHandler} />}
        {/* basically when the show text state is set to true which happens only at the put and post methods this text area will show "conditional rendering" */}
      </form>
    </>
  );
}


export default Form;
