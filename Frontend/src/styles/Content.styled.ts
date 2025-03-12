import { styled } from 'styled-components'

export const ContentContainer = styled.div`
    width: 80vw;
    background-color: ${(props) => props.theme.colors.backgroundDark};
    color: ${(props) => props.theme.colors.textLight};
    padding: 20px;
`
export const HeaderContainer = styled.div`
    display: flex;
    width: 100%;
    gap: 20px;
    margin-bottom: 20px;
`

export const ContentHeader = styled.h1`
    font-size: 25px;
`

export const Content = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
`

export const AddButton = styled.button`
    color: ${(props) => props.theme.colors.textLight};
    background-color: ${(props) => props.theme.colors.secondDark};
`

export const Button = styled.button`
    color: ${(props) => props.theme.colors.textLight};
    background-color: ${(props) => props.theme.colors.secondDark};
`

export const TableHead = styled.thead`
    display: contents;
`;

export const TableHeadRow = styled.th`
    padding: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    position: sticky;
    top: 0;
    background:${(props) => props.theme.colors.mainColor};
    text-align: left;
    font-weight: normal;
    font-size: 1.1rem;
`;

export const TableBody = styled.tbody`
    display: contents;
`;

export const TableCell = styled.td`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start; 
    padding: 10px 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal; 
    word-wrap: break-word;
    overflow-wrap: break-word; 
    & button {
        width: 100%;
    }
`;

export const TableRow = styled.tr`
    display: contents;
    &:nth-child(even) td {
        background-color: ${(props) => props.theme.colors.totalDark};
    }
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
    appearance: none;
    width: 30px;
    height: 30px;
    border: 2px solid ${(props) => props.theme.colors.mainColor};
    border-radius: 4px;
    background-color: ${(props) => props.theme.colors.secondDark};
    cursor: pointer;
    transition: background 0.3s;

    &:checked {
        background-color: ${(props) => props.theme.colors.mainColor};
        border-color: ${(props) => props.theme.colors.mainColor};
    }
`;
