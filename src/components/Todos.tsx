import Todo from "./models/todo";

// React-TypeScript-Variable-Declaration-For-Props
// Here props set to generic type
// <> this bracket is a generic type feature
// {} integrate React.FC feature into the generic type
// items?: string[]
// this portion can be written like this in case we cannot get any items list
// React.FC<{items: string[]}
// Instead of a string list, this portion will accept the todo constructor class types.
const Todos: React.FC<{items: Todo[]}> = (props) => {

  const itemsList = props.items.map(item => (
  <li key={item.id}>
    {item.text}
  </li>
  ));

  return (
    <ul>
        {itemsList}
    </ul>
  );
};

export default Todos;