import Form from '../components/form/Form';
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';

it('if the buttons work and fire the event', async () => {
  let callApi = jest.fn();
  render(<Form handleApiCall={callApi} />);
  const button = screen.getByTestId('my_btn');
  expect(button).toBeInTheDocument();
  fireEvent.click(button);
  await waitFor(() => expect(callApi).toHaveBeenCalled());
})