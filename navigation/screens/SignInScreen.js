import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Dimensions, TextInput, Image, StatusBar, Alert } from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesom from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { Platform } from 'react-native';
import { AuthContext } from '../../components/context';
import Users from '../../model/users';

const SignInScreen = ({navigation}) => {
    const [data, setData] = React.useState({
        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });
    const { signIn } = React.useContext(AuthContext);
    const textInputChange = (val) =>{
        if (val.trim().length >= 5){
            setData({
                ...data,
                email: val,
                check_textInputChange: true,
                isValidUser: true
            });
        }else {
            setData({
                ...data,
                email: val,
                check_textInputChange: false,
                isValidUser: false
            });
        }
    };
    const handlePasswordChange = (val) => {
        if (val.trim().length >= 8) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        }else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    };
    const updateSecureTextEntry =() => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    };
    const handleValidUser =(val) => {
        if ( val.trim().length >= 5) {
            setData({
                ...data,
                isValidUser: true,
        });
        }else {
            setData({
                ...data,
                isValidUser: false,
        });
        }
    };

    const loginHandler = (email, password) => {
        const foundUser = Users.filter( item => {
            return email === item.email && password === item.password;
        });
        if (data.email.length === 0 || data.password.length === 0) {
            Alert.alert('Wrong input!', 'username or password cannot be empty',[
                {text: 'okay'}
            ]);
            return;
        }
        if (foundUser.length === 0) {
            Alert.alert('Invalid user', 'username or password is incorrect',[
                {text: 'okay'}
            ]);
            return;
        }
        signIn(foundUser);
    };
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#AD40AF' barStyle="light-content" />
            <View style={styles.header}>
                <Text style={styles.text_header}>Welcome!</Text>
            </View>
            <Animatable.View style={styles.footer} animation="fadeInUpBig">
                <Text style={styles.text_footer}>UserName</Text>
                <View style={styles.action}>
                    <FontAwesom name="user-o" color="#05375a" size={20}/>
                    <TextInput placeholder="Your Email" style={styles.textInput} autoCapitalize="none" 
                    onChangeText={(val) => textInputChange(val)}
                    onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
                    />
                    {data.check_textInputChange ? 
                    <Animatable.View animation="bounceIn">
                        <Feather name="check-circle" color="green" size={20} />
                    </Animatable.View>
                    : null}
                </View>
                {data.isValidUser ? null :
                <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>user must be 5 characters long.</Text>
                </Animatable.View>
                }
                <Text style={[styles.text_footer, {marginTop: 35}]}>Password</Text>
                <View style={styles.action}>
                    <Feather name="lock" color="#05375a" size={20}/>
                    <TextInput placeholder="Your Password" secureTextEntry={data.secureTextEntry ? true : false} style={styles.textInput} autoCapitalize="none" 
                    onChangeText={(val) => handlePasswordChange(val)}/>
                    <TouchableOpacity onPress={updateSecureTextEntry} >
                        {data.secureTextEntry ? 
                        <Feather name="eye-off" color="grey" size={20} />
                        :
                        <Feather name="eye" color="grey" size={20} />
                        }
                    </TouchableOpacity>
                </View>
                {data.isValidPassword ? null : 
                <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>Password must be 8 characters long.</Text>
                </Animatable.View>
                }
                <TouchableOpacity>
                    <Text style={{color: '#009387', marginTop:15}}>Forgot password?</Text>
                </TouchableOpacity>
                <View style={styles.button}>
                    {/* <Button title="Sign in" style={[styles.signIn, {alignItems:'center'}]} color="#08d4c4" /> */}
                    <TouchableOpacity
                    onPress={() => {loginHandler( data.email, data.password )}}
                    style={[styles.signIn,{
                        borderColor: '#08d4c4', borderWidth:1, backgroundColor: '#08d4c4'}]}>
                        <Text style={styles.textSign}>Sign in</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => navigation.navigate('SignUpScreen')}
                    style={[styles.signIn,{
                        borderColor: '#009387', borderWidth:1, marginTop: 15}]}>
                        <Text style={[styles.textSign, {color:'#009387'}]}>Sign up</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
};

export default SignInScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#AD40AF'
        // backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 2,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 30,
        paddingHorizontal: 20,
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop : 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'android' ? 0 : -10,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    signIn: {
        width: '100%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold',
    }
});