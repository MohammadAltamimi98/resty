import './Results.scss';
import '../loading/Loading';
import Loading from '../loading/Loading';
import JSONPretty from 'react-json-pretty';

function Results(props) {
  return (

    <>
      <section>
        <pre>
          "headers:"
          <JSONPretty data={props.data.headers} />
        </pre>



        <pre>
          "count:"
          <JSONPretty data={props.data.count} />
        </pre>




        < pre >
          "results:"
          < JSONPretty data={props.data.results} />
        </pre>

      </section>
    </>

  );
}
export default Results;

