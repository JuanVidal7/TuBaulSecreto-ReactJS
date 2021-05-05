import llave from './llave.png';
import '../css/style.css';
import {useHistory} from 'react-router-dom';


function App() {
    let history = useHistory();
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" style={{justifyContent: 'center'}} id="navbarText">
                <div className="menu">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => history.push("/")} href="#/">Home<span className="sr-only">(current)</span></a>
                        </li>
                        <img className="key" src={llave} alt="Key" />
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => history.push("/nosotros")} href="#/">Nosotros<span className="sr-only">(current)</span></a>
                        </li>
                        <img className="key" src={llave} alt="Key" />
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => history.push("/llenatubaul")} href="#/">Llena Tu Baúl<span className="sr-only">(current)</span></a>
                        </li>
                        <img className="key" src={llave} alt="Key" />
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => history.push("/escribenos")} href="#/">Escríbenos<span className="sr-only">(current)</span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default App;
