let message = document.getElementById("rrr");
let n = document.getElementById("rectangle");
let t = document.getElementById("stroke");

let messageOnline = () => {
  message.textContent = "Internet Connected";
  message.style.cssText="color:green";
  n.style.cssText = "stroke: green";
  t.style.cssText = "stroke: green";
};
let messageOffline = () => {
  message.textContent = "Internet Disconnected";
  message.style.cssText="color:red";
  n.style.cssText = "stroke: red";
  t.style.cssText = "stroke: red";
};

if (window.navigator.onLine) {
  messageOnline();
} else {
  messageOffline();
}

window.addEventListener("online", messageOnline);
window.addEventListener("offline", messageOffline);
