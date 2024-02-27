// import React,{useContext} from 'react';
// import { View, Text, SafeAreaView, TextInput, Image, TouchableOpacity } from 'react-native';
// // import MaterialIcons from 'react-native-vector-icons/materialIcons'
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { AuthContext } from '../AutoContext';

// const LoginScreen = ({navigation}) => {
//     const {login} = useContext (AuthContext);
//     return (
//         <SafeAreaView style={{flex:1, justifyContent: 'center'}}>
//             <View style={{alignItems: 'center'}}>
//                 <Image source={require('./profile-pic.jpg')} style={styles.profile} />
//             </View>
//             <View style={{paddingHorizontal: 25}}>
//                 <Text style={{ fontSize:48, fontWeight:'500',color:'#333',marginBottom:30}}>Login</Text>
//                 <View style={{flexDirection:'row',borderBottomColor:'#ccc',borderBottomWidth: 1,paddingBottom: 8, marginBottom: 25}}>
//                     <Ionicons name='at-outline' color="#666" size={20} style={{marginRight:5}}/>
//                     <TextInput placeholder="Email Address" style={{flex: 1,paddingVertical: 0}} keyboardType="email-address"/>
//                 </View>
//                 <View style={{flexDirection:'row',borderBottomColor:'#ccc',borderBottomWidth: 1,paddingBottom: 8, marginBottom: 25}}>
//                     <Ionicons name='lock-closed-outline' color="#666" size={20} style={{marginRight:5}}/>
//                     <TextInput placeholder="Password" style={{flex: 1,paddingVertical: 0}} secureTextEntry={true}/>
//                     <TouchableOpacity onPress={() => {}}>
//                         <Text style={{color:'#AD40AF', fontWeight:'700'}}>Forgot</Text>
//                     </TouchableOpacity>
//                 </View>
//                 <TouchableOpacity style={{backgroundColor:'#AD40AF',padding: 20,borderRadius: 10,marginBottom: 30}} onPress={() => { login()}}>
//                     <Text style={{textAlign:'center',fontWeight:'700',fontSize: 16, color:'#fff'}}>Login</Text>
//                 </TouchableOpacity>
//                 <Text style={{textAlign:'center',color:'#666',marginBottom:30}}>Or, Login with ...</Text>
//                 <View style={{flexDirection:'row',justifyContent: 'space-between', marginBottom: 30}}>
//                     <TouchableOpacity style={{borderColor:'#ddd',borderWidth: 2,borderRadius: 1,paddingHorizontal: 5, paddingVertical: 5}} onPress={() => {}}>
//                         <Image source={require('./imas.jpg')} style={styles.logo}/>
//                     </TouchableOpacity>
//                 </View>
//                 <View style={{flexDirection:'row',justifyContent: 'center',marginBottom:30}}>
//                 <TouchableOpacity onPress={() => navigation.navigate('Register')}>
//                     <Text style={{color:'#AD40AF',fontWeight:'700'}}>No account,Register</Text>
//                 </TouchableOpacity>
//                 </View>
//             </View>
//         </SafeAreaView>
//     )
// }
// const styles = {
//     profile: {
//       // Adjust the styles for your profile image
//       width: 100,
//       height: 100,
//       borderRadius: 50,
//     },
//     logo: {
//         // Adjust the styles for your profile image
//         width: 50,
//         height: 50,
//         borderRadius: 25,
//       }
//   };

// export default LoginScreen