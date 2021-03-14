window.addEventListener('load', async ()=>{
    if(navigator.serviceWorker){
        try {
            const reg = await navigator.serviceWorker.register("service-worker.js")
            console.log("SW works", reg)
        }catch (e){
            console.log("Service worker failed")
        }
    }
})

let waLink = "https://wa.me/"
let finalLink
let pNumber
function setLink() {
    pNumber = document.getElementById('userNum').value

    if(pNumber.charAt(0) === '+')
        pNumber = pNumber.substring(1)
    finalLink = waLink + pNumber
     window.open(finalLink)
}
