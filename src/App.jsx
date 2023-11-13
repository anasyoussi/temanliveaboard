import './App.css' 
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import 'swiper/css/scrollbar';  
import 'swiper/css/parallax';  
import Header from './Components/Header'
import Main from './Components/Main'
import LeadsForm from './Components/LeadsForm';
import Welcome from './Components/Welcome';
import Offers from './Components/Offers';
import Footer from './Components/Footer';

function App() {  
  return (
    <>
      <Header />
      <Main />
      <LeadsForm />
      <Welcome />
      <Offers />
      <Footer />
    </>
  )
}

export default App
