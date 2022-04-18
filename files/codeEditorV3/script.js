function run() {
    let htmlCode = document.querySelector(".input-field-1 #html-code").value;
    let cssCode = "<style>" + document.querySelector(".input-field-2 #css-code").value + "</style>";
    let jsCode = document.querySelector(".input-field-2 #js-code").value;
    let output = document.querySelector(".output-field #output");
    //console.log(htmlCode,cssCode,jsCode,output);
    output.contentDocument.body.innerHTML = htmlCode + cssCode;
    output.contentWindow.eval(jsCode);
}
document.querySelector(".input-field-1 #html-code").addEventListener("keyup", run);
document.querySelector(".input-field-2 #css-code").addEventListener("keyup", run);
document.querySelector(".input-field-2 #js-code").addEventListener("keyup", run);

/*window.onbeforeunload = function () {
    return "Data will be lost if you leave the page, are you sure?";
};*/

function downloadFile(fileNameToSaveAs){
    var textToSave = output.contentDocument.body.innerHTML;
    var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:attachment/text,' + encodeURI(textToSave);
    hiddenElement.target = '_blank';
    hiddenElement.download = fileNameToSaveAs;
    hiddenElement.click();
}
