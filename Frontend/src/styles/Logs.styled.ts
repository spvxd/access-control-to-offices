import { styled } from 'styled-components';

export const TableLogs = styled.table`
    display: grid;
    border-collapse: collapse;
    min-width: 100%;
    grid-template-columns: 70px repeat(5, minmax(150px, 1fr));
`;