if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.body.classList.add("dark");
}

var modal = document.getElementById("imgModal");
var modalImg = document.getElementById("img01");
var captionTxt = document.getElementById("caption");


function OpenModal(img) {
	modalImg.src = img.src;
	captionTxt.innerHTML = img.alt;
	modal.style.display = "block";
}

document.getElementsByClassName("closeModal")[0].onclick = function() {
	modal.style.display = "none";
}