import React, {Component} from 'react';
import { View, Button, Text } from "react-native";
import { connect } from 'react-redux';
import {userActions} from '../actions';
// import { onSignOut } from "../auth";

class Profile extends Component {
    constructor(props) {
        super(props);
    }

    logout() {
        const { dispatch, navigation } = this.props;
        dispatch(userActions.logout())
        return navigation.navigate("SignedOut");
    }

    render() {
        console.log('profile', this.props.dispatch)

        return (
            <View style={{ paddingVertical: 20 }}>
                <View title="John Doe">
                    <View
                        style={{
                            backgroundColor: "#bcbec1",
                            alignItems: "center",
                            justifyContent: "center",
                            width: 80,
                            height: 80,
                            borderRadius: 40,
                            alignSelf: "center",
                            marginBottom: 20
                        }}
                    >
                        <Text style={{ color: "white", fontSize: 28 }}>JD</Text>
                    </View>
                    <Button
                        backgroundColor="#03A9F4"
                        title="Sign Out"
                        onPress={() => this.logout()}
                    />
                </View>
            </View>
        )
    }
}

export default connect()(Profile);