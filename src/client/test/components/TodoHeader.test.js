import { render, screen } from '@testing-library/react';
import TodoHeader from '../../components/TodoHeader';

test('render Todo App Header with no props input', () => {
  render(<TodoHeader />);
  const todoHeader = screen.getByText(/Todo/i);
  expect(todoHeader).toBeInTheDocument();
});

test('render Todo App Header with valid props input', () => {
  render(<TodoHeader todoHeaderContent='Todo App' />);
  const todoHeader = screen.getByText(/Todo App/i);
  expect(todoHeader).toBeInTheDocument();
});
