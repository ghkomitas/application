import React from 'react';
import {
    ScrollView,
    View,
    Text,
    StatusBar
} from 'react-native';
import {
    List,
    ListItem,
} from 'react-native-elements';
import {Actions} from "react-native-router-flux/index";

class Second extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            empty:true,
        }
    }
    componentDidMount() {
        StatusBar.setHidden(false);
        fetch('http://cmswepapi.azurewebsites.net/api/schedules')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                        schedules:responseJson,
                    },
                    function() {

                    });
            })
            .catch((error) => {
                console.error(error);
            });
        if(this.props.data){
            this.setState({empty:false});
        }else{
            this.setState({empty:true});
        }
    }
    sendEmployment(id){
        let schedules = [];
        this.state.schedules.map((l,i)=>{
            if(l.employmentEmploymentId === id){
                l.id = i;
                schedules.push(l);
            }
        });
        if(schedules.length>0){
            // console.log(schedules);
            Actions.Third({schedules:schedules});
        }else{
            Actions.Third({schedules:null});
        }
    }

    render() {
        if(this.state.empty){
            return(
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <Text  style={{color:'#ff1401',fontSize:30}}>Sorry, it's still empty</Text>
                </View>
            );
        }
        return (
            <ScrollView style={{flex:1,marginTop:60}}>
                <List>
                {
                    this.props.data.map((l, i) => (
                    <ListItem
                        onPress={()=>{this.sendEmployment(l.id)}}
                        key={i}
                        title={
                            <View>
                                <Text>{l.employmentName}</Text>
                                <Text>Price : {l.price}</Text>
                            </View>
                        }
                        />
                    ))
                }
                </List>
            </ScrollView>
        );
    }
}

styles = {
    text:{
        flex: 1
    },
    header:{
        height:10
    }
};

export default Second;