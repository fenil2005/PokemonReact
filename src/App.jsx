import './App.css'
import { Navbar } from './components/Navbar'
import './components/Navbar.css'
import './components/SearchBar.css'
import './components/PokemonCard.css'
import './components/Pagination.css'
import './components/PokemonList.css'
import { SearchBar } from './components/SearchBar'
import { PokemonCard } from './components/PokemonCard'
import { Pagination } from './components/Pagination'
import { PokemonList } from './components/PokemonList'
import { Modal } from './components/Modal'
import { Route, Routes } from 'react-router-dom'
import { Routerfenil } from './components/Routerfenil'
function App() {


  return (
    <>
      <Navbar />
      <div className='container'>
        <PokemonList />
        <Pagination />
      </div>
      {/* <Routes>

        <Route path='about-us' element={<Routerfenil />} />

        <Modal />
      </Routes> */}
    </>
  )
}

export default App
