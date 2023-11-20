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
import Testimonials from './Components/Testimonials';
import Footer from './Components/Footer';
import MetaPixel from './Utils/MetaPixel';

function App() {  
  return (
    <>
      <Header />
      <MetaPixel />
      <Main />
      <LeadsForm />
      <Welcome />
      <Offers />
      <Testimonials />
      <Footer />
    </>
  )
}

export default App
