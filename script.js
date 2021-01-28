let waLink = "https://wa.me/"
let finalLink

function setLink() {
    finalLink = waLink + document.getElementById('userNum').value
  //  location.replace(finalLink)
//window.location = finalLink
     window.open(finalLink)
}

//"https://wa.me/77028989882"