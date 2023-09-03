import React from 'react'
import styled from '@emotion/styled';

import ImagePrincipal from '../assets/img_cripto.png';

const ImgComponent = styled.img`
    width: 100%;
    max-width: 20rem;

    @media screen and (min-width: 920px) {
        max-width: 100%;
    }
`;

const Image = () => {
  return (
    <ImgComponent
        src={ImagePrincipal}
        alt='imagen principal de criptomonedas'
    >
    </ImgComponent>
  )
}

export default Image
