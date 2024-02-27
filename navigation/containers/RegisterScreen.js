// import React from 'react';
// import { View, Text, SafeAreaView, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
// // import MaterialIcons from 'react-native-vector-icons/materialIcons'
// import Ionicons from 'react-native-vector-icons/Ionicons';

// const RegisterScreen = ({navigation}) => {
//     return (
//         <SafeAreaView style={{flex:1, justifyContent: 'center'}}>
//         <ScrollView showsVerticalScrollIndicator={false} style={{paddingHorizontal: 25}}>
//             <View style={{alignItems: 'center'}}>
//                 <Image source={require('./profile-pic.jpg')} style={styles.profile} />
//             </View>
//             <View style={{paddingHorizontal: 25}}>
//                 <Text style={{ fontSize:48, fontWeight:'500',color:'#333',marginBottom:30}}>Register</Text>
//                 <View style={{flexDirection:'row',borderBottomColor:'#ccc',borderBottomWidth: 1,paddingBottom: 8, marginBottom: 25}}>
//                     <Ionicons name='person-outline' color="#666" size={20} style={{marginRight:5}}/>
//                     <TextInput placeholder="Full Names" style={{flex: 1,paddingVertical: 0}}/>
//                 </View>
//                 <View style={{flexDirection:'row',borderBottomColor:'#ccc',borderBottomWidth: 1,paddingBottom: 8, marginBottom: 25}}>
//                     <Ionicons name='at-outline' color="#666" size={20} style={{marginRight:5}}/>
//                     <TextInput placeholder="Email Address" style={{flex: 1,paddingVertical: 0}} keyboardType="email-address"/>
//                 </View>
//                 <View style={{flexDirection:'row',borderBottomColor:'#ccc',borderBottomWidth: 1,paddingBottom: 8, marginBottom: 25}}>
//                     <Ionicons name='lock-closed-outline' color="#666" size={20} style={{marginRight:5}}/>
//                     <TextInput placeholder="Password" style={{flex: 1,paddingVertical: 0}} secureTextEntry={true}/>
//                 </View>
//                 <View style={{flexDirection:'row',borderBottomColor:'#ccc',borderBottomWidth: 1,paddingBottom: 8, marginBottom: 25}}>
//                     <Ionicons name='lock-closed-outline' color="#666" size={20} style={{marginRight:5}}/>
//                     <TextInput placeholder="Confirm-Password" style={{flex: 1,paddingVertical: 0}} secureTextEntry={true}/>
//                 </View>
//                 <TouchableOpacity style={{backgroundColor:'#AD40AF',padding: 20,borderRadius: 10,marginBottom: 30}} onPress={() => {}}>
//                     <Text style={{textAlign:'center',fontWeight:'700',fontSize: 16, color:'#fff'}}>Register</Text>
//                 </TouchableOpacity>
//                 <Text style={{textAlign:'center',color:'#666',marginBottom:30}}>Or, Register with ...</Text>
//                 <View style={{flexDirection:'row',justifyContent: 'space-between', marginBottom: 30}}>
//                     <TouchableOpacity style={{borderColor:'#ddd',borderWidth: 2,borderRadius: 10,paddingHorizontal: 30, paddingVertical: 10}} onPress={() => {}}>
//                         <Image source={require('./imas.jpg')} style={styles.logo}/>
//                     </TouchableOpacity>
//                 </View>
//                 <View style={{flexDirection:'row',justifyContent: 'center',marginBottom:30}}>
//                 <TouchableOpacity onPress={() => navigation.goBack()}>
//                     <Text style={{color:'#AD40AF',fontWeight:'700'}}>Have account, Login</Text>
//                 </TouchableOpacity>                
//                 </View>                
//             </View>
//         </ScrollView>
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

// export default RegisterScreen