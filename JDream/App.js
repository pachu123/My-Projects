import { Navigation } from 'react-native-navigation';
import configureStore from './src/Components/Store/config';
import { Provider } from 'react-redux';

import Login from './src/Components/Views/Login';
import Home from './src/Components/Views/Home';
import About from './src/Components/Views/About';
import Services from './src/Components/Views/Services';
import SideDrawerComponent from './src/Components/Views/SideDrawer';
import ContactUs from './src/Components/Views/ContactUs';

const store = configureStore();

Navigation.registerComponent(
  "JDreams.Login",
   () =>
   Login, 
   store, 
   Provider 
  );
Navigation.registerComponent(
  "JDreams.Home",
   () =>
   Home, 
   store, 
   Provider 
  );
Navigation.registerComponent(
  "JDreams.About",
  () =>
     About, 
     store, 
     Provider 
  );
Navigation.registerComponent(
  "JDreams.SideDrawerComponent",
  () =>
    SideDrawerComponent, 
    store, 
    Provider 
  );

  Navigation.registerComponent(
    "JDreams.Services",
      () =>
         Services, 
         store, 
         Provider 
  );

  Navigation.registerComponent(
    "JDreams.ContactUs",
      () =>
         ContactUs, 
         store, 
         Provider 
    );

export default () => Navigation.startSingleScreenApp( {
  screen:{
    screen:"JDreams.Login",
    title:"Login",
    navigatorStyle:{
      navBarHidden:true,
    }
  }
})