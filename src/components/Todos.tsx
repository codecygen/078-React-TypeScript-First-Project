import React, { useContext } from 'react';
import ItemsList from "./models/ItemsList";

import { TodosContext } from '../store/todos-context';

import classes from "./Todos.module.css";

// React-TypeScript-Variable-Declaration-For-Props
// Here props set to generic type
// <> this bracket is a generic type feature
// {} integrate React.FC feature into the generic type
// items?: string[]
// this portion can be written like this in case we cannot get any items list
// React.FC<{items: string[]}
// Instead of a string list, this portion will accept the todo constructor class types.
const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  const itemsList = todosCtx.items.map((item) => (
    <ItemsList
      key={item.id}
      text={item.text}
      onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
    />
  ));

  return <ul className={classes.todos}>{itemsList}</ul>;
};

export default Todos;
