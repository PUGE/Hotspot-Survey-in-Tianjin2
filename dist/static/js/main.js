
$(function () {
  var ratio = window.innerWidth / window.innerHeight
  if (ratio < 1) {
    document.body.classList.add('min')
  } else {
    document.body.classList.add('pc')
  }
})
