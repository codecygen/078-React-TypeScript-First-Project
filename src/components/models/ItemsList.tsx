import classes from './ItemsList.module.css';

const ItemsList: React.FC<{ text: string }> = (props) => {
  return <li className={classes['items-list']}>{props.text}</li>
};

export default ItemsList;