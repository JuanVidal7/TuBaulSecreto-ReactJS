import React from 'react'
import '../../css/style.css';
import {useHistory} from 'react-router-dom';

export default function Item({ data }) {

    const history = useHistory();
        
    return (
        <div className="col mb-4" style={{ marginTop: '50px' }}>
            <div className="card h-100 shadow p-3 mb-5 bg-white rounded" style={{ marginBottom: '0' }}>
                <img src={data.picture} alt={data.title} className="card-img-top" style={data.estilo} />
                <div className="card-body">
                    <h5 className="card-title">{data.title}</h5>
                    <h5 className="card-title" style={{position: 'absolute', bottom: '45px', left: '40%', fontWeight: 'bold'}}>$ {data.price}</h5>
                    <div className="container-fluid">
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <button onClick={() => history.push(`/llenatubaul/${data.id}`)} className="botonAgregarCarrito" style={{position: 'absolute', bottom: '0', width: '100%', borderRadius: '0'}}>Ver Detalle</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

