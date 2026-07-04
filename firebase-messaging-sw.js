importScripts('https://www.gstatic.com/firebasejs/12.14.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/12.14.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyC4AwrIiysPn9oZesp8Y22CtEXAXvAtU6A",
  authDomain: "singuion-online.firebaseapp.com",
  projectId: "singuion-online",
  storageBucket: "singuion-online.firebasestorage.app",
  messagingSenderId: "964107619893",
  appId: "1:964107619893:web:079efa431eaf011517ab7c"
});

const messaging = firebase.messaging();