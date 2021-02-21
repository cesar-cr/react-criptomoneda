import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import axios from 'axios';

import useMoneda from '../hooks/useMoneda';
import useCriptomoneda from '../hooks/useCriptomoneda';
import Error from './Error';

const Boton = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size:20px;
    padding: 10px;
    background-color: #66A2FE;
    border: none;
    width: 100%;
    color: #fff;
    transition: background-color .3s ease;

    &:hover{
        background-color: #326AC0;
        cursor: pointer;
    }
`

const Formulario = ({guardarMoneda, guardarCriptomoneda}) => {

    // useState de listado de criptomonedas
    const [listacripto, guardarCriptomonedas] = useState([]);
    const [error, guardarError] = useState(false);

    const MONEDAS = [
        { codigo: 'USD', nombre: 'Dollar US' },
        { codigo: 'MXN', nombre: 'Peso Mexicano' },
        { codigo: 'EUR', nombre: 'Euro' },
        { codigo: 'GBP', nombre : 'Libra Esterlina'}
    ]

    // utilizar useMoneda 
    const [moneda, SelectMonedas] = useMoneda('Elige tu moneda', '', MONEDAS);
    // utilizar useCriptomoneda
    const [criptomoneda, SelectCripto] = useCriptomoneda('Elige tu criptomoneda', '', listacripto);
    // ejecutar llamado a la api
    useEffect(() => {
        const consultAPI = async () => {
            const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;
            const resultado = await axios.get(url);
            guardarCriptomonedas(resultado.data.Data);
        }  
        consultAPI();
    }, []);

    const cotizarMoneda = (e) => {
        e.preventDefault();
        // validar
        if (moneda === '' || criptomoneda === '') {
            guardarError(true);
            return;
        }
        guardarError(false);
        // guardar state
        guardarMoneda(moneda);
        guardarCriptomoneda(criptomoneda);
    }

    return (
        <form
            onSubmit={cotizarMoneda}>
            {error && <Error mensaje="Todos los campos son obligatorios"/>}
            <SelectMonedas />
            <SelectCripto />
            <Boton
                type="submit"
                value="Calcular"/>
        </form>
    )
}

Formulario.propTypes = {
    guardarMoneda: PropTypes.func.isRequired,
    guardarCriptomoneda: PropTypes.func.isRequired
}

export default Formulario
