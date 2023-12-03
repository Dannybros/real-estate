import { BrowserRouter , Route, Routes } from "react-router-dom"
import Nav from './components/Nav/Nav';
import './App.css'
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App
