import React, {Component} from 'react';
import {
    Button,
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { connect } from 'react-redux';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{ paddingVertical: 20 }}>
                <Text>Home Page</Text>
            </View>
        )
    }
}

export default connect()(Home);
