import { Navigation } from 'react-native-navigation';
import falseIcon from '../../../Assets/images/circle.png';
import Icon from 'react-native-vector-icons/FontAwesome';


const navLeftButtons = (sources) => {
    return {
        title:'Drawer',
        id:'DrawerButton',
        icon:sources[0],
        disableIconTint:true,
        buttonColor:'white',
    }
}

const navStyle = {
    navBarTextFontSize:20,
    navBarTextColor:'#ffffff',
    navBarTextFontFamily:'RobotoCondensed-Bold',
    navBarTitleTextCentered: true,
    navBarBackgroundColor:'#009FFD',
    //tabBarHidden: true,
}

const loadTabs = () => {
    Promise.all([
        Icon.getImageSource('bars',20,'white'),
        Icon.getImageSource('users',20,'white'),
        Icon.getImageSource('home',20,'white'),
        Icon.getImageSource('gears',20,'white'),
        Icon.getImageSource('address-card',20,'white')
    ]).then( sources => {
        Navigation.startTabBasedApp({
            tabs:[
                {
                    screen:"JDreams.Home",
                    label:"Home",
                    title:"Home",
                    icon:sources[2],
                    navigatorStyle:navStyle,
                    navigatorButtons:{
                        leftButtons:[navLeftButtons(sources)]
                    }
                },
                {
                    screen:"JDreams.Services",
                    label:"Services",
                    title:"Services",
                    icon:sources[3],
                    navigatorStyle:navStyle,
                    navigatorButtons:{
                        leftButtons:[navLeftButtons(sources)]
                    }
                },
                {
                    screen:"JDreams.About",
                    label:"About Us",
                    title:"About Us",
                    icon:sources[1],
                    navigatorStyle:navStyle,
                    navigatorButtons:{
                        leftButtons:[navLeftButtons(sources)]
                    }
                },

                {
                    screen:"JDreams.ContactUs",
                    label:"Conatct Us ",
                    title:"Contact Us",
                    icon:sources[4],
                    navigatorStyle:navStyle,
                    navigatorButtons:{
                        leftButtons:[navLeftButtons(sources)]
                    }
                },
                
            ],
            appStyle:{
                tabBarBackgroundColor: '#009FFD',
                tabBarButtonColor: 'black',
                tabBarSelectedButtonColor: 'white',
                tabBarTranslucent: false,
                tabFontFamily: 'RobotoCondensed-Bold',
            },
            drawer:{
                left:{
                    screen:"JDreams.SideDrawerComponent",
                    fixedWidth:500,
                }
            }
        })
    })

    
}

export default loadTabs;