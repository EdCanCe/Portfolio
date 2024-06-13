function loadCSS(filename) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = filename;
    document.head.appendChild(link);
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
    document.body.style = "visibility: visible";
});
