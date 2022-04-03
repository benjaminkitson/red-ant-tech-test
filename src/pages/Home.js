import FavouritesPanel from '../components/FavouritesPanel';
import ComicsList from '../components/ComicsList';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { useState } from 'react'

function Home() {

  /*
  Stores data about specific sub-components in component state for passing down as props.
  Could have used a page-specific reducer instead.
  */
  const [panelOpen, setPanelOpen] = useState(false)
  const [comicsLoaded, setComicsLoaded] = useState(false)

  return (
    <div className="home-page">
      <Header setPanelOpen={setPanelOpen}/>
      <ComicsList setComicsLoaded={setComicsLoaded} />
      <FavouritesPanel setPanelOpen={setPanelOpen} panelOpen={panelOpen}/>
      <Loading content={"Comics"} contentLoaded={comicsLoaded}/>
    </div>
  );
}

export default Home;
