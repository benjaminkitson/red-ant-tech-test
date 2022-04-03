import { useSelector, useDispatch } from 'react-redux';
import { addFavourite, removeFavourite } from '../actions/favourites'

function Comic(props) {

  const dispatch = useDispatch()

  const favourites = useSelector(state => state)

  // function evaluates the presence of the comic in favourites and generates the button text accordingly

  function buttonText() {
    if (favourites.some(comic => comic.id === props.id)) {
      return 'Remove'
    } else {
      return 'Add'
    }
  }

  return (
    <li className="comic-item">
      <div className="comic-card">
      <img src={`${props.imageURL}/portrait_uncanny.jpg`} alt="Comic preview"/>
      <h2>{props.title}</h2>
        <button
          onClick={() => {
            /*
            function evaluates if the button should add or remove to/from
            favourites based on return value of buttonText()
            */
            if (buttonText() === "Add") {
              dispatch(addFavourite({ title: props.title, id: props.id }));
            } else {
              dispatch(removeFavourite({ id: props.id }));
            }
          }}
          className="button js-add"
        >{buttonText()}</button>
      </div>
    </li>
  );
};


export default Comic;
