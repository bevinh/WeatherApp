import React, { Component } from 'react';
import api from '../utils/api';

import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableHighlight,
    ActivityIndicator
} from 'react-native';

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 30,
        marginTop: 65,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#5d09ec'
    },
    title: {
        marginBottom: 20,
        fontSize: 25,
        textAlign: 'center',
        color: '#fff'
    },
    searchInput: {
        height: 50,
        padding: 4,
        marginRight: 5,
        fontSize: 23,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 8,
        color: 'white'
    },
    buttonText: {
        fontSize: 18,
        color: '#111',
        alignSelf: 'center'
    },
    button: {
        height: 45,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        marginTop: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
});
class Main extends Component {
    constructor(props){
        super(props);
        this.state={
            zip: '',
            isLoading: false,
            error: false
        }
    }
    handleChange(event){
        this.setState({
            zip: event.nativeEvent.text
        })
    }
    render(){
        return (
            <View
                style={styles.mainContainer}>
                <Text style={styles.title}>Enter Zip Code</Text>
                <TextInput style={styles.searchInput} />
                <TouchableHighlight
                    style={styles.button} >
                    <Text style={styles.buttonText}>Enter</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

module.exports = Main;