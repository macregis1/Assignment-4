import React,{useContext} from 'react';
import{View, Text, TouchableOpacity, Switch} from 'react-native';
import { AuthContext } from '../AutoContext';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function HomeScreen({navigation}) {
    const [isDarkTheme, setIsDarkTheme] = React.useState(false);
    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme); 
    }  
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
            <Text onPress={() => alert("this is the home page")} style={{fontSize: 26, fontWeight: 'bold'}}>Home Screen</Text>
        </View>
    );
}