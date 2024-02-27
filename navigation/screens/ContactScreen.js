import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native';
import * as Contacts from "expo-contacts";
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ContactScreen({navigation}) {
  const [contacts, setContacts] = useState();
  const getContact = async () => {
    try {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { datas } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers]
        })
        if (datas.length >= 1) {
          setContacts(datas);
        }
      };
    } catch (error) {
      alert("Error geting contacts: " + error.message);
    }
  };
  // useEffect(() => {
  //   (async() => {
  //     const {status} = await Contacts.requestPermissionsAsync();
  //     if (status==='granted'){
  //       const {datas} = await Contacts.getContactsAsync({
  //         fields: [Contacts.Fields.PhoneNumbers]
  //       })
  //       if(datas.length>0){
  //         setContacts(datas);
  //       }
  //     };
  //   })()
  // });
    const [contactsData] = useState([
        { id: '1', name: 'Names', phoneNumber: 'Ndahiro Ngoga Regis' },
        { id: '2', name: 'Phone', phoneNumber: '123-456-7890' },
        { id: '3', name: 'Email', phoneNumber: 'regis@gmail.com' },
        // Add more contacts as needed
      ]);
    
      const renderItem = ({ item }) => (
        <View style={styles.contactItem}>
          <TextInput
            style={styles.contactNameInput}
            value={item.name}
            placeholder="Name"
          />
          <TextInput
            style={styles.contactPhoneNumberInput}
            value={item.phoneNumber}
            placeholder="Phone Number"
            keyboardType="phone-pad"
          />
        </View>
      );
    
      return (
        <View style={styles.container}>
          <FlatList
            data={contactsData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            style={styles.contactList}
          />
          <TouchableOpacity onPress={() => {getContact()}}>
            <Icon name="comment" size={35} color='#000' style={{
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 1,
              borderColor: '#fff',
              borderRadius: 10
            }} />
          </TouchableOpacity>
          <FlatList
          style={{
            width: '100%', padding: 20, marginTop: 50
          }}
          datas={Contacts}
          keyExtractor={item => item.id}
          renderItem={(item)=>{
            return (
              <View>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>{item.name}</Text>
                <Text style={{fontSize: 17}}>{item.phoneNumbers && item.phoneNumbers[0] && item.phoneNumbers[0].number}</Text>
              </View>
            )
          }}
          />
        </View>
        
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        paddingVertical: 20,
      },
      contactList: {
        paddingHorizontal: 20,
      },
      contactItem: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
        elevation: 2,
      },
      contactNameInput: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
      },
      contactPhoneNumberInput: {
        fontSize: 16,
        color: '#888',
      },
    });