let word = document.getElementById("word");
let reselt = document.getElementById("reselt");
let submit = document.getElementById("submit");

submit.onclick = function(event){
    event.preventDefault();
    let newword = "";
    // الحروف الخاصة بلغة المن.قد
    let alphabit = "ابتثجحخدذرزسشصضطظعغفقكلمنهوي7";
    let value = word.value;
    
    for (let i = 0; i < value.length; i++) {
        let letter = value[i];
        let index = alphabit.indexOf(letter);
        
        // التحقق من الحروف الأجنبية أو غير المبرمجة
        if(index === -1){
            reselt.value = "mok nta thani";
            return; // التوقف فوراً إذا وُجد حرف غير مدعوم
        }
        
        newword += alphabit[index + 1];
    }
    
    // عرض الكلمة المترجمة نهائياً في الحقل
    reselt.value = newword;
}