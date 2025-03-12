import { ContentContainer, ContentHeader, Button } from '../styles/Content.styled'
import { Form, FormRow, LabelForm, InputForm } from '../styles/Forms.styled';
import { getUserById, createUser, updateUser } from '../api/requests';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const UpdateEmployee = () => {

    const [user, setUser] = useState({
        fio: '',
        position: '',
        phone: ''
    });

    const navigate = useNavigate();

    const [searchParams, setSearchParams] = useSearchParams();

    const userId = searchParams.get("id") || 0;

    useEffect(() => {

        getUserById(userId).then((response) => {
            console.log(response.data)
            setUser(response.data)
        })
    }, [])


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(user);

        updateUser(user).then((response) => {
            alert(JSON.stringify(response.data.message))
            navigate("/");
        })
    }

    return (
        <ContentContainer>
            <ContentHeader>Обновление данных сотрудника</ContentHeader>
            <Form onSubmit={handleSubmit}>
                <FormRow>
                    <LabelForm>ФИО</LabelForm>
                    <InputForm type='text' required
                               value={user.fio}
                               onChange={e => {
                                   setUser({
                                       ...user, fio: e.target.value
                                   })
                               }}
                    ></InputForm>
                </FormRow>
                <FormRow>
                    <LabelForm>Должность</LabelForm>
                    <InputForm type='text' required
                               value={user.position}
                               onChange={e => {
                                   setUser({
                                       ...user, position: e.target.value
                                   })
                               }}
                    ></InputForm>
                </FormRow>
                <FormRow>
                    <LabelForm>Телефон</LabelForm>
                    <InputForm type='number' required
                               value={user.phone}
                               onChange={e => {
                                   setUser({
                                       ...user, phone: e.target.value
                                   })
                               }}
                    ></InputForm>
                </FormRow>
                <Button type='submit'>Обновить</Button>
            </Form>
        </ContentContainer>
    )
}

export { UpdateEmployee };