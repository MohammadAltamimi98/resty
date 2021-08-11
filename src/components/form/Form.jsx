import './Form.scss';
import { useState } from 'react';


function Form(props) {
  // we define the states inside the function out of any if statement or other blocks
  const [textArea, settextArea] = useState(false);
  const [method, setmethod] = useState('get');
  const [url, seturl] = useState('');
  const [request, setrequest] = useState('');

  //function to handle submit
  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      method: method,
      url: url,
    };
    props.handleApiCall(formData, request);
  }

  // function to handle url and update it
  function urlHandler(e) {
    seturl(e.target.value);
  }

  // function to handle method and update it
  function methodHandler(e) {
    setmethod(e.target.id);// we can use the id given for each option
    settextArea(false);
  }


  // function to handle request and update it
  function requestHandler(e) {
    setrequest(e.target.value);
  }


  function textAreaHandler(e) {
    settextArea(true); //here we set the textarea state to the negative of the initial state;
    setmethod(e.target.id);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input name='url' type='text' onChange={urlHandler} />
          <button type="submit" data-testid="mybtn">GO!</button>
        </label>
        <label className="methods">
          <button id="get" onClick={methodHandler}>GET</button>
          <button id="post" onClick={textAreaHandler}>POST</button>
          <button id="put" onClick={textAreaHandler}>PUT</button>
          <button id="delete" onClick={methodHandler}>DELETE</button>
        </label>
        {textArea && <textarea rows='15' cols='35' onChange={requestHandler} />}
        {/* basically when the show text state is set to true which happens only at the put and post methods this text area will show "conditional rendering" */}
      </form>
    </>
  );
}


export default Form;
