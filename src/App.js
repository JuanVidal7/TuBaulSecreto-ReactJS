import './App.css';
import './index.css';
import NavBar from './components/NavBar';
import CardWidget from './components/CardWidget';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';


function App() {
  return (
    <div className="App">
     <CardWidget />
     <NavBar />
     <ItemListContainer />
     <ItemCount />
    </div>
  );
}

export default App;
