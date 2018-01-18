import React from 'react';
import {
    ScrollView,
    View,
    Text,
} from 'react-native';
import {
    List,
    ListItem,
} from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import {Actions} from "react-native-router-flux/index";

class Third extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            empty:true,
            schedule:[]
        }
    }
    componentDidMount() {
        if(this.props.schedules){
            this.setState({empty:false});
        }else{
            this.setState({empty:true});
        }
    }
    // sendSchedule(id){
    //     let schedules = [];
    //     this.state.schedules.map((l)=>{
    //         if(l.employmentEmploymentId === id){
    //             schedules.push(l);
    //         }
    //     });
    // }

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
                        this.props.schedules.map((l, i) => (
                            <ListItem
                                // onPress={()=>{this.sendSchedule(i)}}
                                key={i}
                                title={
                                    <View>
                                        <Text>All Work Time : {l.allWorkTime}h.</Text>
                                        <Text>Start : {l.startWorkTime}</Text>
                                        <Text>End : {l.endWorkTime}</Text>
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

export default Third;