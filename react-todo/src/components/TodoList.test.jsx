import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from './TodoList';

test('renders TodoList component', () => {
  render(<TodoList />);
  expect(screen.getByText('Todo List')).toBeInTheDocument();
});

test('displays initial todos', () => {
  render(<TodoList />);
  expect(screen.getByText('Learn React')).toBeInTheDocument();
  expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
  expect(screen.getByText('Master Testing')).toBeInTheDocument();
});

test('adds a new todo', () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText('Add a new todo');
  const button = screen.getByText('Add Todo');

  fireEvent.change(input, { target: { value: 'New Todo Item' } });
  fireEvent.click(button);

  expect(screen.getByText('New Todo Item')).toBeInTheDocument();
});

test('toggles todo completion', () => {
  render(<TodoList />);
  const todo = screen.getByText('Learn React');

  fireEvent.click(todo);
  expect(todo).toHaveStyle('text-decoration: line-through');
});

test('deletes a todo', () => {
  render(<TodoList />);
  const deleteButton = screen.getAllByText('Delete')[0];
  
  fireEvent.click(deleteButton);
  
  expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
});
