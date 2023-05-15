import { useState } from 'react'
import './App.scss'
import Header from './components/Header'
import { tracksArray } from './mockdata'
import SearchResults from './components/SearchResults'
import Playlist from './components/Playlist'

function App() {
  const [tracks, setTracks] = useState(tracksArray)

  return (
    <>
      <Header />
      <main>
        <SearchResults />
        <Playlist />
      </main>
    </>
  )
}

export default App
