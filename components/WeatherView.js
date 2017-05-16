import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet,
    Image
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
        fontSize: 36,
        textAlign: 'center',
        color: '#fff'
    },
    image: {
        height: 60,
        width: 60,
        marginTop: 10,
        alignSelf: 'center'
    }
});

class WeatherView extends Component {
    weather_icon_url(url){
        const new_url = url.replace(/^http:\/\//i, 'https://');
        return new_url
    }
    render(){
        return (
            <View style={styles.mainContainer}>
                <Image source={{uri: this.weather_icon_url(this.props.currentWeather.current_observation.icon_url)}} style={styles.image} />
                <Text style={styles.title}>It is currently:</Text>
                <Text style={styles.title}>{this.props.currentWeather.current_observation.temperature_string}</Text>
            </View>

        )
    }
}

module.exports = WeatherView;