import * as React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Title, Caption, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import EditProfile from './EditProfile';

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: 'row', marginTop: 15 }}>
          <View>
            <Image source={require('./profile-pic.jpg')} style={styles.profile} size={80} />
            <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate('EditProfile')}>
              <MaterialIcons name="add-a-photo" size={27} color='white' />
            </TouchableOpacity>
          </View>
          <View style={{ marginLeft: 20 }}>
            <Title style={[styles.title, {
              marginTop: 15,
              marginBottom: 5,
            }]}>Ndahiro Ngoga Regis</Title>
            <Caption style={styles.caption}>@RegisApp</Caption>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
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
  );
}
const styles = {
  profile: {
    // Adjust the styles for your profile image
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    // Adjust the styles for the name text
    fontSize: 24,
    color: 'blue',
    marginTop: 8,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  value: {
    fontSize: 16,
  },
  editButton: {
    backgroungColor: '',
    borderRadius: 24,
    padding: 8,
    position: "absolute",
    right: 5,
    bottom: 5,
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
};
