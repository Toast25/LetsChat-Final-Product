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
Name = localStorage.getItem("Name");
 document.getElementById("welcome").innerHTML= "Welcome " + Name + "!";
 function addroom() {
Room_name = document.getElementById("room_input").value;
firebase.database().ref("/").child(Room_name).update({
  purpose: "Adding Room Name"});
  localStorage.setItem("addroomname", Room_name);
  window.location="Quitterpage.html";}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
Room_names = childKey;
      //Start code
// <div id="Room_names" onclick="too_room()">  Room_name </div> <hr> 
div_1 = "<div id='" + Room_names + "' onclick='too_room(this.id)'>" + Room_names + "</div> <hr>";
document.getElementById("output").innerHTML += div_1;
      //End code
      });});}
getData();
function too_room(name) {
localStorage.setItem("addroomname", name);
window.location="Quitterpage.html";
}
function logout() {
  localStorage.removeItem("addroomname");
  localStorage.removeItem("Name");
  window.location="index.html";
}