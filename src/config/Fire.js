import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAIHw43qXgsn2UH4ajpdT_r6kfQcC1Jqxw",
    authDomain: "users-7e214.firebaseapp.com",
    databaseURL: "https://users-7e214.firebaseio.com",
    projectId: "users-7e214",
    storageBucket: "users-7e214.appspot.com",
    messagingSenderId: "14708491210",
    appId: "1:14708491210:web:81186bf8638efa5633c533"
};

const fire = firebase.initializeApp(config);
export default fire;