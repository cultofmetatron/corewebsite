// import firebase from 'firebase';
const firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');
require('firebase/firestore');

const config = {
  apiKey: 'AIzaSyBKGlJT_f799luGnEYbxoD-bobxfuWrei0',
  authDomain: 'freelancer-website-806f4.firebaseapp.com',
  databaseURL: 'https://freelancer-website-806f4.firebaseio.com',
  projectId: 'freelancer-website-806f4',
  storageBucket: 'freelancer-website-806f4.appspot.com',
  messagingSenderId: '671187037485'
};
firebase.initializeApp(config);
export default firebase;
