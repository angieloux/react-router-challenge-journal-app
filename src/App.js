import React, { useState } from 'react'
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Home from './components/Home'
import NewEntry from './components/NewEntry'
import CategorySelection from './components/CategorySelection'
import NotFound from './components/NotFound'

const App = () => {
  const defaultCategories = ["food", "coding", "other"]
  const [categories, setCategories] = useState(defaultCategories)
  const [entries, setEntries] = useState("")

  const addEntryToJournal = (newEntry) => {
    const updatedEntries = [...entries, newEntry]
    setEntries(updatedEntries)
  }

  return (
    <div >
      <Router>
        <nav>
          <ul>
        <li><Link to="/">home</Link></li>
        <li><Link to="/new/entry/:id">new entry</Link></li>
        <li><Link to="category">category selection</Link></li>
        </ul>
        </nav>
        <Routes>
        <Route exact path='/' element={<Home entries={entries}/>}/>
        <Route path='/entry/new/:id' element={<NewEntry categories={categories} addEntryToJournal={addEntryToJournal}/>}/>
        <Route path='category' element={<CategorySelection categories={categories}/>} />
        <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
