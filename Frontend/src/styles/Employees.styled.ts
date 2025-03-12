import { styled } from 'styled-components';

export const TableEmployees = styled.table`
    display: grid;
    border-collapse: collapse;
    min-width: 100%;
    grid-template-columns: 50px minmax(150px, 1.2fr) minmax(150px, 0.7fr) 120px repeat(4, minmax(100px, 0.6fr));
`;

export const CabinetItem = styled.span`
    margin-right: 10px; 
    white-space: nowrap; 
`;
