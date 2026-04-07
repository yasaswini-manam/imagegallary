function filterImages(section) {
  let images = document.querySelectorAll(".gallery img");
  let buttons = document.querySelectorAll(".buttons button");

  // remove active from all
  buttons.forEach(btn => btn.classList.remove("active"));

  // add active to clicked button
  event.target.classList.add("active");

  images.forEach(img => {
    if (section === "All" || img.classList.contains(section)) {
      img.style.display = "";
    } else {
      img.style.display = "none";
    }
  });
}

let popup = document.getElementById("popup");
let popupImg = document.getElementById("popupImg");

document.querySelectorAll(".gallery img").forEach(img => {
  img.onclick = () => {
    popup.style.display = "flex";
    popupImg.src = img.src;
  }
});

popup.onclick = () => popup.style.display = "none";


function checkPassword() {
  let password = prompt("Enter password to view personal images:");

  if (password === "yasaswini") {  
    filterImages("Personal");
  } else {
    alert("❌ Wrong password!");
  }
}