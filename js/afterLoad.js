let changeHeader = document.getElementById("headerChanger");
let am = ["Full Stack Developer", "Bachelor Student", "Linux Enthusiast", "Determined Person"];

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function changeWord(arr, direction) {
    for (let i = 0; i < arr.length; i++) {
        direction.textContent = "";
        for (let j = 0; j < arr[i].length; j++) {
            direction.textContent = "" + direction.textContent + arr[i][j];
            await sleep(100 - (j * 2));
        }
        document.getElementsByClassName("textCursor")[0].style.animation ="infinite blinking 1s";
        await sleep(2000);
        document.getElementsByClassName("textCursor")[0].style.animation ="none";
        for (let j = 0; j < arr[i].length; j++) {
            direction.textContent = "" + direction.textContent.slice(0, -1);
            await sleep(15);
        }
        if (i == (arr.length - 1)) i = -1;
    }
}

async function toggleContainer(not, yes) {
    not.style = "opacity: 0";
    await sleep(500);
    not.style = "display: none";
    await sleep(200);
    yes.style = "display: block";
    yes.style = "opacity: 0";
    await sleep(200);
    yes.style = "opacity: 1";
}

changeWord(am, changeHeader);
