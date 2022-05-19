import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import Todo from './components/models/todo';

const App = () => {
  const todos = [
    new Todo('Learn React'),
    new Todo('Learn TypeScript')
  ];

  // React-TypeScript-Variable-Declaration-For-Function-Argument
  const addTodoHandler = (todoText: string) => {

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