import { styled } from 'styled-components';

export const TableCabinets = styled.table`
    display: grid;
    border-collapse: collapse;
    min-width: 100%;
    grid-template-columns: 70px repeat(2, 250px);
`;