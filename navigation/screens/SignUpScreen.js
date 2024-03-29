import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Dimensions, TextInput, Image, StatusBar } from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesom from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { Platform } from 'react-native';
import { AuthContext } from '../../components/context';

const SignUpScreen = ({navigation}) => {
    const [data, setData] = React.useState({
        email: '',
        password: '',
        confirm_password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true
    });
    const { signUp } = React.useContext(AuthContext);
    const textInputChange = (val) =>{
        if (val.length !== 0){
            setData({
                ...data,
                email: val,
                check_textInputChange: true
            });
        }else {
            setData({
                ...data,
                email: val,
                check_textInputChange: false
            });
        }
    };
    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val,
        });
    };
    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
            confirm_password: val,
        });
    };
    const updateSecureTextEntry =() => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    };
    const updateConfirmSecureTextEntry =() => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        });
    };
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#AD40AF' barStyle="light-content" />
            <View style={styles.header}>
                <Text style={styles.text_header}>Register Now!</Text>
            </View>
            <Animatable.View style={styles.footer} animation="fadeInUpBig">
                <Text style={styles.text_footer}>Email</Text>
                <View style={styles.action}>
                    <FontAwesom name="user-o" color="#05375a" size={20}/>
                    <TextInput placeholder="Your Email" style={styles.textInput} autoCapitalize="none" 
                    onChangeText={(val) => textInputChange(val)}
                    />
                    {data.check_textInputChange ? 
                    <Animatable.View animation="bounceIn">
                        <Feather name="check-circle" color="green" size={20} />
                    </Animatable.View>
                    : null}
                </View>
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
                <Text style={[styles.text_footer, {marginTop: 35}]}>Confirm Password</Text>
                <View style={styles.action}>
                    <Feather name="lock" color="#05375a" size={20}/>
                    <TextInput placeholder="Confirm Your Password" secureTextEntry={data.confirm_secureTextEntry ? true : false} style={styles.textInput} autoCapitalize="none" 
                    onChangeText={(val) => handleConfirmPasswordChange(val)}/>
                    <TouchableOpacity onPress={updateConfirmSecureTextEntry} >
                        {data.confirm_secureTextEntry ? 
                        <Feather name="eye-off" color="grey" size={20} />
                        :
                        <Feather name="eye" color="grey" size={20} />
                        }
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    {/* <Button title="Sign in" style={[styles.signIn, {alignItems:'center'}]} color="#08d4c4" /> */}
                    <TouchableOpacity
                    onPress={() => navigation.navigate(signUp())}
                    style={[styles.signIn,{
                        borderColor: '#08d4c4', borderWidth:1, backgroundColor: '#08d4c4'}]}>
                        <Text style={styles.textSign}>Sign Up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => navigation.navigate('SignInScreen')}
                    style={[styles.signIn,{
                        borderColor: '#009387', borderWidth:1, marginTop: 15}]}>
                        <Text style={[styles.textSign, {color:'#009387'}]}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
};

export default SignUpScreen;

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