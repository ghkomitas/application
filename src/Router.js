import React from 'react';
import {
    Scene,
    Router
} from 'react-native-router-flux';
import Loader from './scene/loader';
import Home from './scene/home';
import Second from './scene/second';
import Third from './scene/third';

const RouterComponent = ()=>{
        return(
            <Router>
              <Scene
                  key='Loader'
                  hideNavBar={true}
                  component={Loader}
              />
              <Scene
                  key='home'
                  hideNavBar={false}
                  navigationBarStyle={styles.header}
                  titleStyle={styles.title}
                  component={Home}
                  renderBackButton={()=>(null)}
                  title='Our participants'
              />
              <Scene
                  key='Second'
                  backButtonBarStyle={styles.title}
                  navigationBarStyle={styles.header}
                  titleStyle={styles.title}
                  barButtonIconStyle={styles.barButtonIconStyle}
                  component={Second}
                  title='Employments'
              />
                <Scene
                  key='Third'
                  backButtonBarStyle={styles.title}
                  navigationBarStyle={styles.header}
                  titleStyle={styles.title}
                  barButtonIconStyle={styles.barButtonIconStyle}
                  component={Third}
                  title='Schedules'
              />
            </Router>
        );
};

export default RouterComponent;

styles = {
    header:{
        flex:1,
        backgroundColor: '#2653ff',
        paddingTop:15,
        height:70,
    },
    title:{
        color:'#fff'
    },
    barButtonIconStyle:{
        tintColor:'#000'
    },
};