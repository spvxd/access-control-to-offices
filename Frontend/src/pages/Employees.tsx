import { useEffect, useState } from 'react';
import { ContentContainer, ContentHeader, HeaderContainer, AddButton, Button, TableHead, TableRow, TableHeadRow, TableBody, TableCell } from '../styles/Content.styled.ts'
import { TableEmployees, CabinetItem } from '../styles/Employees.styled.ts';
import { getAllUsers, deleteUser, createLandmarksForUser } from '../api/requests';
import { useNavigate } from 'react-router-dom';

const Employees = () => {

    const [employees, setEmployees] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        getAllUsers().then((res) => {
            setEmployees(res.data);
            console.log(res.data);

        });
    }, [])

    const handleUpdateEmployees = (id) => {
        navigate("/update-employee?id=" + id);
    }

    const handleDelete = (id) => {
        deleteUser(id).then((response) => {
            alert(JSON.stringify(response.data.message));
            getAllUsers().then((res) => {
                setEmployees(res.data);
            });
        })
    }

    const handleAddLandmarks = (id) => {
        alert(id)
        createLandmarksForUser(id).then(response => {

            alert(response.data.message)
        })
    }

    const handleChangeCabinets = (id) => {
        navigate("/choice-cabinets?user_id=" + id);
    }

    return (
        <ContentContainer>
            <ContentHeader>Сотрудники</ContentHeader>
            <HeaderContainer>
                <AddButton onClick={() => navigate("/create-employee")}>Добавить сотрудника</AddButton>
            </HeaderContainer>
            <TableEmployees>
                <TableHead>
                    <TableRow>
                        <TableHeadRow>ID</TableHeadRow>
                        <TableHeadRow>ФИО</TableHeadRow>
                        <TableHeadRow>Должность</TableHeadRow>
                        <TableHeadRow>Телефон</TableHeadRow>
                        <TableHeadRow>Кабинеты</TableHeadRow>
                        <TableHeadRow>Пользователь</TableHeadRow>
                        <TableHeadRow>Точки</TableHeadRow>
                        <TableHeadRow>Управление</TableHeadRow>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        employees.map(employee => {
                            return (
                                <TableRow key={"employee-" + employee.id}>
                                    <TableCell>{employee.id}</TableCell>
                                    <TableCell><Button onClick={() => handleUpdateEmployees(employee.id)}>{employee.fio}</Button></TableCell>
                                    <TableCell>{employee.position}</TableCell>
                                    <TableCell>{employee.phone}</TableCell>
                                    <TableCell>
                                        {employee.userCabinets.map(cabinet => {
                                            return (
                                                <CabinetItem key={cabinet.cabinet.id}>{cabinet.cabinet.number} &nbsp;</CabinetItem>
                                            )
                                        })}
                                    </TableCell>
                                    <TableCell>
                                        <Button
                                            onClick={() => handleChangeCabinets(employee.id)}>Открыть</Button>
                                    </TableCell>
                                    {
                                        employee.landmarks === null ?
                                            <>
                                                <TableCell><Button
                                                    onClick={() => handleAddLandmarks(employee.id)}>Добавить</Button></TableCell>
                                            </>
                                            :
                                            <>
                                                <TableCell><Button onClick={() => handleAddLandmarks(employee.id)}>Обновить</Button></TableCell>
                                            </>
                                    }
                                    <TableCell><Button
                                        onClick={() => handleDelete(employee.id)}>Удалить</Button></TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </TableEmployees>
        </ContentContainer>
    )
}

export { Employees };