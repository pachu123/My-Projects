import React, { Component } from 'react';
import { StyleSheet, Text, View , TextInput, TouchableHighlight, TouchableOpacity} from 'react-native';
import {navigatorDrawer} from '../../utils/misc';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import { Email } from 'react-native-openanything';
import call from 'react-native-phone-call';

const args = {
    number: '+918277350617', // String value with the number to call
    prompt: true // Optional boolean property. Determines if the user should be prompt prior to the call 
  }

class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value:0,
            name:'',
            number:'',
            message:''
        }
        this.props.navigator.setOnNavigatorEvent((event) => {
          navigatorDrawer(event, this)
        })
    
    }

    onSelect(index){
        this.setState({
          value:index
        })
      }
    render() {
        return(
            !this.state.value ?
            <LinearGradient colors={['#0000ff','#00ffff']}
            style={{
                flex:1
            }}
                >
            <View style = {{ 
                flex:1,
                padding:7
            }}>
                <View style = {{
                    flexDirection:'row',
                    justifyContent:'space-between',
                    alignItems:'center'
                }}>
                    <RadioGroup
                        onSelect = {(index) => this.onSelect(index)}
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}
                        thickness={3}
                        activeColor='#ffffff'
                        selectedIndex={0}
                    >
                        <RadioButton 
                        color="#ffffff"
                        style={{
                            marginLeft: 50,
                            marginRight: 20,
                        }}
                        >
                            <Text style = {{
                                color:'#757575',
                                fontWeight:'bold',
                                fontSize:20,
                                fontFamily:'Roboto-Black',
                                letterSpacing:1,
                                marginTop:-5
                            }}
                            >Contact Us</Text>
                        </RadioButton>
            
                        <RadioButton
                        color="#ffffff"
                        >
                            <Text
                            style = {{
                                color:'#757575',
                                fontWeight:'bold',
                                fontSize:20,
                                fontFamily:'Roboto-Black',
                                letterSpacing:1,
                                marginTop:-5
                            }}
                            >Need Help?</Text>
                        </RadioButton>
                    </RadioGroup>
                </View>
                <View style = {{
                    
                    width:'87%',
                    height:'88%',
                    flexDirection:'column',
                    alignItems:'center',
                    marginLeft:30,
                    backgroundColor:'#ffffff',
                    borderWidth:3,
                    borderColor:'#ffffff',
                    borderRadius:15,
                    marginTop:3
                }}>
                    <Text style = {{
                        fontSize:30,
                        fontWeight:'bold',
                        fontFamily:"Roboto-Bold",
                        letterSpacing:8,
                        color:'#1a237e'
                    }}>
                    CONTACT US</Text>
                    <Text style = {{
                        fontSize:12,
                        fontFamily:'Roboto-Black',
                        letterSpacing:1,
                        color:'#7986cb'
                       
                    }}
                    >FEEL FREE TO DROP US A MESSAGE</Text>
                    <Icon.Button 
                        name="user"
                        color="#9e9e9e"
                        backgroundColor="transparent"  
                        marginRight={170}
                    >
                        <Text style = {{
                            fontWeight:'bold',
                            fontFamily:'Roboto-Black',
                            color:'#9e9e9e'
                        }}
                        >NAME</Text>
                    </Icon.Button>
                    <TextInput
                        autoCapitalize='words'
                        autoFocus={true}
                        keyboardType="default"
                        multiline={true}
                        underlineColorAndroid="transparent"
                        style={{
                            backgroundColor:'#e0f7fa',
                            width:'78%',
                            marginLeft:10,
                            borderRadius:7
                        }}
                        onChangeText = { (text) => {
                            this.setState({
                                name:text
                            })
                            console.log(this.state.name);
                        }}
                    />

                    <Icon.Button 
                        name="phone"
                        color="#9e9e9e"
                        backgroundColor="transparent"
                     
                        marginRight={170}
                    >
                        <Text
                        style = {{
                            fontWeight:'bold',
                            fontFamily:'Roboto-Black',
                            color:'#9e9e9e'
                        }}
                        >NUMBER</Text>
                    </Icon.Button>
                    <TextInput
                        autoCapitalize='words'
                        autoFocus={true}
                        keyboardType="phone-pad"
                        multiline={true}
                        underlineColorAndroid="transparent"
                        style={{
                            backgroundColor:'#e0f7fa',
                            width:'78%',
                            marginLeft:10,
                            borderRadius:7
                        }}
                        onChangeText = { (text) => {
                            this.setState({
                                number:text
                            })
                            console.log(this.state.number);
                        }}
                    />

                    <Icon.Button 
                        name="envelope"
                        color="#9e9e9e"
                        backgroundColor="transparent"
                        marginRight={160}
                    >
                        <Text  style = {{
                            fontWeight:'bold',
                            fontFamily:'Roboto-Black',
                            color:'#9e9e9e'
                        }}
                        >MESSAGE</Text>
                    </Icon.Button>
                    <TextInput
                        autoCapitalize='words'
                        autoFocus={true}
                        keyboardType="default"
                        multiline={true}
                        underlineColorAndroid="transparent"
                        style={{
                            backgroundColor:'#e1f5fe',
                            width:'78%',
                            marginLeft:10,
                            height:'30%',
                            borderRadius:7
                        }}
                        onChangeText = { (text) => {
                            this.setState({
                                message:text
                            })
                            console.log(this.state.message);
                        }}
                    /> 
                    <TouchableHighlight
                        style = {{
                            backgroundColor:'#e64a19',
                            alignItems:'center',
                            width:'40%',
                            height:'8%',
                            marginTop:15,
                            padding:6,
                            borderRadius:10


                        }}
                        onPress={() => {
                            var body = this.state.name +'\n'+ this.state.number +'\n'+ this.state.message
                            Email(to ="jdreamseventmanagement2018@yahoo.com", subject ="Message from JDreams App", body = body, cc = false, bcc = false)
                        }}
                        activeOpacity={2}
                        underlayColor='#00bcd4'
                    >
                        <Text style = {{
                            letterSpacing:4,
                            fontFamily:'Roboto-Black',
                            fontWeight:'bold',
                            color:'#ffffff',
                            fontSize:15,
                        }}>SEND</Text>
                    
                    </TouchableHighlight>
                    
                        
                        
                </View>
          </View>
          </LinearGradient>
          :
          <LinearGradient colors={['#0000ff','#00ffff']}
          style={{
              flex:1
          }}
              >
          <View style = {{ 
              flex:1,
              padding:7
          }}>
              <View style = {{
                  flexDirection:'row',
                  justifyContent:'space-between',
                  alignItems:'center'
              }}>
                  <RadioGroup
                      onSelect = {(index) => this.onSelect(index)}
                      style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                      }}
                      thickness={3}
                      activeColor='#ffffff'
                      selectedIndex={0}
                  >
                      <RadioButton 
                      color="#ffffff"
                      style={{
                          marginLeft: 50,
                          marginRight: 20,
                      }}
                      >
                          <Text style = {{
                              color:'#757575',
                              fontWeight:'bold',
                              fontSize:20,
                              fontFamily:'Roboto-Black',
                              letterSpacing:1,
                              marginTop:-5
                          }}
                          >Contact Us</Text>
                      </RadioButton>
          
                      <RadioButton
                      color="#ffffff"
                      >
                          <Text
                          style = {{
                              color:'#757575',
                              fontWeight:'bold',
                              fontSize:20,
                              fontFamily:'Roboto-Black',
                              letterSpacing:1,
                              marginTop:-5
                          }}
                          >Need Help?</Text>
                      </RadioButton>
                  </RadioGroup>
              </View>
              <View style = {{
                  
                  width:'87%',
                  height:'88%',
                  flexDirection:'column',
                  marginLeft:30,
                  backgroundColor:'#ffffff',
                  borderWidth:3,
                  borderColor:'#ffffff',
                  borderRadius:15,
                  marginTop:3,
                  paddingLeft:20
              }}>
                  <Text style = {{
                      fontSize:30,
                      fontWeight:'bold',
                      fontFamily:"Roboto-Bold",
                      letterSpacing:6,
                      color:'#1a237e',
                      marginTop:100,
                      
                  }}>
                  Need Help ?</Text>
                  <Text style = {{
                    fontSize:15,
                    fontWeight:'bold',
                    fontFamily:"Roboto-Bold",
                    letterSpacing:4,
                    color:'#bdbdbd',
                    padding:10,
                    marginTop:20
                  }}
                  >
                  "Manjushree",{`\n`}
                  Main Road, {`\n`}
                  Kundapur-576201
                  
                  </Text>
                  <View style = {{
                      flexDirection:"row",
                      padding:10
                  }}>
                        <TouchableOpacity
                        style={{
                            borderWidth:1,
                            borderColor:'rgba(0,0,0,0.2)',
                            alignItems:'center',
                            justifyContent:'center',
                            width:35,
                            height:35,
                            backgroundColor:'#009FFD',
                            borderRadius:100,
                            borderWidth:2,
                            borderColor:'#ffffff',

                        }}
                        onPress={() => {
                            call(args).catch(console.error)
                        }}
                
                        >
                            <Icon name={"phone"}  size={25} color="#ffffff" />
                        </TouchableOpacity>
                        <Text style ={{
                            color:'black',
                            letterSpacing:3,
                            marginTop:4,
                            fontFamily:'Roboto-Black',
                            fontSize:15,
                            fontWeight:'500'
                        }}>
                            +91 8277350617
                        </Text>
                  </View>
                  <View style = {{
                    flexDirection:"row",
                    padding:10
                }}>
                      <TouchableOpacity
                      style={{
                          borderWidth:1,
                          borderColor:'rgba(0,0,0,0.2)',
                          alignItems:'center',
                          justifyContent:'center',
                          width:35,
                          height:35,
                          backgroundColor:'#009FFD',
                          borderRadius:100,
                          borderWidth:2,
                          borderColor:'#ffffff',

                      }}
                      onPress={() => {
                        Email(to ="jdreamseventmanagement2018@yahoo.com", subject = false, body = false, cc = false, bcc = false)
                      }}
              
                      >
                      <Icon name={"envelope"}  size={20} color="#ffffff" />
                      </TouchableOpacity>
                      <Text style ={{
                          color:'black',
                          letterSpacing:3,
                          marginTop:4,
                          fontFamily:'Roboto-Black',
                          fontSize:15,
                          fontWeight:'500'
                      }}>
                          jdreamseventmanagement2018@yahoo.com
                      </Text>
                    </View>
                    <View style={{marginLeft:50,
                                  flexDirection:'row'}}>
                        <TouchableOpacity
                            style={{
                              alignItems:'center',
                              justifyContent:'center',
                              width:35,
                              height:35,
                              backgroundColor:'#009FFD',
                              borderRadius:100,
                              marginTop:10

                          }}
                          onPress={() => {
                              Linking.openURL('https://www.instagram.com/jdreamseventmngmnt/').catch(err => console.error('An error occurred', err));
                           }}
                      
                      >
                        <Icon name={"instagram"}  size={25} color="#ffffff" />
                      </TouchableOpacity>

                      <TouchableOpacity
                            style={{
                              
                              alignItems:'center',
                              justifyContent:'center',
                              width:35,
                              height:35,
                              backgroundColor:'#009FFD',
                              borderRadius:100,
                              marginTop:10,
                              marginLeft:10,

                          }}
                          onPress={() => {
                              Linking.openURL('https://www.facebook.com/%E0%B2%9C%E0%B3%86%E0%B2%A1%E0%B3%8D%E0%B2%B0%E0%B3%80%E0%B2%AE%E0%B3%8D%E0%B2%B8%E0%B3%8D%E0%B2%87%E0%B2%B5%E0%B3%860%E0%B2%9F%E0%B3%8D-%E0%B2%AE%E0%B3%8D%E0%B2%AF%E0%B2%BE%E0%B2%A8%E0%B3%87%E0%B2%9C%E0%B3%8D%E0%B2%AE%E0%B3%870%E0%B2%9F%E0%B3%8D-2018911691655313/').catch(err => console.error('An error occurred', err));
                           }}
                      
                      >
                        <Icon name={"facebook"}  size={25} color="#ffffff" />
                      </TouchableOpacity>


                      <TouchableOpacity
                            style={{
                              
                              alignItems:'center',
                              justifyContent:'center',
                              width:35,
                              height:35,
                              backgroundColor:'#009FFD',
                              borderRadius:100,
                              marginTop:10,
                              marginLeft:10,

                          }}
                          onPress={() => {
                              Linking.openURL('https://twitter.com/@jdreamsk').catch(err => console.error('An error occurred', err));
                           }}
                      
                      >
                        <Icon name={"twitter"}  size={25} color="#ffffff" />
                      </TouchableOpacity>


                      <TouchableOpacity
                      style={{
                        
                        alignItems:'center',
                        justifyContent:'center',
                        width:35,
                        height:35,
                        backgroundColor:'#009FFD',
                        borderRadius:100,
                        marginTop:10,
                        marginLeft:10,

                    }}
                    onPress={() => {
                        Linking.openURL('https://plus.google.com/u/0/102856129835217342674').catch(err => console.error('An error occurred', err));
                     }}
                
                >
                  <Icon name={"google-plus"}  size={25} color="#ffffff" />
                </TouchableOpacity>
                      
                </View>       
              </View>
        </View>
        </LinearGradient>
    );
    }
}

export default ContactUs;