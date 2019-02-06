import { colors } from './variables';
import { View, Button } from 'react-native';
import styled from 'styled-components';

const NotificationInfo = styled.View`
    display: flex;
    margin-top: 3%;
    background: #f6f3fe;
    padding: 2%;
    color: #8053ca;
    border: 1px solid #e4dff5;
    border-radius: 5px;
    text-align: center;
`;

const Link = styled.Button`
    text-decoration: none;
    font-size: 12;
`;

export {
    NotificationInfo,
    Link
}
