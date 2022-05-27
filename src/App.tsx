import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import TodosContextProvider from './store/todos-context';

const App = () => {

  return (

    <TodosContextProvider>
      <AddTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;