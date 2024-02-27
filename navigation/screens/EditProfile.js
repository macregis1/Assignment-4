import React from 'react';
import { useState } from "react";
import { View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import FontAwesom from 'react-native-vector-icons/FontAwesome';
// import Feather from 'react-native-vector-icons/Feather';
import { Title, Caption, Text } from 'react-native-paper';
import * as ImagePicker from "expo-image-picker";
import placeholder from './profile-pic.jpg';
import Avatars from '../../components/avatar';
const EditProfile = ({uri}) => {

    const [images, setImages] = useState();
    const takePhotoFromCamera = async (mode) => {
        try{
            let results = {};
            if (mode ==="gallery"){
                await ImagePicker.requestMediaLibraryPermissionsAsync();
                results = await ImagePicker.launchImageLibraryAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.Images,
                    allowsEditing: true,
                    aspect: [1,1],
                    quality: 1,
                });
            }else {
                await ImagePicker.requestCameraPermissionsAsync();
                    results = await ImagePicker.launchCameraAsync({
                    cameraType: ImagePicker.CameraType.front,
                    allowsEditing: true,
                    aspect: [1, 1],
                    quality: 1,
                });
            }
            
            if(!results.canceled){
                await saveImage(results.assets[0].uri);
            }
        } catch (error){
            alert("Error uploading image: " + error.message);
        }
    };
    const saveImage = async (images) => {
        try{
            setImages(images);
        } catch (error){
		throw error;
        }
    };


    return (
        <View style={styles.container}>
           
            <View style={{ margin: 20 }}>
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => { }}>
                        <View style={{ height: 100, width: 100, borderRadius: 15, justifyContent: 'center', alignItems: 'center' }}>
                            <ImageBackground
                                // source={require('./profile-pic.jpg')}
                                source={uri? {uri: (images)} : placeholder}
                                style={{ height: 100, width: 100 }}
                                imageStyle={{ borderRadius: 15 }}
                            >
                                {/* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <Icon name="add-a-photo" size={35} color='#fff' style={{
                                        opacity: 0.7,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderWidth: 1,
                                        borderColor: '#fff',
                                        borderRadius: 10
                                    }} />
                                </View> */}
                            </ImageBackground>
                            {/* <Avatars uri={images}/> */}
                        </View>
                    </TouchableOpacity>
                    <View style={styles.userInfoSection}>
                        <View style={{ marginLeft: 20 }}>
                            <Title style={[styles.title, {
                                marginTop: 15,
                                marginBottom: 5,
                            }]}>Ndahiro Ngoga Regis</Title>
                            <Caption style={styles.caption}>@RegisApp</Caption>
                        </View>
                        <View style={styles.row}>
                            <Icon name="location-on" color="#777777" size={20} />
                            <Text style={{ color: "#777777", marginLeft: 20 }}>Kicukiro-Kigali, Rwanda</Text>
                        </View>
                        <View style={styles.row}>
                            <Icon name="phone" color="#777777" size={20} />
                            <Text style={{ color: "#777777", marginLeft: 20 }}>+250 781234567</Text>
                        </View>
                        <View style={styles.row}>
                            <Icon name="email" color="#777777" size={20} />
                            <Text style={{ color: "#777777", marginLeft: 20 }}>nregis@gmail.com</Text>
                        </View>
                    </View>

                </View>
                <View style={styles.panel}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.panelTitle}>Upload Photo</Text>
                        <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
                    </View>
                    <TouchableOpacity style={styles.panelButton} onPress={()=>{takePhotoFromCamera()}}>
                        <Text style={styles.panelButtonTitle}>Take Photo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.panelButton} onPress={()=>{takePhotoFromCamera("gallery")}}>
                        <Text style={styles.panelButtonTitle}>Choose From Library</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity style={styles.commandButton} onPress={() => { }}>
                <Text style={styles.panelButtonTitle}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
};

export default EditProfile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#333333',
        shadowOffset: { width: -1, height: -3 },
        shadowRadius: 2,
        shadowOpacity: 0.4,
        // elevation: 5,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    panelHeader: {
        alignItems: 'center',
    },
    panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10,
    },
    panelTitle: {
        fontSize: 27,
        height: 35,
    },
    panelSubtitle: {
        fontSize: 14,
        color: 'gray',
        height: 30,
        marginBottom: 10,
    },
    panelButton: {
        padding: 13,
        borderRadius: 10,
        backgroundColor: '#FF6347',
        alignItems: 'center',
        marginVertical: 7,
    },
    panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5,
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    commandButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#FF6347',
        alignItems: 'center',
        marginTop: 10,
    },

});