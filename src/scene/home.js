import React, { Component } from 'react';
import {
    Text,
    ScrollView,
    StatusBar,
    Button
} from 'react-native';
import {
    Card,
    List,
} from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {employments:[]}
    }
    componentDidMount() {
        StatusBar.setHidden(false);
        fetch('http://cmswepapi.azurewebsites.net/api/employments/')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                        employments:responseJson,
                    },
                    function() {

                    });
            })
            .catch((error) => {
                console.error(error);
            });
    }
    sendCustomer(id){
        let data = [];
        this.state.employments.map((l,i) => {
            if(id === l.customerId){
                l.id = i;
                data.push(l);
            }
        });
        if(data.length>0){
            Actions.Second({data:data});
        }else{
            Actions.Second({data:null});
        }
    }

    render() {
        return (
            <ScrollView style={{flex: 1,marginBottom:15,marginTop:50}}>
                <List>
                    {
                        this.props.customers.map((l, i) => (
                            <Card
                                key={i}
                                title={l.firstName+' '+l.lastName}
                                image={
                                    (l.image) ? {url:l.image}:require('../image/person.jpg')}>
                                <Text style={{marginBottom: 10}}>Location:{l.country+','+l.city}</Text>
                                <Text style={{marginBottom: 10}}>Phone Number : {l.phoneNumber}</Text>
                                <Text style={{marginBottom: 10,color:'#ff4617'}}>E-mail : {l.email}</Text>
                                <Button
                                    onPress={() =>this.sendCustomer(i)}
                                    backgroundColor='#03A9F4'
                                    fontFamily='Lato'
                                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                                    title='See more' />
                            </Card>
                        ))
                    }
                </List>
            </ScrollView>
        );

    }
}

export default Home;
