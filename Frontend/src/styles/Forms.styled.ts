import { styled } from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 50%;

`

export const FormRow = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 20px;
`

export const InputForm = styled.input`
    /* display: flex; */
    padding: 8px;
    border: 1px solid ${(props) => props.theme.colors.dark};
    color: ${(props) => props.theme.colors.textLight};
    background-color: ${(props) => props.theme.colors.secondDark};
    border-radius: 4px;
    height: 40px;
    &:focus {
        outline: none;
        border-color: ${(props) => props.theme.colors.mainColor};
    }   
`

export const LabelForm = styled.label`
    margin-bottom: 10px;
`