import React from 'react';
//Tipos de los PROPS que va recibit el componente
import PropTypes from 'prop-types';

const PrimeraApp = ({saludo, subtitulo}) => {
    
    const objeto = {
        nombre : 'Rene',
        edad : 22,
        apellidos : 'Lozano Ramos',
    }

    return (
        <>
            <h1>{saludo}</h1>
            <pre>{ JSON.stringify(objeto,null,3) }</pre>
            <p>{subtitulo}</p>
        </>
    );
}

PrimeraApp.propTypes = {
    saludo : PropTypes.string.isRequired,
};

PrimeraApp.defaultProps = {
    subtitulo : 'No tiene subtitulo :c',
}

export default PrimeraApp;