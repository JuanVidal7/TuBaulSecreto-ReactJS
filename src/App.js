import './App.css';
import './index.css';
import NavBar from './components/NavBar/NavBar';
import CardWidget from './components/CardWidget/CardWidget';
import ItemListContainer from './components/LlenaTuBaulPage/ItemListContainer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePageContainer from './components/HomePage/HomePageContainer';
import NosotrosPageContainer from './components/NosotrosPage/NosotrosPageContainer';
import CarruselContainer from './components/Carrusel/CarruselContainer';
import EscribenosContainer from './components/EscribenosPage/EscribenosContainer';
import ItemDetail from './components/LlenaTuBaulPage/ItemDetail';
import Contexto from './components/CartContext/CartContext';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Contexto>
      <Router>
        <div className="App">
          <CardWidget />
          <NavBar />
          <CarruselContainer />

          <Switch>
            <Route exact path="/">
              <HomePageContainer />
            </Route>

            <Route path="/nosotros">
              <NosotrosPageContainer />
            </Route>

            <Route exact path="/llenatubaul">
              <ItemListContainer />
            </Route>

            <Route path="/llenatubaul/:productID">
              <ItemDetail />
            </Route>

            <Route path="/escribenos">
              <EscribenosContainer />
            </Route>

            <Route path="/cart">
              <Cart />
            </Route>

          </Switch>

        </div>
      </Router>
      <Footer />
    </Contexto>
  );
}

export default App;
