import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Alert, Platform, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import {Notifications} from 'expo';

async function getiOSNotificationPermission() {
  const { status } = await Permissions.getAsync(
    Permissions.NOTIFICATIONS
  );
  if (status !== 'granted') {
    await Permissions.askAsync(Permissions.NOTIFICATIONS);
  }
}

const CreateReminder = (props) => {
  const [profileState, setProfileState] = useState(props);
  // const [test, setTest] = useState('test');

  


  _handleButtonPress = () => {
    const localnotification = {
      title: profileState.medName + ' is about to expire!',
      body: 'Your medicine is about to expire!',
      badge: 1,
      android: {
        sound: true,
      },
      ios: {
        sound: true,
      },
    };
    let sendAfterFiveSeconds = Date.now();
    sendAfterFiveSeconds += 5000;
    console.log(sendAfterFiveSeconds)
    // console.log('>>>' + Math.floor(profileState.expirationDate.getTime()) )
    let scheduleReminder = profileState.expirationDate.getTime();
    // let scheduleReminder = (new Date()).getTime() + 10000
    const schedulingOptions = { time:  scheduleReminder};
    Notifications.scheduleLocalNotificationAsync(
      localnotification,
      schedulingOptions
    );
  };

  listenForNotifications = () => {
    Notifications.addListener(notification => {
      if (notification.origin === 'received' && Platform.OS === 'ios') {
        Alert.alert(notification.title, notification.body);
      }
    });
  };


  useEffect(() => {
    getiOSNotificationPermission();
    this.listenForNotifications();
    setProfileState(props);
  });

  console.log('Time: ' + Date.now())

  var date = new Date()

  var date = Math.floor(new Date().getTime()) 
   console.log('Time: ' + profileState.expirationDate.getTime())


  //  console.log("testing date: " + (profileState.expirationDate.getMonth() + 1)+'/'+profileState.expirationDate.getDate() +'/' + profileState.expirationDate.getFullYear() + ' time: ' + profileState.expirationDate.getHours() + ':' + profileState.expirationDate.getMinutes() + '.......' + profileState.expirationDate.getTime() )

  console.log(">>>>" + profileState.medName)
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={this._handleButtonPress}

        >
          <Text style={styles.buttonText}>
            REMIND ME
          </Text>
        </TouchableOpacity>

      </View>
    );
  }

  export default CreateReminder;


const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText:{
    fontFamily: 'Arial',
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
    
  },
  buttonStyle: {
    marginTop:50,
    height: 48,
    width: '80%', 
    backgroundColor:'#15649F69',
    borderColor: '#15649F69',
    // borderWidth: 2,
    borderRadius: 24,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  }
});