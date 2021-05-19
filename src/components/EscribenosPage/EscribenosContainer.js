import React from 'react'
import '../../css/style.css';

export default function EscribenosContainer() {
    return (
        <section>
            <h1 className="main-section__title-contact_us">Escríbenos</h1>
            <p className="main-section__parrafo-contact_us">Puedes contactarnos a través del siguiente formulario</p>
            <div className="container">
                <form id="main-form" action="">
                    <input className="main-form__input" type="text" name="" id="nombre" placeholder="Ingresa tu nombre" />
                    <br />
                    <input className="main-form__input" type="email" name="" id="email" placeholder="Ingresa tu correo" />
                    <label className="main-form__label" htmlFor="estCivil">Estado Civil: </label>
                    <select className="main-form__select" name="" id="estCivil">
                        <option value="Seleccione">Seleccione</option>
                        <option value="Soltero">Soltero</option>
                        <option value="Casado">Casado</option>
                        <option value="Viudo">Viudo</option>
                        <option value="Divorciado">Divorciado</option>
                    </select>
                    <label className="main-form__label" htmlFor="news">¿Desea recibir Newsletter? <input type="checkbox" name=""
                        id="news" /></label>
                    <label className="main-form__label" htmlFor="coments">Mensaje: </label><textarea className="main-form__textarea"
                        name="" id="coments" cols="30" rows="5" placeholder="Déjanos tu mensaje"></textarea>

                    <input className="main-form__button-reset" type="reset" value="Limpiar Formulario" />
                    <input className="main-form__button-submit" type="submit" value="Enviar Mensaje" />
                </form>
            </div>
        </section>
    )
}
