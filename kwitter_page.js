var firebaseConfig = {
      apiKey: "AIzaSyBE0GsROZ8rDuL2EK3WnPGOKhSsXoT3NYY",
      authDomain: "kwitter-f2c48.firebaseapp.com",
      databaseURL: "https://kwitter-f2c48-default-rtdb.firebaseio.com",
      projectId: "kwitter-f2c48",
      storageBucket: "kwitter-f2c48.appspot.com",
      messagingSenderId: "465733403617",
      appId: "1:465733403617:web:8247d8c0019bd4e860c8a0",
      measurementId: "G-RDRGPFNP3R"
    };
    
   
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function send(){
      msg =  document.getElementById("msg").value;
      firebase.database().ref(room_name).push({

            name :user_name,
            message : msg,
            like : 0

      });
      document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;


//End code
      } });  }); }
getData();
