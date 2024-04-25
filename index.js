
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
  import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyA2NWopVbC30fVMEi2FAqwcfrf5TaJ39qI",
    authDomain: "sayyourmind-13542.firebaseapp.com",
    databaseURL: "https://sayyourmind-13542-default-rtdb.firebaseio.com",
    projectId: "sayyourmind-13542",
    storageBucket: "sayyourmind-13542.appspot.com",
    messagingSenderId: "64566330399",
    appId: "1:64566330399:web:4db8aa731f95a368b4012a"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = getDatabase(app);

  document.getElementById("submit").addEventListener('click', function(e){

    set(ref(db, 'user/' + document.getElementById("writeName").value),
    {
        writer: document.getElementById("writeName").value,
        student: document.getElementById("stdName").value,
        message: document.getElementById("message").value
    });
    alert("Success!");
  })