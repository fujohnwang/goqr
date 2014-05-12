function generate(){
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    baseUrl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="
    qrUrl = baseUrl.concat(tabs[0].url)
    img = document.createElement("img")
    img.setAttribute("src", qrUrl)
    document.getElementById("qrcode").appendChild(img)
  });
}

if(window.addEventListener){
    window.addEventListener('load',generate,false); //W3C
}
else{
    window.attachEvent('onload',generate); //IE
}
