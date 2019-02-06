import React, { Component } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { userActions } from '../../actions/user';

import styled from 'styled-components';
import { colors } from '../../styles/variables';
import { InputForm, ButtonForm } from '../../styles/form';
import { NotificationInfo, Link } from '../../styles/notifications';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }
    }

    handleSubmit() {
        const {username, password} = this.state;
        const { dispatch, navigation } = this.props;

        if(username && password) {
            dispatch(userActions.login(username, password));
        }
    }

    render() {
        const { navigation } = this.props;

        return (
            <Wrapper>
                <KeyboardAvoidingView behavior="padding">
                    <Header>Sign In</Header>
                    <LoginForm>
                        <InputForm
                            placeholder="Username"
                            onChangeText={(value) => this.setState({username: value})}
                        />
                        <InputForm
                            secureTextEntry
                            placeholder="Password"
                            name="password"
                            onChangeText={(value) => this.setState({password: value})}
                        />
                        <ButtonForm
                            title="Sign In"
                            onPress={() => this.handleSubmit()}
                        />
                    </LoginForm>
                    <NotificationInfo>
                        <Link
                            title="Don't have account? Sign Up"
                            onPress={() => navigation.navigate("SignUp")}
                        />
                    </NotificationInfo>
                </KeyboardAvoidingView>
            </Wrapper>
        )
    }
}

const Wrapper = styled.View`
    width: 100%;
    height: 100%;
    display: flex;
    font-size: 14px;
    align-items: center;
    justify-content: center;
`;

const LoginForm = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Header = styled.Text`
    font-size: 20px;
    margin-bottom: 5%;
    color: ${colors.colorSecondary};
`;

export default connect()(SignIn);