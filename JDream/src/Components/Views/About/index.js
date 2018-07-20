import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {navigatorDrawer} from '../../utils/misc';
import LinearGradient from 'react-native-linear-gradient';
import Hr from "react-native-hr-component";



class About extends Component {

    constructor(props) {
        super(props);
    
        this.props.navigator.setOnNavigatorEvent((event) => {
          navigatorDrawer(event, this)
        })
    
    }

  render() {
    return (
      <LinearGradient colors={['#00ffff','#0000ff']}>
        <View style={{
          //'#6600cc','#9900cc'
          width:'100%',
          height:'100%',
          padding: 20,
        }}>
            <View style={{
              backgroundColor:'#ffffff',
              borderRadius:15,
              alignItems:'center',
              height:'100%',
              width:'100%'
            }}> 
            
                <Text style={{
                    fontSize:20,
                    fontFamily:'Roboto-Black',
                    fontWeight:'bold',
                    paddingBottom:-2,
                    color:'#990099'
                }}
                >About Us</Text>
                <Hr 
                    lineColor="#9900ff" 
                    width={7} 
                    thickness={1.5}
                    text="OUR STORY"
                    fontSize={12}
                    textStyles={{
                      color:'#990099',
                      fontWeight: 'bold',
                      fontFamily:'Roboto-Black'
                    }}
                    hrPadding={75}
                />
                
                <View style={{
                    flex:1,
                    marginLeft:8,
                    marginRight: 8,
                    height:'100%',
                    width:360
                }}>
                  <Image  style={{
                      resizeMode:'contain',
                      height:160,
                      width:360,
                      alignSelf:'center'
                  }}
                  source={require('../../../Assets/images/About_us.jpg')}
                  />
                  <Text style={{
                    color:'#424242',
                    fontSize:15,
                    fontFamily:'RobotoCondensed-Bold',
                    justifyContent: 'center',
                  }}>
                        J Dreams is in to Organizing the events and conferences{`\n`}
                        on every scale and the range is quite large depending upon{`\n`}
                        the requirements of our Clients..{`\n`}
                        The Small and Large Level Conferences and events Are so Integrated that the Experts @ J dreams Provide Right{`\n`} Advice Deciding the Venue...{`\n`}
                        We Are Small But, Perfectly Formed Team Of Professionals{`\n`} That Draw On Our Vast Experience, Enthusiasm And Skills{`\n`}To Delivers Fabulous Events For Our Clients...{`\n`}
                        J Dreams Was Established With The Idea Of Providing The {`\n`} Market With Ever Growing Demand For Fun Team Building Experience Which Also Provides Value Along With Purpose....{`\n`}  
                       We Are Planning To Execute The Events In Kundapura {`\n`} (Main), Mangalore, Udupi, Karkala, Shimogga, And Byndoor ...{`\n`}
                        
                  </Text>
                </View>
            </View>
        </View>  
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  
});

export default About;