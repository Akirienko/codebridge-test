import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home/home'
import ArticlePage from './pages/Article/Article'
import './App.scss'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/article/:id" element={<ArticlePage />} />
      </Routes>
    </div>
  )
}

export default App