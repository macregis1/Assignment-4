import React from 'react';
import { View, StyleSheet, TouchableOpacity} from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AuthContext } from '../components/context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export function DrawerContent({ navigation, ...props }) {
    const [isDarkTheme, setIsDarkTheme] = React.useState(false);
    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };
    const { signOut } = React.useContext(AuthContext);
    return (
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection: 'row', marginTop: 15}}>
                            <View>
                                <Avatar.Image source={require('./screens/profile-pic.jpg')} size={70} />
                                <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate('EditProfile')}>
                                    <MaterialIcons name="add-a-photo" size={27} color='white' />
                                </TouchableOpacity>
                            </View>
                            <View style={{marginLeft: 15, flexDirection: 'column'}}>
                                <Title style={styles.title}>Ndahiro Ngoga Regis</Title>
                                <Caption style={styles.caption}>@RegisApp</Caption>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>23</Paragraph>
                                <Caption style={styles.caption}>Following</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>98</Paragraph>
                                <Caption style={styles.caption}>Follower</Caption>
                            </View>
                        </View>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon name="home-outline" color={color} size={size} />
                            )}
                            label="Home" onPress={() => {props.navigation.navigate('Home')}} />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon name="account-outline" color={color} size={size} />
                            )}
                            label="Profile" onPress={() => {props.navigation.navigate('profile')}} />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon name="account-check-outline" color={color} size={size} />
                            )}
                            label="Support" onPress={() => {props.navigation.navigate('Support') }} />
                    </Drawer.Section>
                    <Drawer.Section title='preference'>
                        <TouchableRipple onPress={() => {toggleTheme()}}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={isDarkTheme} />
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                icon={({color, size}) => (
                    <Icon name="exit-to-app" color={color} size={size} />
                )}
                label="Sign out" onPress={() => {signOut()}} />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: { 
        flex: 1,
    },
    userInfoSection: {
        paddingLeft:20,
    },
    title: {
        fontSize:16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    editButton: {
        backgroungColor: '',
        borderRadius: 28,
        padding: 3,
        position: "absolute",
        right: 1,
        bottom: 1,
      },
});