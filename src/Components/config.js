 
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyCqzf68K2jDFMkCiVswKZ_VGafknzE78zs",
  authDomain: "hotel-booking-87303.firebaseapp.com",
  projectId: "hotel-booking-87303",
  storageBucket: "hotel-booking-87303.appspot.com",
  messagingSenderId: "584040418712",
  appId: "1:584040418712:web:bd8bb1d26919031b376fed",
  measurementId: "G-006XCX3D9N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export {auth , provider};