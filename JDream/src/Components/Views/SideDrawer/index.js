import React, { Component } from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import services from '../../../Assets/images/services.png';

class SideDrawerComponent extends Component {
    state = {
        buttons:[
            {
                value:"Home",
                iconName:"home",
                shouldGoto:"JDreams.Home",
                typeLink:"tab",
                index:0,
                privacy:false,

            },
            {
                value:"About Us",
                iconName:"users",
                shouldGoto:"JDreams.About",
                typelink:"tab",
                index:2,
                privacy:false,
            },
            {
                value:"Services",
                iconName:"gears",
                shouldGoto:"JDreams.Services",
                typelink:"tab",
                index:1,
                privacy:false,
            },
            {
                value:"Contact Us",
                iconName:"address-card",
                shouldGoto:"JDreams.ContactUs",
                typelink:"tab",
                index:3,
                privacy:false,
            },
        ]
    }

    button = (button) => (
        
        <Icon.Button
            key={button.value}
            name={button.iconName}
            iconStyle={{width:20}}
            size={22}
            onPress={()=> 
            {
                this.props.navigator.handleDeepLink({
                    link:button.shouldGoto,
                    payload:{
                        typeLink:button.typelink,
                        indexLink:button.index
                    }
                })
            }
            }
            color="#ffffff"
            backgroundColor="#2196f3"
        >
            <View style={styles.sideDrawerStyle}>
                <Text style={styles.buttonText}>
                    {button.value}
                </Text>
            </View>
        </Icon.Button>       
    )


    showButtons = (buttons) => ( 
        buttons.map( button => (
            !button.privacy ?
                this.button(button)
            :null
        ))
    )

  render() {
    return (
        <View style = {styles.container}>
            <View style = {styles.buttonContainer}>
                {this.showButtons(this.state.buttons)}
            </View>
        </View>


    );
  }
}

const styles = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:'#2196f3'
  },
  buttonContainer:{
      padding: 10,
      marginTop: 20,
  },
  buttonText:{
      fontFamily:"RobotoCondensed-Bold",
      fontSize: 18,
      color:"#ffffff",
  },
  sideDrawerStyle:{
      borderBottomWidth:1,
      borderBottomColor: '#ffffff',
      width:'100%'
  }
});

export default SideDrawerComponent;