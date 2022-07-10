var firebaseConfig = {
  apiKey: "AIzaSyAyjYIdsec5Y4U7f7yMsMA8XqANJO0UE4g",
  authDomain: "to-do-82667.firebaseapp.com",
  projectId: "to-do-82667",
  storageBucket: "to-do-82667.appspot.com",
  messagingSenderId: "566058663261",
  appId: "1:566058663261:web:649d84da91ba5f7badfcb4",
  measurementId: "G-5S6Q1N7ZVY"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Initialize Cloud Firestore and get a reference to the service
var db = firebase.firestore();