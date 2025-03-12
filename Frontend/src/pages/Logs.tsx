import { useEffect, useState } from 'react';
import { ContentContainer, ContentHeader, TableHead, TableRow, TableHeadRow, TableBody, TableCell } from '../styles/Content.styled'
import { TableLogs } from '../styles/Logs.styled';
import { getLogs } from '../api/requests';

const Logs = () => {

    const [logs, setLogs] = useState([]);

    // useEffect(() => {
    //     getLogs().then((res) => {
    //         setLogs(res.data.logs);
    //     });
    // }, [])

    return (
        <ContentContainer>
            <ContentHeader>Логи</ContentHeader>
            <TableLogs>
                <TableHead>
                    <TableRow>
                        <TableHeadRow>ID</TableHeadRow>
                        <TableHeadRow>User ID</TableHeadRow>
                        <TableHeadRow>Номер кабинета</TableHeadRow>
                        <TableHeadRow>Дата</TableHeadRow>
                        <TableHeadRow>Статус</TableHeadRow>
                        <TableHeadRow>Фото</TableHeadRow>
                    </TableRow>
                </TableHead>
                <TableBody>

                </TableBody>
            </TableLogs>
        </ContentContainer>
    )
}

export { Logs };