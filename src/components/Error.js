import React from 'react'
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const MensajeError = styled.div`
    background-color: #b7322C;
    padding: 1rem;
    color: #fff;
    font-size: 30px;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
`

const Error = ({mensaje}) => {
    return (
        <MensajeError>{mensaje}</MensajeError>
    )
}

Error.propTypes = {
    mensaje : PropTypes.string.isRequired
}

export default Error
