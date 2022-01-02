function getusername() {
    Username= document.getElementById("user_name").value;
    localStorage.setItem("Name", Username);
    window.location = "kwitter_room.html";
}