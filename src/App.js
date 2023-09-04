import './App.css';

// imported Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Imported Component's Page
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Shortener from './Components/Shortener/Shortener';
import Statistics from './Components/Statistics/Statistics';
import Boost from './Components/Boost/Boost';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Shortener/>
      <Statistics/>
      <Boost/>
      <Footer/>


    </div>
  );
}

export default App;
