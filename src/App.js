import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Experice from './components/Experience';
import Services from './components/Services';
import Contactus from './components/Contactus';
import Aboutme from './components/Aboutme';
import Footer from './components/Footer';
function App() {
  return (
    // React Fragment ve ya JSX Fragment
    <div className='container-fluid'>
    <Navbar />
    <Header />
    <Aboutme />
    <Services />
    <Experice />
    <Contactus />
    <Footer />
    </div>
  );
}

export default App;
