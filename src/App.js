import './App.css';
import './index.css';
import NavBar from './components/NavBar';
import CardWidget from './components/CardWidget';
import ItemListContainer from './components/ItemListContainer';



function App() {
  return (
    <div className="App">
      <CardWidget />
      <NavBar />
      <ItemListContainer />
    </div>
  );
}

export default App;
