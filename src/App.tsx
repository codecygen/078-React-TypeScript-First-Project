import { useState } from 'react';

import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import Todo from './components/models/todo';

const App = () => {
  // React-TypeScript-Variable-Declaration-For-useState-Hook
  const [todos, setTodos] = useState<Todo[]>([]);

  // React-TypeScript-Variable-Declaration-For-Function-Argument
  const addTodoHandler = (todoText: string) => {
      const newTodo = new Todo(todoText);

      setTodos(prevState => {
        return prevState.concat(newTodo);
      });
  };

  return (

    <div>
      <AddTodo
        onAddTodo={addTodoHandler}
      />
      <Todos 
        items={todos}
      />
    </div>
  );
}

export default App;