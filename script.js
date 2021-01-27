let waLink = "https://wa.me/"
let finalLink

function setLink() {
    finalLink = waLink + document.getElementById('userNum').value
    location.replace(finalLink)
}

//"https://wa.me/77028989882"