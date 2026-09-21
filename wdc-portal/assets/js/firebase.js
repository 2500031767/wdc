/* ===================== WDC Portal — Firebase init =================== */

const firebaseConfig = {
  apiKey: "AIzaSyDyN_MjXfgBau52C_imSmyJeIRUlvswQLw",
  authDomain: "wdc-kl.firebaseapp.com",
  databaseURL: "https://wdc-kl-default-rtdb.firebaseio.com",
  projectId: "wdc-kl",
  storageBucket: "wdc-kl.firebasestorage.app",
  messagingSenderId: "389487514141",
  appId: "1:389487514141:web:02c0d89d3356cc53476cf4"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
