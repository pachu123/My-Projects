import React, { Component } from 'react';
import { StyleSheet, Text, View,Animated, Easing } from 'react-native';
import { red } from 'ansi-colors';


class Logo extends Component {

    state = {
        jAnim:new Animated.Value(0),
        dreamsAnim:new Animated.Value(0),
    }


    componentWillMount(){
        Animated.sequence([
            Animated.timing(this.state.jAnim,{
                toValue:1,
                duration:1000,
                easing:Easing.easeOutCubic,
            }),
            Animated.timing(this.state.dreamsAnim,{
                toValue:1,
                duration:500,
                easing:Easing.easeOutCubic,
            }),
        ]).start(()=> {
            this.props.showLogin();
        })
    }

    render(){
        return(
            <View>
                <View style={this.props.orientation === "portrait" ? styles.logoStylePortrait : styles.logoStyleLandscape}>
                    <Animated.View style={{
                        //paddingBottom: 70,
                        opacity:this.state.jAnim,
                        top:this.state.jAnim.interpolate({
                            inputRange:[0,1],
                            outputRange:[300,0],
                        })

                    }}
                    >
                    </Animated.View>
                   
                    
                </View>
                
                    <Animated.View style={{
                    opacity:this.state.dreamsAnim,
                    marginTop:-10,
                    }}
                >
                    
                    </Animated.View>
                
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    logoStylePortrait:{
        flex:1,
        flexDirection: 'row',
        marginTop: 50,
        maxHeight:100,  
    },
    logoStyleLandscape:{
        flex:1,
        flexDirection: 'row',
        marginTop:20,
        maxHeight:100, 
       
    }
});

export default Logo;
