import {
    Dimensions,
    Platform,
    AsyncStorage
} from 'react-native';

export const APIKEY = `AIzaSyDXRmK9wnZyT-iJd4uE3cp98E2g3pd8gCM`;
export const SIGNUP = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${APIKEY}`
export const SIGNIN = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${APIKEY}`
export const REFRESH = `https://securetoken.googleapis.com/v1/token?key=${APIKEY}`


export const getOrientation = (value) =>{
    return Dimensions.get("window").height > value ? "portrait" : "landscape" 
}

export const setOrientationListner = (cb) => {
        return Dimensions.addEventListener("change",cb)
}

export const removeOrientationListener = () => {
    return Dimensions.removeEventListener("change")
}

export const getPlatform = () => {
    if(Platform.OS === 'ios'){
        return "ios"
    } else {
        return "android"
    }
}


export const navigatorDrawer = (event, $this) => {
    if(event.type === "NavBarButtonPress" && event.id === "DrawerButton" ) {
        $this.props.navigator.toggleDrawer({
            side:'left',
            animated:true
        })
    }
}

export const navigatorDeepLink =(event, $this)=> {
    if(event.type === 'DeepLink') {
        $this.props.navigator.toggleDrawer({
            side:'left',
            animated:true
        });
        if(event.payload.typeLink === 'tab'){
            $this.props.navigator.switchToTab({
                tabIndex:event.payload.indexLink
            });
        }
    }
}

export const getTokens = (cb) => {
    AsyncStorage.multiGet([
        '@JDreams@token', 
         '@JDreams@refreshToken',
        '@JDreams@expirationToken',
        '@JDreams@uid',
    ]).then( value => {
        cb(value);
    })
}

export const setTokens = (values,cb) => {
    const dateNow = new Date();
    const expiration = dateNow.getTime() + (3600 * 1000);

    AsyncStorage.multiSet([
        ['@JDreams@token',values.token],
        ['@JDreams@refreshToken',values.refToken],
        ['@JDreams@expirationToken',expiration.toString()],
        ['@JDreams@uid',values.uid],
    ]).then( response => {
        cb();
    })
}