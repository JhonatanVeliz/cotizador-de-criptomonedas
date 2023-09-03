import React from 'react';
import styled from '@emotion/styled';

const MessageError = styled.p`
    padding: 0;
    background-color: #ededed;
    color: #222;
    position: relative;
    overflow: hidden;
    border-radius: .5rem;
    text-align: center;
    font-weight: 700;
    font-size: 1.8rem;
    margin-bottom: 2rem;
    text-transform: uppercase;
    animation: appear .5s alternate forwards;
    height: 0;

    &::before{
        content: '';
        height: 100%;
        width: 1.5rem;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #b01111;
    }

    @keyframes appear {
        from{
            height: auto;

            opacity: 0;
        }
        to{
            height: auto;
            padding: 1.7rem;
            opacity: 1;
        }
    }
`;

const Error = ({ children }) => {
  return (
    <MessageError>{children}</MessageError>
  )
}

export default Error