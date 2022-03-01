import './App.css';
import Explore from './components/Explore/Explore';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Passion from './components/Passion/Passion';
import Search from './components/Search/Search';
import Sub from './components/Sub/Sub';
import TopTour from './components/TopTour/TopTour';
import Trend from './components/Trend/Trend';
import Homepage from './Home/Homepage';
import Banner from './Pages/Banner/Banner';

function App() {
    return (
        <div className='App'>
            <Homepage />
            <Banner />
            <Search />
            <Features />
            <TopTour />
            <Explore />
            <Trend />
            <Passion />
            <Sub />
            <Footer />
        </div>
    );
}

export default App;
