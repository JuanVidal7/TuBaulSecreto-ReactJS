import React from 'react'
import '../../css/style.css';
import Baulito from './../img/baul128.png';

export default function HomePageContainer() {
    return (
        <section>
            <article className="main-article">
                <p className="main-article__parrafo">Tu Baúl Secreto pretende ayudarte con la elección de un regalo
                especial y
                diferente para esa persona especial.</p>
                <div className="container">
                    <table className="table" align="center">
                        <thead className="thead-dark">
                            <tr>
                                <th>Tamaño</th>
                                <th>Características (Largo, Ancho, Alto)</th>
                                <th>¡Elige el tuyo!</th>
                            </tr>
                            <tr>
                                <td>Pequeño</td>
                                <td>
                                    <ul>
                                        <li>20x15x15</li>
                                        <li>Hasta 5 productos</li>
                                        <li>Candado de clave</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li><a href="/#"><img className="table__img" src={Baulito} alt="" /></a></li>
                                        <li>Elegir este Baúl</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td>Mediano</td>
                                <td>
                                    <ul>
                                        <li>30x20x20</li>
                                        <li>Hasta 10 productos</li>
                                        <li>Cerradura de clave</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li><a href="/#"><img className="table__img" src={Baulito} alt="" /></a></li>
                                        <li>Elegir este Baúl</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td>Grande</td>
                                <td>
                                    <ul>
                                        <li>40x25x25</li>
                                        <li>Hasta 15 productos</li>
                                        <li>Cerradura de 3 perillas</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li><a href="/#"><img className="table__img" src={Baulito} alt="" /></a></li>
                                        <li>Elegir este Baúl</li>
                                    </ul>
                                </td>
                            </tr>
                        </thead>
                    </table>
                </div>
            </article>
        </section>
    )
}
