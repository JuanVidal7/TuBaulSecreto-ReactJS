import React from 'react'
import '../../css/style.css';

export default function NosotrosPageContainer() {
    return (
        <section>
            <h1 className="main-section__title" style={{textAlign: "left", fontWeight: "bold"}}>Nosotros</h1>
            <article>
                <p className="main-article__parrafo-gral" style={{textAlign: "left"}}>Somos una empresa naciente con ideas originales para sorprender a esa
                persona especial. <br /> Nacimos en la ciudad de Itagui, en el 2019, con la idea de reinventar
                el concepto de regalos especiales y diferentes para aquellas personas especiales.</p>
                <br />
                <h2 style={{textAlign: "left", fontWeight: "bold"}}>Misión</h2>
                <p className="main-article__parrafo-gral" style={{textAlign: "left"}}>Nuestra Misión es dar a nuestros clientes las mejor experiencia en lo
                que a un regalo
                especial se refiere, y de esa forma puedan sorprender a esa persona especial con un presente poco común.
                    </p>
                <br />
                <h2 style={{textAlign: "left", fontWeight: "bold"}}>Visión</h2>
                <p className="main-article__parrafo-gral" style={{textAlign: "left"}}>Nuestra Visión es, en el año 2021, poder ser reconocidos como un lugar
                en el cual se puede encontrar
                algo diferente para esa persona especial.
                    </p>
            </article>
        </section>
    )
}
