import './App.css'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Project from './pages/Project'
import Home from './pages/Home'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import ErrorPage from './pages/ErrorPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/project' element={<Project />}></Route>
          <Route path='/*' element={<ErrorPage />}></Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
