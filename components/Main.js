import React, { Component } from 'react';
import api from '../utils/api';
import WeatherView from './WeatherView';

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
    handleSubmit() {
        // update our indicatorIOS spinner
        this.setState({
            isLoading: true
        });
        api.getLocation(this.state.zip).then((res) => {
              api.getWeather(res.location.state, res.location.city).then((res) => {
                if(res.message === "Not Found"){
                    this.setState({
                        error: 'City not found',
                        isLoading: false
                    })

                } else {
                    console.log(res)
                    console.log(res.current_observation.icon_url)
                     this.props.navigator.push({
                        title: 'weather',
                        component: WeatherView,
                        passProps: {currentWeather: res}
                    });
                    this.setState({
                        isLoading: false,
                        error: false,
                        zip: ''
                    })
                }
            })
        });


    }
    render(){
        return (
            <View
                style={styles.mainContainer}>
                <Text style={styles.title}>Enter Zip Code</Text>
                <TextInput style={styles.searchInput}
                   value={this.state.zip}
                   onChange={this.handleChange.bind(this)}

                />
                <TouchableHighlight
                    style={styles.button}
                    onPress={this.handleSubmit.bind(this)}>
                    <Text style={styles.buttonText}>Enter</Text>
                </TouchableHighlight>
                <ActivityIndicator
                    animating={this.state.isLoading}
                    color="#111"
                    size="large"></ActivityIndicator>
            </View>
        )
    }
}

module.exports = Main;