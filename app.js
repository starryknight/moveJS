function move() {
  var elem = document.querySelector("#myAnimation");
  var pos = 0;
  var id = setInterval(frame, 5);

  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      elem.style.top = `${pos}px`;
      elem.style.left = `${pos}px`;
      pos++;
    }
  }
}
