function linkgen() {
var og_url= prompt("Paste in your link here.");
var newlink = "https://dev.nrird.com/web-proxy/index.php/" + og_url;
var player = document.getElementById("player");
player.setAttribute("src", newlink);
}
linkgen();
