import { useState, useEffect } from 'react';
import Comic from './Comic';

function ComicsList(props) {

  const [comics, setComics] = useState([])

  useEffect(() => {
    const url = 'https://gateway.marvel.com/v1/public/comics?apikey=3cb62d086d5debdeea139095cbb07fe4&ts=redant&hash=140e85a50884cef76d614f6dacada288'
    fetch(url)
    .then(response => response.json())
    .then(result => {
      const comics = result.data.results
      props.setComicsLoaded(true)
      setComics(comics)
    })
  }, [])

  return (
    <ul id="comics-list" className="comics-list">
      {comics.map((comic) => (
        <Comic
          key={comic.id}
          id={comic.id}
          title={comic.title}
          imageURL={comic.thumbnail.path}
          isAdded={false}
        />
      ))}
    </ul>
  )
}

export default ComicsList
