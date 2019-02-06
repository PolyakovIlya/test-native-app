import React, {Component} from 'react';
import { View, KeyboardAvoidingView, Text, Switch } from 'react-native';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { colors } from '../../styles/variables';
import { InputForm, ButtonForm } from '../../styles/form';
import { NotificationInfo, Link } from '../../styles/notifications';
import { userActions } from '../../actions';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            email: '',
            isAdmin: false
        }
    }

    handleSubmit() {
        const { username, password, email } = this.state;
        const { dispatch, navigation } = this.props;

        if(username && password && email) {
            dispatch(userActions.register(this.state)).then(() => {
                return navigation.navigate("SignIn")
            });
        }
    }

    handleRole(value) {
        this.setState({isAdmin: value})
    }

    render() {
        const { navigation } = this.props;

        return (
            <Wrapper>
                <KeyboardAvoidingView behavior="padding">
                    <Header>Sign Up</Header>
                    <RegisterForm>
                        <InputForm
                            placeholder="Username"
                            onChangeText={(value) => this.setState({username: value})}
                        />
                        <InputForm
                            placeholder="Email"
                            onChangeText={(value) => this.setState({email: value})}
                        />
                        <InputForm
                            secureTextEntry
                            placeholder="Password"
                            onChangeText={(value) => this.setState({password: value})}
                        />
                        <EditorBlock>
                            <EditorLabel>Editor:</EditorLabel>
                            <Switch
                                value={this.state.isAdmin}
                                onValueChange={(value) => this.handleRole(value)}
                            />
                        </EditorBlock>
                        <ButtonForm
                            title="Sign Up"
                            onPress={() => this.handleSubmit()}
                        />
                    </RegisterForm>
                    <NotificationInfo>
                        <Link
                            title="Already have an account? Sign in"
                            onPress={() => navigation.navigate("SignIn")}
                        />
                    </NotificationInfo>
                </KeyboardAvoidingView>
            </Wrapper>
        );
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

const RegisterForm = styled.View`
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

const EditorBlock = styled.View`
    margin: 0 0 2% 0;
    justify-content: center;
    flex-direction: row;
`;

const EditorLabel = styled.Text`
    line-height: 30px;
    margin-right: 10px;
`;

export default connect()(SignIn);