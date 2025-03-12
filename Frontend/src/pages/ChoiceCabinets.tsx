import {useEffect, useState, useCallback, useMemo} from 'react';
import React from 'react';
import {
    ContentContainer,
    HeaderContainer,
    ContentHeader,
    Checkbox,
    AddButton,
    TableHead,
    TableRow,
    TableHeadRow,
    TableBody,
    TableCell
} from '../styles/Content.styled';
import {TableChoiceCabinets, FloorChoice, Label} from '../styles/ChoiceCabinets.styled';
import {getAllCabinets, updateCabinetsForUser, getCabinetForUser} from '../api/requests';
import {useNavigate, useSearchParams} from 'react-router-dom';

const ChoiceCabinets = () => {
    const [cabinets, setCabinets] = useState([]);
    const [chosenCabinets, setChosenCabinets] = useState([]);
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const userId = searchParams.get("user_id") || 0;

    useEffect(() => {
        getAllCabinets().then((res) => {
            setCabinets(res.data);
            getCabinetForUser(userId).then((res) => {
                console.log(res.data)
                const tmpCabinets = [];
                res.data.map(cabinet => {
                    tmpCabinets.push(cabinet.id);
                })
                setChosenCabinets(tmpCabinets);
            })
        });
    }, []);

    const handleSave = useCallback(() => {
        updateCabinetsForUser(userId, chosenCabinets).then((res) => {
            alert(res.data.message);
        });
    }, [userId, chosenCabinets]);

    const handleCheckboxChange = useCallback((cabinetId) => {
        setChosenCabinets(prev =>
            prev.includes(cabinetId) ? prev.filter(id => id !== cabinetId) : [...prev, cabinetId]
        );
    }, []);

    return (
        <ContentContainer>
            <Header/>
            <HeaderContainer>
                <AddButton onClick={handleSave}>Сохранить</AddButton>
                <FloorSelection/>
            </HeaderContainer>
            <CabinetTable
                cabinets={cabinets}
                chosenCabinets={chosenCabinets}
                onCheckboxChange={handleCheckboxChange}
            />
        </ContentContainer>
    );
};

const Header = React.memo(() => <ContentHeader>Выбор кабинетов</ContentHeader>);

const FloorSelection = React.memo(() => (
    <FloorChoice>
        <Label>Доступ на этажи:</Label>
        <Label>1</Label>
        <Checkbox type="checkbox"/>
        <Label>2</Label>
        <Checkbox type="checkbox"/>
        <Label>3</Label>
        <Checkbox type="checkbox"/>
        <Label>4</Label>
        <Checkbox type="checkbox"/>
    </FloorChoice>
));

const CabinetTable = React.memo(({cabinets, chosenCabinets, onCheckboxChange}) => {
    const checkedCabinetsSet = useMemo(() => new Set(chosenCabinets), [chosenCabinets]);

    return (
        <TableChoiceCabinets>
            <TableHead>
                <TableRow>
                    <TableHeadRow>ID</TableHeadRow>
                    <TableHeadRow>Доступ</TableHeadRow>
                    <TableHeadRow>Этаж</TableHeadRow>
                    <TableHeadRow>Номер кабинета</TableHeadRow>
                </TableRow>
            </TableHead>
            <TableBody>
                {cabinets.map(cabinet => (
                    <CabinetRow
                        key={cabinet.id}
                        cabinet={cabinet}
                        checked={checkedCabinetsSet.has(cabinet.id)}
                        onCheckboxChange={onCheckboxChange}
                    />
                ))}
            </TableBody>
        </TableChoiceCabinets>
    );
});

const CabinetRow = React.memo(({cabinet, checked, onCheckboxChange}) => {
    return (
        <TableRow>
            <TableCell>{cabinet.id}</TableCell>
            <TableCell>
                <Checkbox
                    type="checkbox"
                    checked={checked}
                    onChange={() => onCheckboxChange(cabinet.id)}
                />
            </TableCell>
            <TableCell>{cabinet.floor}</TableCell>
            <TableCell>{cabinet.number}</TableCell>
        </TableRow>
    );
});

export {ChoiceCabinets};
