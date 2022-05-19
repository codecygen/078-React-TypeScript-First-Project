import Todo from "./models/todo";
import ItemsList from "./models/ItemsList";

import classes from "./Todos.module.css";

// React-TypeScript-Variable-Declaration-For-Props
// Here props set to generic type
// <> this bracket is a generic type feature
// {} integrate React.FC feature into the generic type
// items?: string[]
// this portion can be written like this in case we cannot get any items list
// React.FC<{items: string[]}
// Instead of a string list, this portion will accept the todo constructor class types.
const Todos: React.FC<{ items: Todo[]; onRemoveTodo: (id: string) => void }> = (
  props
) => {
  const itemsList = props.items.map((item) => (
    <ItemsList
      key={item.id}
      text={item.text}
      onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
    />
  ));

  return <ul className={classes.todos}>{itemsList}</ul>;
};

export default Todos;
