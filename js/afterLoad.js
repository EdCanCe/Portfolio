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
        await sleep(1000);
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

document.getElementById('downloadButton').addEventListener('click', function() {
    const fileContent = 'Hello, World!'; // Content of your file
    const fileName = 'hello.txt'; // Desired file name
    const fileBlob = new Blob([fileContent], { type: 'text/plain' });

    // Create a URL for the Blob and trigger the download
    const link = document.createElement('a');
    link.href = URL.createObjectURL(fileBlob);
    link.download = fileName;

    // Trigger the download by simulating a click
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Release the Object URL
    URL.revokeObjectURL(link.href);
});