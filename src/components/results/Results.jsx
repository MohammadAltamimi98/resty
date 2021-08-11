import './Results.scss';
import Loading from '../loading/Loading';
import JSONPretty from 'react-json-pretty';

function Results(props) {
  return (

    <>
      <section>
        {props.data ? <JSONPretty data={props.data} /> : <Loading />}
      </section>
    </>

  );
}
export default Results;

