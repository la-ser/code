const left = document.querySelector(".left");
const right = document.querySelector(".right");
const bar = document.querySelector(".bar");
const editor = document.querySelector(".editor");
const run = document.querySelector(".btn-run");
const iframe = document.querySelector(".iframe");
const darkMode = document.querySelector(".btn-dark");
const lightMode = document.querySelector(".btn-light");

const html = document.querySelector("html");

const drag = (e) => {
    e.preventDefault();
    document.selection ? document.selection.empty() : window.getSelection().removeAllRanges();
    left.style.width = (e.pageX - bar.offsetWidth / 3) + "px";
    editor.resize()
};

bar.addEventListener("mousedown", () => {
    document.addEventListener("mousemove", drag);
});

bar.addEventListener("mouseup", () => {
    document.removeEventListener("mousemove", drag);
});

//btn event listener
run.addEventListener("click", () => {
    const  html = editor.textContent;
    iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
});

// dark/lightmode
darkMode.addEventListener("click", () => {
    html.style.backgroundColor = "#363836";
    html.style.color = "#eee";
})
lightMode.addEventListener("click", () => {
    html.style.backgroundColor = "";
    html.style.color = "";
})

//live code
document.getElementById("live").onclick = function() {
    if (this.checked) {
        editor.addEventListener("keyup", () => {
            const  html = editor.textContent;
            iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
        });
    }
}

function downloadFile(fileNameToSaveAs){
    var textToSave = document.getElementById("editor").innerText;
    var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:attachment/text,' + encodeURI(textToSave);
    hiddenElement.target = '_blank';
    hiddenElement.download = fileNameToSaveAs;
    hiddenElement.click();
}