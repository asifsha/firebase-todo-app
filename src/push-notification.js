import firebase from 'firebase';
import { firebaseConfig } from "./firebaseconfig";

export const initializeFirebase = () => {
  firebase.initializeApp({
    firebaseConfig
  });
  
}

export const askForPermissioToReceiveNotifications = async () => {
  try {

    const messaging = firebase.messaging();

    await messaging.requestPermission();
    const token = await messaging.getToken();
    console.log('user token: ', token);

    return token;
  } catch (error) {
    console.error(error);
  }
}