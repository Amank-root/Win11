let taskbar = document.getElementsByClassName("win")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]

taskbar.addEventListener("click", () => {
    console.log("clicked");
    if (startmenu.style.bottom == "50px") {
        startmenu.style.bottom = "-100rem"
    }
    else {
        startmenu.style.bottom = "50px"
    }
})
if (screen.width >= 700){
    let somt = alert("You can Provide Your Details Here Without Any Hesitation Because This Site Is Static. \n In Short Does not Save Any Data.");
    let provided = prompt("Enter Your name Here.");
}
let namee = document.getElementById("namee");
let sooo = document.getElementById('sooo');

if (provided == '' || provided == null || provided == undefined) {
    namee.href = "https://www.instagram.com/amankushwaha_28/"
    sooo.href = "https://www.instagram.com/amankushwaha_28/"
    provided = "Aman Kushwaha"
    namee.innerHTML = "Aman Kushwaha";
}
else {
    namee.href = "#"
    sooo.href = "#"
    namee.innerHTML = provided;
    console.log("done")
}

function notw() {
    alert("The Element Do not Have Any Function Yet.")
}

function plat() {
    alert('Only Available On 2 Platform. \n ~ Instagram \n ~ GitHub')
}

function powerr() {
    console.log('hi')
    document.querySelector('Body').innerHTML = '';
    var tag = document.createElement("h1");
    var gat = document.createElement("p");
    tag.setAttribute("class", "Hell");
    var text = document.createTextNode(`${provided} Is Logged Out Of The Windows 11 Preview.`);
    var textg = document.createTextNode("Reload To Login.");
    gat.setAttribute("class", "para");
    document.querySelector('Body').setAttribute("class", "main");
    tag.appendChild(text);
    gat.appendChild(textg);
    document.querySelector('Body').appendChild(tag).appendChild(gat);
}



if (screen.width <= 700) {
    console.log('hi')
    document.querySelector('Body').innerHTML = '';
    var tag = document.createElement("h1");
    var gat = document.createElement("p");
    tag.setAttribute("class", "Hell");
    var text = document.createTextNode(`Sorry ${provided}. This Web Page Is Not Yet Supported On Small Scale Devices.`);
    var textg = document.createTextNode("Soon We Will Update The Page.");
    gat.setAttribute("class", "para");
    document.querySelector('Body').setAttribute("class", "main");
    tag.appendChild(text);
    gat.appendChild(textg);
    document.querySelector('Body').appendChild(tag).appendChild(gat);
}
else {
    console.log('Working')
}
