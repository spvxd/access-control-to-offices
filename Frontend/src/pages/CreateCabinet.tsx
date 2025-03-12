import { ContentContainer, ContentHeader, Button } from '../styles/Content.styled'
import { Form, FormRow, LabelForm, InputForm } from '../styles/Forms.styled';
import { createCabinet } from '../api/requests';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateCabinet = () => {

    const [cabinet, setcabinet] = useState({
        number: '',
        floor: null
    });

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(cabinet);

        createCabinet(cabinet).then((response) => {
            alert(JSON.stringify(response.data.message))
            navigate("/cabinets");
        })
    }

    return (
        <ContentContainer>
            <ContentHeader>Добавление нового кабинета</ContentHeader>
            <Form onSubmit={handleSubmit}>
                <FormRow>
                    <LabelForm>Номер кабинета</LabelForm>
                    <InputForm type='text' required
                               value={cabinet.number}
                               onChange={e => {
                                   setcabinet({
                                       ...cabinet, number: e.target.value
                                   })
                               }}
                    ></InputForm>
                </FormRow>
                <FormRow>
                    <LabelForm>Этаж</LabelForm>
                    <InputForm type='number' required
                               value={cabinet.floor}
                               onChange={e => {
                                   setcabinet({
                                       ...cabinet, floor: e.target.value
                                   })
                               }}
                    ></InputForm>
                </FormRow>
                <Button type='submit'>Добавить</Button>
            </Form>
        </ContentContainer>
    )
}

export { CreateCabinet };