var firebaseConfig = {
  apiKey: "AIzaSyDbO6E0_l2N-A2PnIxbeg9mWSL3LItwL-A",
  authDomain: "kwitter-project-c4277.firebaseapp.com",
  databaseURL: "https://kwitter-project-c4277-default-rtdb.firebaseio.com",
  projectId: "kwitter-project-c4277",
  storageBucket: "kwitter-project-c4277.appspot.com",
  messagingSenderId: "1059963976143",
  appId: "1:1059963976143:web:39b0bc663df12cceb2faba",
  measurementId: "G-8Y70Q7XJEF"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("Name");
room_name = localStorage.getItem("addroomname");
function send() {
    Message = document.getElementById("send_input").value ;
    firebase.database().ref(room_name).push({
        name:user_name, 
        message:Message,
        likes:0});
    document.getElementById("send_input").value="";
    }
    function logout() {
      localStorage.removeItem("addroomname");
      localStorage.removeItem("Name");
      window.location="index.html";
    }
    function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") { 
    firebase_message_id = childKey; 
    message_data = childData;
    name = message_data["name"];
    message = message_data["message"];
    like = message_data["likes"];
    // <h4> name <img id="img1" src="tick.png"> </h4>
    name_tag = "<h4>"+ name+"<img id='img1' src='tick.png'> </h4>";
    // <h4> message </h4>
    message_tag = "<h4>" +message+"</h4>";
    // <button class="btn btn-danger" id="firebase_massage_id" value=like onclick="????(this.id)"> 
    button_tag = "<button class='btn btn-danger' id='"+ firebase_message_id+"' value='"+like+"' onclick='updatelike(this.id)'>"; 
    span_tag = "<span class='glyphicon glyphicon-thumbs-up'> Like "+ like+"</span> </button> <hr>";
    all_tags = name_tag+message_tag+button_tag+span_tag;
    document.getElementById("output").innerHTML += all_tags;
    } }); }); } getData();
    function updatelike(message_id) {
  button_id =  message_id;
  Likes = document.getElementById(button_id).value;
  new_likes = Number(Likes)+1;
  firebase.database().ref(room_name).child(message_id).update({
    likes:new_likes});
    }