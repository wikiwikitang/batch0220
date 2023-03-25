import { render, screen } from '@testing-library/react';
import TodoHeader from './components/TodoHeader';

test('render Todo App Header', () => {
  render(<TodoHeader />);
  const todoHeader = screen.getByText(/Todo/i);
  expect(todoHeader).toBeInTheDocument();
});
