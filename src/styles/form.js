import { colors } from './variables';
import { TextInput, Button } from 'react-native';
import styled from 'styled-components';

const InputForm = styled.TextInput`
    display: flex;
    width: 100%;
    height: 40px;
    padding: 2% 5%;
    background: ${colors.colorPrimary};
    color: ${colors.colorSecondary};
    font-size: 15px;
    border-radius: 4px;
    border: 1px solid ${colors.border};
    margin-bottom: 2%;
`;

const ButtonForm = styled.Button`
    display: flex;
    width: 126px;
    height: 40px;
    padding: 2%;
    background: ${colors.backgroundPrimary};
    color: ${colors.colorPrimary};
    font-size: 15px;
    border-radius: 4px;
    text-align: center;
`;

export {
    InputForm,
    ButtonForm
}
