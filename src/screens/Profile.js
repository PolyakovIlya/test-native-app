import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';
import { connect } from 'react-redux';
import { articleActions, userActions } from '../actions';
import styled from 'styled-components';

class Profile extends Component {
    constructor(props) {
        super(props);
    }

    logout() {
        const { dispatch, navigation } = this.props;
        dispatch(userActions.logout());
        return navigation.navigate("SignedOut");
    }

    render() {
        const { username, email, isAdmin } = this.props.user;

        return (
            <Wrapper>
                <View>
                    <RoundView>
                        <LetterText>{username[0]}</LetterText>
                    </RoundView>
                    <TextInfo>Username: {username}</TextInfo>
                    <TextInfo>Email: {email}</TextInfo>
                    <TextInfo>Editor: {isAdmin.toString()}</TextInfo>
                    <Button
                        backgroundColor="#03A9F4"
                        title="Sign Out"
                        onPress={() => this.logout()}
                    />
                </View>
            </Wrapper>
        )
    }
}

const mapStateToProps = state => ({
    user: state.authentication.user
});

const Wrapper = styled.View`
    padding: 20px 0;
`;

const RoundView = styled.View`
    background-color: #bcbec1;
    align-items: center;
    justify-content: center;
    width: 80;
    height: 80;
    border-radius: 40;
    align-self: center;
    margin-bottom: 20px;
`;

const LetterText = styled.Text`
    text-transform: uppercase;
    color: #fff;
    font-size: 28px;
`;

const TextInfo = styled.Text`
    text-align: center;
    align-self: center;
    padding: 5px 0;
`;

export default connect(mapStateToProps)(Profile);