import { useEffect, useState } from 'react';
import { ContentContainer, ContentHeader, HeaderContainer, AddButton, TableHead, TableRow, TableHeadRow, TableBody, TableCell } from '../styles/Content.styled.ts'
import { TableCabinets } from '../styles/Cabinets.styled';
import { getAllCabinets } from '../api/requests';
import { useNavigate } from 'react-router-dom';

const Cabinets = () => {

    const [cabinets, setCabinets] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        getAllCabinets().then((res) => {
            setCabinets(res.data);
        });
    }, [])

    return (
        <ContentContainer>
            <ContentHeader>Кабинеты</ContentHeader>
            <HeaderContainer>
                <AddButton onClick={() => navigate("/create-cabinet")}>Добавить кабинет</AddButton>
            </HeaderContainer>
            <TableCabinets>
                <TableHead>
                    <TableRow>
                        <TableHeadRow>ID</TableHeadRow>
                        <TableHeadRow>Этаж</TableHeadRow>
                        <TableHeadRow>Номер кабинета</TableHeadRow>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        cabinets.map(cabinet => {
                            return (
                                <TableRow key={"cabinet-" + cabinet.id}>
                                    <TableCell>{cabinet.id}</TableCell>
                                    <TableCell>{cabinet.floor}</TableCell>
                                    <TableCell>{cabinet.number}</TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </TableCabinets>
        </ContentContainer>
    )
}

export { Cabinets };