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
import FilterModal from './pages/Explore/FilterModal';
import Map from './components/Map/Map';
import SignIn from './pages/SignIn/SignIn';
import Request from './components/Request/Request';

function App() {
  const {isModalOpen, modalType} = useAppContext();

  const RedirectToExplorePage = () => {
    return <Navigate to="/explore/page/1" replace={true} />;
  };

  return (
    <div className={`App ${isModalOpen && 'modal-open'} font-default`}>
      <BrowserRouter>
        {/* nav */}
        <Nav/>

        {/* pages */}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/explore" element={<RedirectToExplorePage/>} />
          <Route path="/explore/page/:page" element={<Explore />} />
          <Route path='/property/:id' element={<Detail/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>

        {/* modal */}
        <FilterModal type={modalType}/>
        <Map type={modalType}/>
        <SignIn type={modalType}/>
        <Request type={modalType}/>

        {/* footer */}
        <Footer/>
      </BrowserRouter >
    </div>
  )
}

export default App
