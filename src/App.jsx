
import {Navbar, Header, Article, Catalogue, Newsletter, Footer} from './components';
import './App.css';

const App = () => {
  return (
    <div>
        <div className="background-img">
            <Navbar />
            <Header />
        </div>
        <Article />
        <Catalogue />
        <Newsletter />
        <Footer />
    </div>
  )
}

export default App