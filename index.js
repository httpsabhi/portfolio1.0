// Typing Animation
var typed = new Typed("#element", {
  strings: ["Coder", "Blogger", "Video Editor", "Web Developer"],
  typeSpeed: 60,
});

// Contact Form SMTP
function sendEmail(){
    Email.send({
        // Host: "smtp.elasticemail.com",
        SecureToken : "4979fb28-f99c-4016-8433-7522df24b692",
        // Username : "abhaykumar714371@gmail.com",
        // Password : "9FF22446601BAC7ED6CFAF33C988B1C98B3E",
        To: "22BAI70674@cuchd.in",
        From: "abhaykumar714371@gmail.com",
        Subject: "New Query From Portfolio",
        Body:
          "Name: " +
          document.getElementById("name").value +
          "<br> Email: " +
          document.getElementById("email").value +
          "<br> Message: " +
          document.getElementById("msg").value,
      }).then((message) => alert("Query Received"));
}

// Hamburger Menu
let menu = document.querySelector('#ham-menu');
let navbar = document.querySelector('.right');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('open');
}