/*(function readyJS(win,doc){
    'use strict';


    let btn = doc.querySelector("#btn");
    let sel = doc.querySelector('#selec')

    function alertar(){
        alert("alert")
        console.log("oii")
        //alert("oiiii")
        //event.preventDefault()  //previne a ação padrão do elemento
        console.log('Form not send')
        ;//

        //console.log(event.target.id)

    }
    
    btn.addEventListener("click", alertar, false);  // btn.chamaumevento("tipo do evento", função que quero chamar, )
    sel.addEventListener('change', alertar, false)
    
})(window, document);*/





let btn = document.querySelector("#btn");
let sel = document.querySelector('#selec')

function alertar(){
    alert("alert")
    console.log("oii")
    //alert("oiiii")
    /*event.preventDefault()  //previne a ação padrão do elemento
    console.log('Form not send')
    ;*/

    //console.log(event.target.id)

}
    
btn.addEventListener("click", alertar, false);  // btn.chamaumevento("tipo do evento", função que quero chamar, )
sel.addEventListener('change', alertar, false)
