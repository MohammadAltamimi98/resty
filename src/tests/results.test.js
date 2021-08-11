import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Results from '../components/results/Results'

it('', () => {
  const data = {
    headers: {
      'content-type': 'string application/json'
    },
    count: 2,
    results: [
      { name: 'fake thing 1', url: 'http://fakethings.com/1' },
      { name: 'fake thing 2', url: 'http://fakethings.com/2' },
    ],
  };

  render(<Results data={data} />);

  const stuff = screen.getByTestId('results');

  expect(stuff).toHaveTextContent('{ "Headers": { "content-type": "string application/json" }, "count": 2, "results": [ { "name": "fake thing 1", "url": "http://fakethings.com/1" }, { "name": "fake thing 2", "url": "http://fakethings.com/2" } ] }')
})