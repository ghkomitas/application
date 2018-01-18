import React, { Component } from 'react';
import {
    View,
    ActivityIndicator,
    StatusBar
} from 'react-native';
import { Actions } from 'react-native-router-flux';

class Loader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }
    componentDidMount() {
        StatusBar.setHidden(true);

    setTimeout(
        ()=>{
            return fetch('http://cmswepapi.azurewebsites.net/api/customers')
                .then((response) => response.json())
                .then((responseJson) => {
                    this.setState({
                            isLoading: false,
                            customers:responseJson,
                        },
                        function() {
                            Actions.home({customers:this.state.customers})
                        });
                })
                .catch((error) => {
                    console.error(error);
                });
        },3000);
    }
    render() {
            return (
                <View style={{flex: 1, alignItems: 'center', justifyContent:"center"}}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            );
    }
}

export default Loader;