const home = document.getElementById("home");
const project = document.getElementById("project");
const contact = document.getElementById("contact");
const about = document.getElementById("about");
const rhome = document.getElementById("rhome");
const rproject = document.getElementById("rproject");
const rcontact = document.getElementById("rcontact");
const rabout = document.getElementById("rabout");

function cHome() {
  rhome.style.justifyContent = "center";
  rhome.style.alignItems = "center";
  //   display
  rhome.style.display = "grid";
  rcontact.style.display = "grid";
  rabout.style.display = "grid";
  rproject.style.display = "grid";
}

function cProject() {
  rhome.style.justifyContent = "center";
  rhome.style.alignItems = "center";
  // display
  rproject.style.display = "grid";
  rhome.style.display = "none";
  rcontact.style.display = "none";
  rabout.style.display = "none";
}

function cContact() {
  rhome.style.display = "none";
  rcontact.style.display = "grid";
  rabout.style.display = "none";
  rproject.style.display = "none";
}

function cAbout() {
  rhome.style.display = "none";
  rcontact.style.display = "none";
  rabout.style.display = "grid";
  rproject.style.display = "none";
}
