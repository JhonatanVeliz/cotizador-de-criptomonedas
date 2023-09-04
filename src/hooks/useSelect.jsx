import React, { useState } from 'react';
import styled from '@emotion/styled';

const FormLabel = styled.label`
    font-size: 2.5rem;
    color: #ededed;
    font-weight: 500;
`;

const FormSelect = styled.select`
    padding: 1.5rem;
    border: none;
    border-radius: 0.5rem;
    background-color: #5175f8;
    cursor: pointer;
    color: #ededed;
    text-transform: capitalize;
    font-size: 2rem;
`;

const FormSelectOption = styled.option`
    text-align: center;
    font-size: 1.8rem;
`;


const useSelect = (textLabel = '', forId = '', optionData = []) => {

    const [state, setState] = useState('seleccion');

    const Component = () => (
        <>
          <FormLabel htmlFor={forId}> {textLabel} </FormLabel>

          <FormSelect 
            defaultValue={state} 
            id={forId} 
            onChange={e => setState(e.target.value)}
          >
            <FormSelectOption value='seleccion' disabled>Seleccionar</FormSelectOption>
            {
              optionData.map( option => (
                <FormSelectOption key={option.id} value={option.id}>{option.name}</FormSelectOption>
              ))
            }
          </FormSelect>
        </>
    )

    return [ state, Component ];
}

export default useSelect;