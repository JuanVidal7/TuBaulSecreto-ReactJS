import React from 'react'
import '../css/style.css';
import LogoTBS from './TuBaulSecretoLogo.png';

export default function CarruselContainer() {
    return (
        <div className="carousel__align">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={LogoTBS} className="logoi" alt="TuBaulSecreto" />
                    </div>
                    <div className="carousel-item">
                        <img src={LogoTBS} className="logoi" alt="TuBaulSecreto" />
                    </div>
                    <div className="carousel-item">
                        <img src={LogoTBS} className="logoi" alt="TuBaulSecreto" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}
