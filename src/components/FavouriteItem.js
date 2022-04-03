import { useDispatch } from 'react-redux';

function FavouriteItem(props) {

  const dispatch = useDispatch()

  return (
    <li key={props.title}>
      {props.title}
      <button
        className="remove js-remove"
        onClick={() => dispatch({ type: "REMOVE_FAVOURITE", id: props.id })}>
      </button>
    </li>
  );
}

export default FavouriteItem;
