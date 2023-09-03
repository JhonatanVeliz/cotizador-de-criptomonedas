import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

import Error from "./Error.jsx";

import useSelect from "../hooks/useSelect.jsx";
import { initValMonedas } from "../data/db.js";

const Form = styled.form`
    display: grid;
    gap: 2rem;
`;

const FormBtnSubmit = styled.input`
    padding: 1.5rem;
    border: none;
    border-radius: .5rem;
    color: #ededed;
    background-color: #ac45d8;
    cursor: pointer;
    transition: .3s ease-out;
    font-size: 2.3rem;
    text-transform: uppercase;

    &:hover{
      opacity: .9;
    }
`;

const Fomulario = ({ setConsultaMoneda }) => {

  const [listadoCriptos, setListadoCriptos] = useState([]);

  const [ moneda, SelectMonedas ] = useSelect('Elige tu Moneda','select-moneda',initValMonedas);
  const [ criptomoneda, SelectCriptos ] = useSelect('Elige tu Cripto Moneda','select-cripto',listadoCriptos);

  const [messageError, setMessageError] = useState(false);

  const getDataCoints = async () => {

    try {
      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD';
      const response = await fetch(url);
      const json = await response.json();
  
      if(!response.ok) throw error (response.ok);

      const listCriptos = json.Data.map( ({CoinInfo : cripto}) => {
        return { name : cripto.FullName, id   : cripto.Name };
      });

      setListadoCriptos(listCriptos);

    } catch (error) {console.log('error al llamar la API', error)}

  }

  const handleSubmit = e => {
    e.preventDefault();

    if([moneda, criptomoneda].includes('seleccion')){
      return setMessageError(true);
    }

    setMessageError(false);
    setConsultaMoneda({moneda, criptomoneda});
  }
  
  useEffect( ()=> {getDataCoints()}, []);
  
  return (
    <>
      {messageError && <Error children='porfavor completa la selección' />}

      <Form onSubmit={handleSubmit}>

          <SelectMonedas />

          <SelectCriptos />

          <FormBtnSubmit 
            type='submit'
            value='calcular'
          />
      </Form>
    </>
  )
}

export default Fomulario