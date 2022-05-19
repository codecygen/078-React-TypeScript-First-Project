import classes from "./ItemsList.module.css";

// React-TypeScript-Variable-Declaration-For-Props-Multiple-Props-Argument-Types
const ItemsList: React.FC<{ text: string; onRemoveTodo: () => void }> = (
  props
) => {
  return (
    <li className={classes["items-list"]} onClick={props.onRemoveTodo}>
      {props.text}
    </li>
  );
};

export default ItemsList;
