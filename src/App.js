import './App.css';
import './index.css';
import NavBar from './components/NavBar';
import CardWidget from './components/CardWidget';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePageContainer from './components/HomePageContainer';
import NosotrosPageContainer from './components/NosotrosPageContainer';
import CarruselContainer from './components/CarruselContainer';
import EscribenosContainer from './components/EscribenosContainer';
import ItemDetail from './components/ItemDetail';


function App() {
  return (
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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
