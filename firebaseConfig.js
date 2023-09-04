// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from 'firebase/auth/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyANCb53aW50Wgc6H0Mz64SXV-uyptf1FGE',
  authDomain: 'golfscoringapp-8ea1e.firebaseapp.com',
  projectId: 'golfscoringapp-8ea1e',
  storageBucket: 'golfscoringapp-8ea1e.appspot.com',
  messagingSenderId: '842902242715',
  appId: '1:842902242715:web:47f3f4b82233aed6fe8d3e',
  measurementId: 'G-QP0Z5XME5S',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
