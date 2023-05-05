let text2 = "";
let textToEncript = document.querySelector(".textToEncript")
let textToEncriptArray = [];

    function getArray() {
        for(let i = 0; i<textToEncript.value.length;i++) {
            textToEncriptArray.push(textToEncript.value[i]);
        }
        return textToEncriptArray
    }

    function encriptar() {
        if(textToEncriptArray != []) {
            textToEncriptArray = [""];
        } 
        getArray();
    
        for(let i = 0; i<textToEncriptArray.length; i++){

            if(textToEncriptArray[i] == "a") {
                textToEncriptArray.splice(i,1,"ai")

            } else if (textToEncriptArray[i] == "e") {
                textToEncriptArray.splice(i,1,"enter")

            }else if (textToEncriptArray[i] == "i") {
                textToEncriptArray.splice(i,1,"imes")

            } else if (textToEncriptArray[i] == "o") {
                textToEncriptArray.splice(i,1,"ober")

            } else if (textToEncriptArray[i] == "u") {
                textToEncriptArray.splice(i,1,"ufat")
            }
        }
        text2 = textToEncriptArray.join("")
    
        if(text2 != ""){
            document.getElementsByClassName("textToEncript")[0].value = "";
            document.getElementById("encriptText").innerHTML = text2;
            document.querySelector(".copy").removeAttribute("hidden");
            document.querySelector(".encriptText").removeAttribute("hidden");
            document.getElementById("doll").style.height= "0px";
            document.getElementById("textToHidden1").style.fontSize = "0px";
            document.getElementById("textToHidden2").style.fontSize = "0px";
            document.getElementById("textToHidden").style.height= "0px";
        }
    }

    function desencriptar() {
        if(textToEncriptArray != []) {
            textToEncriptArray = [""];
        } 
        getArray();
        for(let i = 0; i<textToEncriptArray.length; i++){

            if(textToEncriptArray[i] == "a" && textToEncriptArray[(i + 1)] == "i") {
                textToEncriptArray.splice(i,2,"a")

            } else if (textToEncriptArray[i] == "e" && 
            textToEncriptArray[(i + 1)] == "n" && 
            textToEncriptArray[(i+2)] == "t" && 
            textToEncriptArray[(i+3)] == "e" && 
            textToEncriptArray[(i+4)] == "r") {
                textToEncriptArray.splice(i,5,"e")

            }else if (textToEncriptArray[i] == "i" && 
            textToEncriptArray[(i + 1)] == "m" && 
            textToEncriptArray[(i+2)] == "e" && 
            textToEncriptArray[(i+3)] == "s") {
                textToEncriptArray.splice(i,4,"i")

            } else if (textToEncriptArray[i] == "o" &&
            textToEncriptArray[(i + 1)] == "b" && 
            textToEncriptArray[(i+2)] == "e" && 
            textToEncriptArray[(i+3)] == "r") {
                textToEncriptArray.splice(i,4,"o")

            } else if (textToEncriptArray[i] == "u" &&
            textToEncriptArray[(i + 1)] == "f" && 
            textToEncriptArray[(i+2)] == "a" && 
            textToEncriptArray[(i+3)] == "t") {
                textToEncriptArray.splice(i,4,"u")
            }

        }
        text2 = textToEncriptArray.join("")
        if(text2 != ""){
            document.getElementsByClassName("textToEncript")[0].value = "";
            document.getElementById("encriptText").innerHTML = text2;
            document.querySelector(".copy").removeAttribute("hidden");
            document.querySelector(".encriptText").removeAttribute("hidden");
            document.getElementById("doll").style.height= "0px";
            document.getElementById("textToHidden1").style.fontSize = "0px";
            document.getElementById("textToHidden2").style.fontSize = "0px";
            document.getElementById("textToHidden").style.height= "0px";
        }
    }

    function copiar() {
        var copyText = document.createElement("input");
        copyText.setAttribute("value", document.getElementById("encriptText").innerHTML);
        document.body.appendChild(copyText);
        copyText.select();
        document.execCommand("copy");
        document.body.removeChild(copyText);
    }   

    function cambiaTema(ev){
        if(ev.target.checked){
            document.documentElement.setAttribute('tema', 'ligth');
            document.querySelector(".sun").style.width = "0rem"
            document.querySelector(".moon").style.width = "1.1rem";
        } else {
            document.documentElement.setAttribute('tema', 'dark');
            document.querySelector(".sun").style.width = "1.5rem";
            document.querySelector(".moon").style.width = "0rem";
        }
    }
let btnEncript = document.querySelector(".encript");
btnEncript.onclick = encriptar;
let btnDesencript = document.querySelector(".desencript");
btnDesencript.onclick = desencriptar;
let btn1 = document.querySelector(".copy");
btn1.onclick = copiar;
let switch2 = document.querySelector(".switch");
const colorSwitch = document.querySelector('#switch');
colorSwitch.addEventListener('change', cambiaTema);