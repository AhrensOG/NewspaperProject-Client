// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAi_zGY7hFvu3tiouCu94dfrvrEpdvizm0",
  authDomain: "newspaper-project-storage.firebaseapp.com",
  projectId: "newspaper-project-storage",
  storageBucket: "newspaper-project-storage.appspot.com",
  messagingSenderId: "153687635436",
  appId: "1:153687635436:web:48521287236535b20afcc9",
  measurementId: "G-MZEKJ3ZXH5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const storage = getStorage(app)

export const uploadFile = async (file, title) => {
  const storageRef = ref(storage, `posts/new ${title}`);
  await uploadBytes(storageRef, file)
  const url = await getDownloadURL(storageRef);
  return url
}

