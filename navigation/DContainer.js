import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React, {useContext} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';

// Screens
import ProfileScreen from './screens/profile';
import BottomTab from './BottomTab';
import SupportScreen from './screens/SupportScreen';
import { DrawerContent } from './DrawerContent';

// const homeTab = 'HomeTab';
const contactName = 'Contact';
const calculatorName = 'Calculator';
const profileName = 'Profile';
const loginName = 'login';
const registerName = 'register';


const Drawer = createDrawerNavigator();

export default function DContainer() {
  return (    
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}
      screenOptions={({route}) => ({
                drawerIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;

                    if(rn === homeTab) {
                        iconName = focused ? 'home' : 'home-outline';
                    }else if (rn ===calculatorName) {
                        iconName = focused ? 'calculator' : 'calculator-outline';
                    }else if (rn === contactName) {
                        iconName = focused ? 'call' : 'call-outline';
                    }else if (rn === profileName){
                      iconName = focused ? 'image' : 'image-outline';
                    }else if (rn === loginName){
                        iconName = focused ? 'person' : 'person-outline';
                    }else if (rn === registerName) {
                        iconName = focused ? 'person-add' : 'person-add-outline'; 
                    }

                    return <Ionicons name={iconName} size={size} color={color}/>
                },
            })}
            >
        {/* <Drawer.Screen name="HomeTab" component={MContainer} /> */}
        <Drawer.Screen name="Homeab" component={BottomTab} />
        <Drawer.Screen name="Support" component={SupportScreen} />
      </Drawer.Navigator>
  );
}


