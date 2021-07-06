var logo = document.getElementById('logo');
//var cover = document.getElementById('cover');

logo.addEventListener('click', logoClick);

function logoClick() {
  cover.style.opacity = "1";
  cover.style.visibility = "visible";
  setTimeout(url, 1000);
  //url()
}

function url() {
  window.location = "/main/";
}