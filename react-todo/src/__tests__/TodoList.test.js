import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders the TodoList component', () => {
    render(<TodoList />);
    const heading = screen.getByText(/todo list/i);
    expect(heading).toBeInTheDocument();
  });

  test('displays initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Master Testing')).toBeInTheDocument();
  });

  test('can add a new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/add a new todo/i);
    const addButton = screen.getByText(/add todo/i);

    fireEvent.change(input, { target: { value: 'New Test Todo' } });
    fireEvent.click(addButton);

    expect(screen.getByText('New Test Todo')).toBeInTheDocument();
  });

  test('can toggle a todo', () => {
    render(<TodoList />);
    const todo = screen.getByText('Learn React');

    // Check initial state (not completed)
    expect(todo).toHaveStyle('text-decoration: none');

    // Toggle to completed
    fireEvent.click(todo);
    expect(todo).toHaveStyle('text-decoration: line-through');

    // Toggle back to not completed
    fireEvent.click(todo);
    expect(todo).toHaveStyle('text-decoration: none');
  });

  test('can delete a todo', () => {
    render(<TodoList />);
    
    // Verify todo exists
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    
    // Find and click the first delete button
    const deleteButtons = screen.getAllByText(/delete/i);
    fireEvent.click(deleteButtons[0]);
    
    // Verify todo is removed
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });

  test('input clears after adding a todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/add a new todo/i);
    const addButton = screen.getByText(/add todo/i);

    fireEvent.change(input, { target: { value: 'Test Clear Input' } });
    fireEvent.click(addButton);

    expect(input.value).toBe('');
  });

  test('does not add empty todos', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/add a new todo/i);
    const addButton = screen.getByText(/add todo/i);

    const initialTodos = screen.getAllByRole('listitem');
    const initialCount = initialTodos.length;

    // Try to add empty todo
    fireEvent.change(input, { target: { value: '   ' } });
    fireEvent.click(addButton);

    const updatedTodos = screen.getAllByRole('listitem');
    expect(updatedTodos.length).toBe(initialCount);
  });
});
