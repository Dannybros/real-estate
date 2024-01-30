import './App.css'
import { BrowserRouter , Route, Routes, Navigate } from "react-router-dom"
import Nav from './layout/Nav/Nav';
import Home from "./pages/Home/Home";
import Footer from "./layout/Footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Explore from './pages/Explore/Explore';
import { useAppContext } from './context/AppContext';
import Detail from './pages/Detail/Detail';
import About from './pages/About/About';

function App() {
  const {isFilterModalOpen} = useAppContext();

  const RedirectToExplorePage = () => {
    return <Navigate to="/explore/page/1" replace={true} />;
  };

  return (
    <div className={`App ${isFilterModalOpen && 'modal-open'} font-default`}>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/explore" element={<RedirectToExplorePage/>} />
          <Route path="/explore/page/:page" element={<Explore />} />
          <Route path='/property/:id' element={<Detail/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter >
    </div>
  )
}

export default App
