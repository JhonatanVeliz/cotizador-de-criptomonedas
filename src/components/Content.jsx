import React from 'react'
import styled from '@emotion/styled';

import Fomulario from './Fomulario.jsx';
import Consulta from './Consulta.jsx';
import Spinner from "./Spinner.jsx";

const Title = styled.h1`
  font-size: 3rem;
  color: #ededed;
  text-transform: capitalize;
  text-align: center;
  line-height: 1.5;
`;

const Span = styled.span`
  padding-bottom: 1.8rem;
  border-bottom: 1rem solid #b01111;
  display: block;
  margin-bottom: 5rem;
`;

const Content = ({ respuestaApi, setConsultaMoneda, tipoMoneda, spinner }) => {
  return (
    <div>

      <Title>cotizador de criptmonedas en <Span>tiempo real</Span></Title>

      <Fomulario setConsultaMoneda={setConsultaMoneda} />

      {
        spinner && <Spinner />
      }

      {
        respuestaApi.isValid && 
        <Consulta respuestaApi={respuestaApi} tipoMoneda={tipoMoneda}/>
      }
    </div>
  )
}

export default Content