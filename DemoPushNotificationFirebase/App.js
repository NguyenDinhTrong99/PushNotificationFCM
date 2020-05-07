import React, {Component, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Animated,
  Easing,
} from 'react-native';
import NotificationServices from './app/NotificationServices';
import notifee, {
  Importance,
  EventType,
  AndroidStyle,
  AndroidBadgeIconType,
} from '@notifee/react-native';
import messaging from '@react-native-firebase/messaging';

const id = 'ID_NOTIFICATION';

export default class App extends Component {
  constructor(props) {
    super(props);
    console.disableYellowBox = true;
    this.initChannel();
    this.state = {text: ''};
    this.initRemoteNotification();
    this.initPermissionIos();
  }

  async initChannel() {
    await notifee.createChannel({
      id: 'vnext',
      name: 'Channel',
      importance: Importance.HIGH,
    });
    //Handle action button in notification
    //android only
    notifee.onForegroundEvent(({type, detail}) => {
      if (type === EventType.ACTION_PRESS && detail.pressAction.id) {
        notifee.cancelAllNotifications();
      }
    });
    //ios only
    notifee.onBackgroundEvent(async ({type, detail}) => {
      if (type === EventType.PRESS) {
        console.log('User pressed the notification.', detail.pressAction.id);
      }
    });
    ////#end
  }

  async initPermissionIos() {
    if (Platform.OS === 'android') return;
    const result = await notifee.requestPermission({
      provisional: true,
    });
    if (result) {
      result.authorizationStatus
        ? console.log('User has notifications enabled')
        : console.log('User has notifications disable');
    }
  }

  async initRemoteNotification() {
    messaging().onMessage(async (remoteMessage) => {
      console.log('Notification', JSON.stringify(remoteMessage));
      const {notification} = remoteMessage;
      console.log('UrlImage', notification.imageUrl);
      notifee.displayNotification({
        id: 'ID_NOTIFICATION',
        title: `<p style="color: #4caf50;"><b>${notification.title}</span></p></b></p> &#128576;`,
        body: `${notification.body}`,
        android: {
          channelId: 'vnext',
          color: '#00e676',
          largeIcon: notification.android.imageUrl,
          badgeIconType: AndroidBadgeIconType.LARGE,
          style: {
            type: AndroidStyle.BIGPICTURE,
            picture: notification.android.imageUrl,
          },
          actions: [
            {
              title: '<b>Yes</b>',
              pressAction: {
                id: 'dance',
              },
            },
            {
              title: '<p style="color: #f44336;"><b>No</b></p>',
              pressAction: {id: 'cry'},
            },
          ],
        },
        ios: {
          categoryId: 'post',
          importance: Importance.HIGH,
        },
      });
    });
    messaging().setBackgroundMessageHandler(async (remoteMessage) => {
      console.log('Message handled in the background!', remoteMessage);
    });

    messaging().onNotificationOpenedApp((remoteMessage) => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification,
      );
    });
    messaging()
      .getInitialNotification()
      .then((remoteMessage) => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          );
        }
      });
    //create category - ios Only
    await notifee.setNotificationCategories([
      {
        id: 'post',
        actions: [
          {
            id: 'yes',
            title: 'Yes',
          },
          {
            id: 'no',
            title: 'No',
          },
        ],
      },
    ]);
  }

  render() {
    const minHeight = this.height;
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={this.pushNotification}>
          <Text style={{color: 'white', margin: 4}}>
            Push Local Notification
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={this.clearNotification}>
          <Text style={{color: 'white', margin: 4}}>
            Clear Local Notification
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  async clearNotification() {
    await notifee.cancelNotification('ID_NOTIFICATION');
  }
  pushNotification() {
    notifee.displayNotification({
      id,
      title: `<p style="color: #4caf50;"><b>Vnext Notification</span></p></b></p> &#128576;`,
      body: 'Vnext notification',
      android: {
        channelId: 'vnext',
        importance: Importance.HIGH,
        color: '#00e676',
        actions: [
          {
            title: '<b>Yes</b>',
            pressAction: {
              id: 'dance',
            },
          },
          {
            title: '<p style="color: #f44336;"><b>Close</b></p>',
            pressAction: {id: 'cry'},
          },
        ],
      },
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    height: 48,
    width: 200,
    marginTop: 10,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
