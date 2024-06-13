function loadCSS(filename) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = filename;
    document.head.appendChild(link);
}

function removeCSS(filename) {
    var links = document.getElementsByTagName('link');
    for(var i = 0; i < links.length; i++) {
        if (links[i].getAttribute('href') === filename) {
            links[i].parentNode.removeChild(links[i]);
            return;
        }
    }
}

document.addEventListener('DOMContentLoaded', function(){
    let userOS = navigator.userAgent; 
    let mobileDevices = /android|iphone|kindle|ipad/i; 
    let isMobileDevice = mobileDevices.test(userOS); 
    if (isMobileDevice) { 
        loadCSS('css/mobileMain.css');
    } else { 
        loadCSS('css/desktopMain.css');
    }
    removeCSS("css/initialHidden.css")
});
