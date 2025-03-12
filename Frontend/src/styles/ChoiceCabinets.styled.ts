import { styled } from 'styled-components';

export const TableChoiceCabinets = styled.table`
    display: grid;
    border-collapse: collapse;
    min-width: 100%;
    grid-template-columns: 70px 100px repeat(2, 250px);
`;

export const FloorChoice = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
`

export const Label = styled.label`
    margin: 0 5px;
`