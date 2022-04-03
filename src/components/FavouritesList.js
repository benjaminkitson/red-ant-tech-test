import { useSelector } from 'react-redux';
import FavouriteItem from './FavouriteItem'

function FavouritesList() {

  // retrieves favourites from the Redux store

  const favourites = useSelector(state => state)

  return (
    <ul className="favourites-list">
      {favourites.map((favourite) => (
        <FavouriteItem
          key={favourite.id}
          title={favourite.title}
          id={favourite.id}
        />
      ))}
    </ul>
  );
}

export default FavouritesList;
