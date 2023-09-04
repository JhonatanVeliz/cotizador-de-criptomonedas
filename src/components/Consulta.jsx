import React from 'react';
import styled from '@emotion/styled';

const ContentInfo = styled.section`
  display: grid;
  padding: 2rem 0;
  gap: 2rem;
`;

const LayoutInfo = styled.article`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (max-width: 505px){
    flex-direction: column-reverse;
    align-items: center;
  }
`;

const InfoTitle = styled.h2`
  text-align: center;
  color: #ededed;
  font-size: 2.5rem;
`;

const ParagraphInfo = styled.p`
  color: #ededed;
  font-size: 1.8rem;
  line-height: 1.5;
  font-weight: 500;
`;

const Span = styled.span`
  font-weight: 200;
`;

const ImgInfo = styled.img`
  display: inline-block;
  width: auto;
  max-width: 15rem;
`;

const Consulta = ({ respuestaApi, tipoMoneda }) => {

  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = respuestaApi;

  return (
    <ContentInfo>
      <InfoTitle>{tipoMoneda}</InfoTitle>

      <LayoutInfo>
        <div>
          <ParagraphInfo>Precio: <Span>{PRICE}</Span></ParagraphInfo>
          <ParagraphInfo>Precio más alto del día: <Span>{HIGHDAY}</Span></ParagraphInfo>
          <ParagraphInfo>Precio más bajo del día: <Span>{LOWDAY}</Span></ParagraphInfo>
          <ParagraphInfo>Variacion ultimas horas: <Span>{CHANGEPCT24HOUR}</Span></ParagraphInfo>
          <ParagraphInfo>Última actualización: 
            <Span>{LASTUPDATE == 'Just now' ? ' Justo Ahora' : LASTUPDATE}</Span>
          </ParagraphInfo>
        </div>

        <ImgInfo src={`https://www.cryptocompare.com/${IMAGEURL}`}>
        </ImgInfo>
      </LayoutInfo>

    </ContentInfo>
  )
}

export default Consulta