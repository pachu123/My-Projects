import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {navigatorDrawer} from '../../utils/misc'
import Icon from 'react-native-vector-icons/FontAwesome';
import call from 'react-native-phone-call';

const args = {
    number: '+918971265716', // String value with the number to call
    prompt: true // Optional boolean property. Determines if the user should be prompt prior to the call 
  }
   
  

class Services extends Component {
    constructor(props) {
        super(props);
    
        this.props.navigator.setOnNavigatorEvent((event) => {
          navigatorDrawer(event, this)
        })
    
    }

    showcall = () => (
        <TouchableOpacity
                    style={{
                    borderWidth:1,
                    borderColor:'rgba(0,0,0,0.2)',
                    alignItems:'center',
                    justifyContent:'center',
                    width:50,
                    height:45,
                    backgroundColor:'#009FFD',
                    borderRadius:100,
                    borderWidth:2,
                    borderColor:'#ffffff',
                    marginTop:4,
                    marginLeft:4,
                    marginBottom:5

                    }}
                    onPress={() => {
                        call(args).catch(console.error)
                    }}
          
          >
            <Icon name={"phone"}  size={30} color="#ffffff" />
          </TouchableOpacity>
    )


    render() {
        return (
            <ScrollView
            scrollEnabled={true}
            >
            <View
                style={{
                    flexDirection:'column',
                    alignItems:'flex-start',
                    justifyContent:'flex-start',
                    borderWidth:2,
                    borderColor:'red',
                    width:'100%',
                    height:'100%'
                }}
            >
                <View style ={{
                    flexDirection:'column',
                    backgroundColor:'#ffffff',
                    width:'100%',
                    paddingVertical:6,
                    paddingHorizontal:5
                }}>
                
                    <View style={{
                        alignItems:'flex-start',
                        justifyContent:'flex-start',
                        borderWidth: 1.5,
                        borderColor:'#ffffff',
                        backgroundColor: '#009FFD',
                        height:255,
                        borderRadius:30,
                        marginBottom:7,
                    }}>
                        <Image style={{
                            height:200,
                            width:'100%',
                            resizeMode:'cover',
                            borderTopLeftRadius:30,
                            borderTopRightRadius:30
                        }}
                        source={require('../../../Assets/images/corporate_event.jpeg')}
                        />
                        <View style={{
                            flexDirection:'row',
                            height:50,
                            width:'80%',
                            alignItems:'flex-start',
                            justifyContent:'flex-start',
                            alignSelf:'center'
                        }}>
                            {this.showcall()}
                            <Text style={{
                                fontSize:30,
                                fontWeight:'bold',
                                fontFamily:'Roboto-Bold',
                                alignItems:'center',
                                justifyContent:'center',
                                alignSelf:'center',
                                color:'#ffffff',
                                paddingLeft:15
                            }}
                            >Corporate Events</Text>
                        </View>
                    </View>

                    <View style={{
                        alignItems:'flex-start',
                        justifyContent:'flex-start',
                        borderWidth: 1.5,
                        borderColor:'#ffffff',
                        backgroundColor: '#009FFD',
                        height:255,
                        borderRadius:30,
                        marginBottom:7,
                    }}>
                        <Image style={{
                            height:200,
                            width:'100%',
                            resizeMode:'cover',
                            borderTopLeftRadius:30,
                            borderTopRightRadius:30
                        }}
                        source={require('../../../Assets/images/wedding_event.jpeg')}
                        />
                        <View style={{
                            flexDirection:'row',
                            height:50,
                            width:'80%',
                            alignItems:'flex-start',
                            justifyContent:'flex-start',
                            alignSelf:'center'
                        }}>
                            {this.showcall()}
                            <Text style={{
                                fontSize:30,
                                fontWeight:'bold',
                                fontFamily:'Roboto-Bold',
                                alignItems:'center',
                                justifyContent:'center',
                                alignSelf:'center',
                                color:'#ffffff',
                                paddingLeft:15
                            }}
                            >Wedding Events</Text>
                        </View>
                    </View>
                    <View style={{
                        alignItems:'flex-start',
                        justifyContent:'flex-start',
                        borderWidth: 1.5,
                        borderColor:'#ffffff',
                        backgroundColor: '#009FFD',
                        height:255,
                        borderRadius:30
                    }}>
                        <Image style={{
                            height:200,
                            width:'100%',
                            resizeMode:'cover',
                            borderTopLeftRadius:30,
                            borderTopRightRadius:30
                        }}
                        source={require('../../../Assets/images/launch_event.jpg')}
                        />
                        <View style={{
                            flexDirection:'row',
                            height:50,
                            width:'80%',
                            alignItems:'flex-start',
                            justifyContent:'flex-start',
                            alignSelf:'center'
                        }}>
                            {this.showcall()}
                        <Text style={{
                            fontSize:30,
                            fontWeight:'bold',
                            fontFamily:'Roboto-Bold',
                            alignItems:'center',
                            justifyContent:'center',
                            alignSelf:'center',
                            color:'#ffffff',
                            paddingLeft:15
                        }}
                        >launch Events</Text>
                        </View>
                    </View>

                    <View style={{
                        alignItems:'flex-start',
                        justifyContent:'flex-start',
                        borderWidth: 1.5,
                        borderColor:'#ffffff',
                        backgroundColor: '#009FFD',
                        height:255,
                        borderRadius:30,
                        marginBottom:7,
                    }}>
                        <Image style={{
                            height:200,
                            width:'100%',
                            resizeMode:'cover',
                            borderTopLeftRadius:30,
                            borderTopRightRadius:30
                        }}
                        source={require('../../../Assets/images/birthday_event.jpg')}
                        />
                        <View style={{
                            flexDirection:'row',
                            height:50,
                            width:'80%',
                            alignItems:'flex-start',
                            justifyContent:'flex-start',
                            alignSelf:'center'
                        }}>
                            {this.showcall()}
                        <Text style={{
                            fontSize:30,
                            fontWeight:'bold',
                            fontFamily:'Roboto-Bold',
                            alignItems:'center',
                            justifyContent:'center',
                            alignSelf:'center',
                            color:'#ffffff',
                            paddingLeft:15
                        }}
                        >Birthaday Events</Text>
                        </View>
                    </View>

                    <View style={{
                        alignItems:'flex-start',
                        justifyContent:'flex-start',
                        borderWidth: 1.5,
                        borderColor:'#ffffff',
                        backgroundColor: '#009FFD',
                        height:255,
                        borderRadius:30,
                        marginBottom:7,
                    }}>
                        <Image style={{
                            height:200,
                            width:'100%',
                            resizeMode:'cover',
                            borderTopLeftRadius:30,
                            borderTopRightRadius:30
                        }}
                        source={require('../../../Assets/images/destination_event.jpg')}
                        />
                        <View style={{
                            flexDirection:'row',
                            height:50,
                            width:'80%',
                            alignItems:'flex-start',
                            justifyContent:'flex-start',
                            alignSelf:'center'
                        }}>
                            {this.showcall()}
                        <Text style={{
                            fontSize:30,
                            fontWeight:'bold',
                            fontFamily:'Roboto-Bold',
                            alignItems:'center',
                            justifyContent:'center',
                            alignSelf:'center',
                            color:'#ffffff',
                            paddingLeft:15
                        }}
                        >Destination Events</Text>
                        </View>
                    </View>

                    <View style={{
                        alignItems:'flex-start',
                        justifyContent:'flex-start',
                        borderWidth: 1.5,
                        borderColor:'#ffffff',
                        backgroundColor: '#009FFD',
                        height:255,
                        borderRadius:30,
                        marginBottom:7,
                    }}>
                        <Image style={{
                            height:200,
                            width:'100%',
                            resizeMode:'cover',
                            borderTopLeftRadius:30,
                            borderTopRightRadius:30
                        }}
                        source={require('../../../Assets/images/dg_and_band.png')}
                        />
                        <View style={{
                            flexDirection:'row',
                            height:50,
                            width:'80%',
                            alignItems:'flex-start',
                            justifyContent:'flex-start',
                            alignSelf:'center'
                        }}>
                            {this.showcall()}
                        <Text style={{
                            fontSize:30,
                            fontWeight:'bold',
                            fontFamily:'Roboto-Bold',
                            alignItems:'center',
                            justifyContent:'center',
                            alignSelf:'center',
                            color:'#ffffff',
                            paddingLeft:15
                        }}
                        >DJ AND BAND</Text>
                        </View>
                    </View>

                    <View style={{
                        alignItems:'flex-start',
                        justifyContent:'flex-start',
                        borderWidth: 1.5,
                        borderColor:'#ffffff',
                        backgroundColor: '#009FFD',
                        height:255,
                        borderRadius:30,
                        marginBottom:7,
                    }}>
                        <Image style={{
                            height:200,
                            width:'100%',
                            resizeMode:'cover',
                            borderTopLeftRadius:30,
                            borderTopRightRadius:30
                        }}
                        source={require('../../../Assets/images/education_event.jpg')}
                        />
                        <View style={{
                            flexDirection:'row',
                            height:50,
                            width:'80%',
                            alignItems:'flex-start',
                            justifyContent:'flex-start',
                            alignSelf:'center'
                        }}>
                            {this.showcall()}
                        <Text style={{
                            fontSize:30,
                            fontWeight:'bold',
                            fontFamily:'Roboto-Bold',
                            alignItems:'center',
                            justifyContent:'center',
                            alignSelf:'center',
                            color:'#ffffff',
                            paddingLeft:15
                        }}
                        >Education Events</Text>
                        </View>
                    </View>

                    <View style={{
                        alignItems:'flex-start',
                        justifyContent:'flex-start',
                        borderWidth: 1.5,
                        borderColor:'#ffffff',
                        backgroundColor: '#009FFD',
                        height:255,
                        borderRadius:30,
                        marginBottom:7,
                    }}>
                        <Image style={{
                            height:200,
                            width:'100%',
                            resizeMode:'cover',
                            borderTopLeftRadius:30,
                            borderTopRightRadius:30
                        }}
                        source={require('../../../Assets/images/mehandi_event.jpg')}
                        />
                        <View style={{
                            flexDirection:'row',
                            height:50,
                            width:'80%',
                            alignItems:'flex-start',
                            justifyContent:'flex-start',
                            alignSelf:'center'
                        }}>
                            {this.showcall()}
                        <Text style={{
                            fontSize:30,
                            fontWeight:'bold',
                            fontFamily:'Roboto-Bold',
                            alignItems:'center',
                            justifyContent:'center',
                            alignSelf:'center',
                            color:'#ffffff',
                            paddingLeft:15
                        }}
                        >Mehandi Events</Text>
                        </View>
                    </View>

                    <View style={{
                        alignItems:'flex-start',
                        justifyContent:'flex-start',
                        borderWidth: 1.5,
                        borderColor:'#ffffff',
                        backgroundColor: '#009FFD',
                        height:255,
                        borderRadius:30,
                        marginBottom:7,
                    }}>
                        <Image style={{
                            height:200,
                            width:'100%',
                            resizeMode:'cover',
                            borderTopLeftRadius:30,
                            borderTopRightRadius:30
                        }}
                        source={require('../../../Assets/images/house_warming_event.jpg')}
                        />
                        <View style={{
                            flexDirection:'row',
                            height:50,
                            width:'80%',
                            alignItems:'flex-start',
                            justifyContent:'flex-start',
                            alignSelf:'center'
                        }}>
                            {this.showcall()}
                        <Text style={{
                            fontSize:25,
                            fontWeight:'bold',
                            fontFamily:'Roboto-Bold',
                            alignItems:'center',
                            justifyContent:'center',
                            alignSelf:'center',
                            color:'#ffffff',
                            paddingLeft:15
                        }}
                        >House Warming Events</Text>
                        </View>
                    </View>

                    <View style={{
                        alignItems:'flex-start',
                        justifyContent:'flex-start',
                        borderWidth: 1.5,
                        borderColor:'#ffffff',
                        backgroundColor: '#009FFD',
                        height:255,
                        borderRadius:30,
                        marginBottom:7,
                    }}>
                        <Image style={{
                            height:200,
                            width:'100%',
                            resizeMode:'cover',
                            borderTopLeftRadius:30,
                            borderTopRightRadius:30
                        }}
                        source={require('../../../Assets/images/theme_event.jpg')}
                        />
                        <View style={{
                            flexDirection:'row',
                            height:50,
                            width:'80%',
                            alignItems:'flex-start',
                            justifyContent:'flex-start',
                            alignSelf:'center'
                        }}>
                            {this.showcall()}
                        <Text style={{
                            fontSize:30,
                            fontWeight:'bold',
                            fontFamily:'Roboto-Bold',
                            alignItems:'center',
                            justifyContent:'center',
                            alignSelf:'center',
                            color:'#ffffff',
                            paddingLeft:15
                        }}
                        >Theme Events</Text>
                        </View>
                    </View>

                    <View style={{
                        alignItems:'flex-start',
                        justifyContent:'flex-start',
                        borderWidth: 1.5,
                        borderColor:'#ffffff',
                        backgroundColor: '#009FFD',
                        height:255,
                        borderRadius:30,
                        marginBottom:7,
                    }}>
                        <Image style={{
                            height:200,
                            width:'100%',
                            resizeMode:'cover',
                            borderTopLeftRadius:30,
                            borderTopRightRadius:30
                        }}
                        source={require('../../../Assets/images/social_event.jpg')}
                        />
                        <View style={{
                            flexDirection:'row',
                            height:50,
                            width:'80%',
                            alignItems:'flex-start',
                            justifyContent:'flex-start',
                            alignSelf:'center'
                        }}>
                            {this.showcall()}
                        <Text style={{
                            fontSize:30,
                            fontWeight:'bold',
                            fontFamily:'Roboto-Bold',
                            alignItems:'center',
                            justifyContent:'center',
                            alignSelf:'center',
                            color:'#ffffff',
                            paddingLeft:15
                        }}
                        >Social Events</Text>
                        </View>
                    </View>

                    <View style={{
                        alignItems:'flex-start',
                        justifyContent:'flex-start',
                        borderWidth: 1.5,
                        borderColor:'#ffffff',
                        backgroundColor: '#009FFD',
                        height:255,
                        borderRadius:30,
                        marginBottom:7,
                    }}>
                        <Image style={{
                            height:200,
                            width:'100%',
                            resizeMode:'cover',
                            borderTopLeftRadius:30,
                            borderTopRightRadius:30
                        }}
                        source={require('../../../Assets/images/college_seminar.jpeg')}
                        />
                        <View style={{
                            flexDirection:'row',
                            height:50,
                            width:'80%',
                            alignItems:'flex-start',
                            justifyContent:'flex-start',
                            alignSelf:'center'
                        }}>
                            {this.showcall()}
                        <Text style={{
                            fontSize:30,
                            fontWeight:'bold',
                            fontFamily:'Roboto-Bold',
                            alignItems:'center',
                            justifyContent:'center',
                            alignSelf:'center',
                            color:'#ffffff',
                            paddingLeft:15
                        }}
                        >College Seminars</Text>
                        </View>
                    </View>
                </View>

                <View style={{
                    alignSelf:'flex-end',
                    alignItems:'center',
                    width:'100%',
                    height:100,
                    backgroundColor:'#eeeeee',
                    borderTopWidth:1,
                    borderTopColor:'black'
                }}>
                    <Text style={{color:'#212121',
                                fontSize:15,
                                textAlign:'center',
                                fontFamily:'RobotoCondensed-Bold',
                                fontWeight:'bold',
                                marginTop:10,
                                textDecorationLine:'underline'
                                }}>
                            CONNECT WITH US
                    </Text>
                    <View style={{alignItems:'center',
                                    justifyContent:'center',
                                    flexDirection:'row'}}>
                    <TouchableOpacity
                        style={{
                                borderWidth:1,
                                borderColor:'rgba(0,0,0,0.2)',
                                alignItems:'center',
                                justifyContent:'center',
                                width:50,
                                height:50,
                                backgroundColor:'#009FFD',
                                borderRadius:100,
                                marginTop:10

                            }}
                        onPress={() => {
                            Linking.openURL('https://www.instagram.com/jdreamseventmngmnt/').catch(err => console.error('An error occurred', err));
                        }}
            
                    >
                        <Icon name={"instagram"}  size={30} color="#ffffff" />
                    </TouchableOpacity>

                    <TouchableOpacity
                            style={{
                                borderWidth:1,
                                borderColor:'rgba(0,0,0,0.2)',
                                alignItems:'center',
                                justifyContent:'center',
                                width:50,
                                height:50,
                                backgroundColor:'#009FFD',
                                borderRadius:100,
                                marginTop:10,
                                marginLeft:10,

                            }}
                            onPress={() => {
                                Linking.openURL('https://www.facebook.com/%E0%B2%9C%E0%B3%86%E0%B2%A1%E0%B3%8D%E0%B2%B0%E0%B3%80%E0%B2%AE%E0%B3%8D%E0%B2%B8%E0%B3%8D%E0%B2%87%E0%B2%B5%E0%B3%860%E0%B2%9F%E0%B3%8D-%E0%B2%AE%E0%B3%8D%E0%B2%AF%E0%B2%BE%E0%B2%A8%E0%B3%87%E0%B2%9C%E0%B3%8D%E0%B2%AE%E0%B3%870%E0%B2%9F%E0%B3%8D-2018911691655313/').catch(err => console.error('An error occurred', err));
                            }}
                        
                        >
                        <Icon name={"facebook"}  size={30} color="#ffffff" />
                        </TouchableOpacity>


                        <TouchableOpacity
                            style={{
                                borderWidth:1,
                                borderColor:'rgba(0,0,0,0.2)',
                                alignItems:'center',
                                justifyContent:'center',
                                width:50,
                                height:50,
                                backgroundColor:'#009FFD',
                                borderRadius:100,
                                marginTop:10,
                                marginLeft:10,

                            }}
                            onPress={() => {
                                Linking.openURL('https://twitter.com/@jdreamsk').catch(err => console.error('An error occurred', err));
                            }}
                        
                        >
                        <Icon name={"twitter"}  size={30} color="#ffffff" />
                        </TouchableOpacity>


                        <TouchableOpacity
                        style={{
                        borderWidth:1,
                        borderColor:'rgba(0,0,0,0.2)',
                        alignItems:'center',
                        justifyContent:'center',
                        width:50,
                        height:50,
                        backgroundColor:'#009FFD',
                        borderRadius:100,
                        marginTop:10,
                        marginLeft:10,

                    }}
                    onPress={() => {
                        Linking.openURL('https://plus.google.com/u/0/102856129835217342674').catch(err => console.error('An error occurred', err));
                    }}

                    >
                    <Icon name={"google-plus"}  size={30} color="#ffffff" />
                    </TouchableOpacity>
            
                    </View>
                
                
                </View>
            </View>
            </ScrollView>
        );
      }
}

const styles = StyleSheet.create({
});

export default Services;


