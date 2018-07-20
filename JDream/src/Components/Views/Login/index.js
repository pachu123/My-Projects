import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, ActivityIndicator, ImageBackground } from 'react-native';
import { getOrientation, setOrientationListner,removeOrientationListener, getTokens, setTokens } from '../../utils/misc';
import loadTabs from '../Tabs';
import Logo from './logo';
import LoginPanel from './loginPanel';


import { connect } from 'react-redux';
import {autoSignIn } from '../../Store/Action/user_action';
import { bindActionCreators } from 'redux';

class Login extends Component {
  constructor(props) {
    super(props)

    this.state= {
      loading:true,
      orientation:getOrientation(500),
      logoAnimation:false,
    }

    setOrientationListner(this.changeOrientation)

  }

  changeOrientation = () => {
    this.setState(
      {
        orientation:getOrientation(500)
      }
    )
  }

  componentWillUnmount() {
    removeOrientationListener();
  }

  componentDidMount() {
    getTokens((value) => {
     if(value[0][1] === null) {
       this.setState({
         loading:false
       })
     } else {
        this.props.autoSignIn(value[1][1]).then( () => {
            if(!this.props.User.userData.token) {
              this.setState({
                loading:false
              })
            } else {
                setTokens(this.props.User.userData, ()=>{
                  loadTabs();
                })
            }
        })

     }
    })
  }

  showLogin = () => {
    this.setState({
      logoAnimation:true
    })
  }
  render() {

      if(this.state.loading) {
        return(
          <View style={styles.loading}>
            <ActivityIndicator/>
          </View>
        )
      } else {
        return (
          <ScrollView>
          <ImageBackground source={require('../../../Assets/images/back.png')} style={styles.imageContainer}>
          
            <View style={styles.container}>
              <Logo 
                showLogin={this.showLogin}
                orientation={this.state.orientation}
              />
              
            </View>
            <View style={styles.container1}>
              <LoginPanel
               show={this.state.logoAnimation}
               orientation={this.state.orientation}
              />
            </View>
           
          </ImageBackground> 
          
          </ScrollView> 
        );
      } 
  }
}

const styles = StyleSheet.create({
  container:{
      flex:1,
      alignItems: 'center',
  },
  container1:{
    flex:1,
    alignItems: 'center',
},
loading:{
  flex:1,
  backgroundColor:'#fff',
  alignItems: 'center',
  justifyContent:'center'
},
imageContainer:{
  flex:1,
  alignItems: 'center',
  justifyContent:'center',
  width:null,
  height:null,
},
});

function mapStateToProps(state) {
  return {
    User:state.User
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ autoSignIn },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);