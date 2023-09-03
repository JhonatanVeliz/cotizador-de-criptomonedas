import { useEffect, useState } from 'react';

import Content from "./components/Content.jsx";
import Image from "./components/Image.jsx";

import styled from '@emotion/styled';

const Container = styled.main`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 5rem 0;
  gap: 4rem;

  @media screen and (min-width: 920px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: normal;

  }
`;

function App() {

  const [consultaMoneda, setConsultaMoneda] = useState(false);
  const [respuestaApi, setRespuestaApi] = useState({});
  const [spinner, setSpinner] = useState(false);

  const consultarApi = async ({moneda, criptomoneda}) => {
  
    try {
      setSpinner(true)
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
      const response = await fetch(url);
      const json = await response.json();
  
      if(!response.ok){throw Error ('Moneda no encontrada')}

      const data = json.DISPLAY[criptomoneda][moneda];
      data.isValid = true;
      setRespuestaApi(data);

      setSpinner(false)
    } catch (error) { console.log(error) }
  }
  

  useEffect(()=>{
    if(consultaMoneda){consultarApi(consultaMoneda)}
  }, [consultaMoneda]);

  return (
    <Container>

      <Image />
      <Content 
        respuestaApi={respuestaApi} 
        tipoMoneda={consultaMoneda.criptomoneda}
        setConsultaMoneda={setConsultaMoneda}
        spinner={spinner}
      />

    </Container>
  )
}

export default App
