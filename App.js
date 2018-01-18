import React from 'react';
import {
    Image,
    View,
    StatusBar
} from 'react-native';

import FadeInView from './src/component/animate';
import Router from './src/Router';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            home: true,
        }
    }
    componentDidMount() {
        StatusBar.setHidden(true);
        setTimeout(
            ()=>{
                this.setState({home:false});
            },4000)
    }
    render() {
        if(this.state.home){
            return (
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <FadeInView>
                        <Image source={require('./src/image/home-1.jpeg',)} style={{flex: 1}} />
                    </FadeInView>
                </View>
            );
        }
        return (
            <Router/>
        );
    }
}
