function toggleText() {
  let btn = document.querySelector(".toggle-text-button"),
      text = document.getElementById("text");
  btn.addEventListener("click", function() {
    if(text.hidden == true) {
      text.hidden = false;
    } else {
      text.hidden = true;
    }
  });
}