import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from 'firebase/firestore'

export default defineNuxtPlugin( (nuxtApp) => {
  // Import the functions you need from the SDKs you need
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBb3QM-zPoSRO4rJfBHMUhMGLydw9ZbnCg",
    authDomain: "reasonsmelissaisawesome.firebaseapp.com",
    projectId: "reasonsmelissaisawesome",
    storageBucket: "reasonsmelissaisawesome.firebasestorage.app",
    messagingSenderId: "70021737386",
    appId: "1:70021737386:web:ecce2995a3534611ba19d3",
    measurementId: "G-WX75ETK1CE"
  }

  // Initialize Firebase
  const app = initializeApp(firebaseConfig)
  const analytics = getAnalytics(app)

  const db = getFirestore(app)

  nuxtApp.provide('firebaseApp', app)
  nuxtApp.provide('db', db)
  nuxtApp.provide('analytics', analytics)
})
