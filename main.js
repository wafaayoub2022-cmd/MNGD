let word = document.getElementById("word");
let submit = document.getElementById("submit");
let label = document.querySelectorAll("label")
let reselt = document.getElementById("reselt");
let chapeau = document.getElementById("chapeau");
let copierBtn = document.getElementById("copierBtn");
let reset = document.getElementById("reset")
let copyToast = document.getElementById("copy-toast");
let toastTimer = null;
let hide = null;
let alphabit = "ابتثجحخدذرزسشصضطظعغفقكلمنهوي7";

reset.onclick = function(){
    window.location.reload()
}
submit.onclick = function (event) {
    event.preventDefault()
    let value = word.value;
    let newWord = ""

    for (let i = 0; i < value.length; i++) {
        let letter = value[i];
        let index = alphabit.indexOf(letter)

        if (letter === " " || letter === "." || letter === "," || letter === ",") {
            newWord += " "
            continue;
        } else if (letter === "ة") {
            newWord += "ث";
            continue;
        } else if (letter === "7") {
            newWord = "مك مليحة نت??يخي";
            break
        }

            if (value.includes("زب") || value.includes("سوا") || value.includes("نك") || value.includes("نعدين") ) {
                newWord = "صختنا صاحبي راك زت فيها";
                document.body.style.background = "red";
                document.body.style.color = "yellow";
                reselt.style.scale = "3";
                word.value = "استغفر الله"
                word.style.scale = "10"
                copierBtn.style.display = "none"
                chapeau.innerText = "حسبي الله ونعم الوكيل"
                break;

    }
    if(value.includes("الله") || value.includes("لله")){
        newWord = "الله اكبر ";
        continue
    }
    if (value === " ") {
        reselt.value = "اين كلمتك ؟؟؟؟؟"
        return
    }
    if (index == -1) {
        reselt.value = "mok"
        return
    }
    if(letter === "!"){
        newWord += "!" 
        continue
    }
    if(letter === "?" || letter === "?"){
        newWord += "?"
        continue
    }
    newWord += alphabit[index + 1];
}
reselt.value = newWord
}
copierBtn.onclick = async function () {
    clearTimeout(toastTimer);
    try {
        await navigator.clipboard.writeText(reselt.value);
        copyToast.innerText = " !تم النسخ بنجاح "
        copyToast.style.display = "block";
        copyToast.style.opacity = "1"
        toastTimer = setTimeout(function () {
            copyToast.style.transition = "1s";
            copyToast.style.display = "none";
            hide = setTimeout(function () {
                copyToast.style.display = "none"
                copyToast.innerText = ""
            }, 3000)
        }, 2000);

    } catch (err) {
        copierBtn.title = 'تعذر النسخ، تحقق من أذونات المتصفح أو الخادم.';
    }
}