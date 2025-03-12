import { ContentContainer, ContentHeader, Button } from '../styles/Content.styled'
import { Form, FormRow, LabelForm, InputForm } from '../styles/Forms.styled';
import { createUser } from '../api/requests';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateEmployee = () => {

    const [user, setUser] = useState({
        fio: '',
        position: '',
        phone: ''
    });

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(user);

        createUser(user).then((response) => {
            //alert(JSON.stringify(response.data.message))
            navigate("/");
        })
    }

    return (
        <ContentContainer>
            <ContentHeader>Добавление нового сотрудника</ContentHeader>
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
                <Button type='submit'>Добавить</Button>
            </Form>
        </ContentContainer>
    )
}

export { CreateEmployee };