import FavouritesList from './FavouritesList'

function FavouritesPanel(props) {

  // Both panelOpen and setPanelOpen are stored as props, for access below

  return (
    <div id="favourites-panel" className={`favourites-panel ${props.panelOpen ? "open" : ""}`}>
      <div className="favourites-header">
        <h2>Favourites</h2>
        <button className="close js-close" onClick={() => {props.setPanelOpen(false)}}></button>
      </div>
      <div id="favourites-content">
        <FavouritesList />
      </div>
    </div>
  )
}

export default FavouritesPanel
