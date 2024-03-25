import './App.css';
import './index.css';
import NavBar from './components/NavBar/NavBar';
import CardWidget from './components/CardWidget/CardWidget';
import ItemListContainer from './components/LlenaTuBaulPage/ItemListContainer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CarruselContainer from './components/Carrusel/CarruselContainer';
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
            <Route exact path="/llenatubaul">
              <ItemListContainer />
            </Route>

            <Route path="/llenatubaul/:productID">
              <ItemDetail />
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
