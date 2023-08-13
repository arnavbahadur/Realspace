// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';   //from the document
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxDGwd5LEPSjqtuv3_b-M-XwW6HzytAqg",
  authDomain: "realspace-group-313b4.firebaseapp.com",
  projectId: "realspace-group-313b4",
  storageBucket: "realspace-group-313b4.appspot.com",
  messagingSenderId: "794332358770",
  appId: "1:794332358770:web:382c56e80f508851fd3aeb",
  measurementId: "G-7DEEVSKXS3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


//for image storage
export const storage=getStorage(app)












// copied




 //from the document
// const db = getFirestore(app); 
// async function getCities(db) {
//   const citiesCol = collection(db, 'cities');
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   return cityList;
// }



