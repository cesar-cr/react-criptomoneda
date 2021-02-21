import React from 'react'
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Resultado = styled.div`
    color: #FFF;
    margin-top: 10px;
`;

const Info = styled.p`
    font-size: 18px;

    span {
        font-weight: bold;
    }
`

const Precio = styled.span`
    font-size: 30px;
`

const Cotizacion = ({ resultado }) => {
    if (Object.keys(resultado).length === 0) return null;
    return (
        <Resultado>
            <Precio>El precio es: <span>{resultado.PRICE}</span></Precio>
            <Info>El precio más alto del día: <span>{resultado.HIGHDAY}</span></Info>
            <Info>El precio más bajo del dia: <span>{resultado.LOWDAY}</span></Info>
            <Info>Ultimas 24 horas: <span>{resultado.CHANGEPCT24HOUR}</span></Info>
            <Info>Ultima actualización: <span>{resultado.LASTUPDATE}</span></Info>
        </Resultado>
    )
}

Cotizacion.propTypes = {
    resultado : PropTypes.object.isRequired
}

export default Cotizacion;
