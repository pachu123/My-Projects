import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions,Image,Button,Linking, ScrollView, TouchableOpacity } from 'react-native';
import {navigatorDrawer, navigatorDeepLink} from '../../utils/misc';
import Icon from 'react-native-vector-icons/FontAwesome';
import Carousel from 'react-native-banner-carousel';
import image1 from '../../../Assets/images/title1.jpg';
import image2 from '../../../Assets/images/title2.jpg';
import image3 from '../../../Assets/images/title3.jpg';
import partner1 from '../../../Assets/images/partner1.jpg';
import partner2 from '../../../Assets/images/partner2.jpg';
import partner3 from '../../../Assets/images/partner3.jpg';
import partner4 from '../../../Assets/images/partner4.jpg';
import partner5 from '../../../Assets/images/partner5.jpg';

const BannerWidth =Dimensions.get('window').width;
const BannerHeight = 200;
const images = [
  image1,
  image2,
  image3,
];

class Home extends Component {
  constructor(props) {
    super(props);

    this.props.navigator.setOnNavigatorEvent((event) => {
      navigatorDeepLink(event, this)
      navigatorDrawer(event, this)
    })

  }
  renderPage(image, index) {
    return (
        <View key={index}>
            <Image style={{ width: BannerWidth, height: BannerHeight, resizeMode:'stretch' }} source={image} />
        </View>
    );
}

  render() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Carousel
                        autoplay
                        autoplayTimeout={5000}
                        loop
                        index={0}
                        pageSize={BannerWidth}
                    >
                        {images.map((image, index) => this.renderPage(image, index))}
                    </Carousel>
                </View>
                <View style={styles.partnersContainer}>
                    <Text style={{color:'#212121',
                                  fontSize:15,
                                  textAlign:'center',
                                  fontFamily:'RobotoCondensed-Bold',
                                  textDecorationLine:'underline',
                                  textShadowColor:'red',
                                  textShadowRadius:50,
                                  fontWeight:'bold'}}>
                        OUR PARTNERS
                    </Text>
                    <View style={{flexDirection:'row',marginTop:5}}>
                          <Image source={partner2} style={{height:70,
                                                      width:100,
                                                      resizeMode:'contain', 
                                                      marginLeft:3, 
                                                      borderRadius:30
                                                    }}/>
                          <Image source={partner3} style={{height:70,
                                                      width:100,
                                                      resizeMode:'contain', 
                                                      marginLeft:3, 
                                                      borderRadius:30
                                                    }}/>
                          <Image source={partner4} style={{height:70,
                                                      width:100,
                                                      resizeMode:'contain', 
                                                      marginLeft:3, 
                                                      borderRadius:30
                                                    }}/>
                          <Image source={partner5} style={{height:70,
                                                      width:100,
                                                      resizeMode:'contain', 
                                                      marginLeft:3, 
                                                      borderRadius:30
                                                    }}/>
                     
                    </View>
                    <Text style={{color:'#212121',
                                  fontSize:15,
                                  textAlign:'center',
                                  fontFamily:'RobotoCondensed-Bold',
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
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'flex-start',
},
imageContainer:{
  backgroundColor:'#009FFD',
  paddingBottom:10,
  marginBottom: 20,
  borderBottomLeftRadius: 10,
  borderBottomRightRadius: 10,
},
partnersContainer:{
  flex:1,
  justifyContent: 'flex-end',
  backgroundColor:'#ffffff',
  height:'100%',
  width:'100%',
  marginTop: 50,
  marginBottom: 10,
  borderRadius: 10,

  
}

});

export default Home;