const left = document.querySelector(".left"), 
    right = document.querySelector(".right"),
    bar = document.querySelector(".bar"),
    editor = document.querySelector(".editor"),
    run = document.querySelector(".btn-run"),
    iframe = document.querySelector(".iframe"),
    toggleButton = document.getElementById('toggle-button'),
    modeDivision = document.getElementById('mode-division'),
    navdiv = document.getElementById('nav');

// Add an event listener to the toggle button to switch between dark and light mode
toggleButton.addEventListener('click', () => {
  // Toggle the 'dark-mode' class on the mode division
  modeDivision.classList.toggle('dark-mode');
  navdiv.classList.toggle('dark-mode');

  // Update the text on the toggle button
  if (modeDivision.classList.contains('dark-mode')) {
    toggleButton.innerText = 'Light Mode';
  } else {
    toggleButton.innerText = 'Dark Mode';
  }
});

const drag = (e) => {
    e.preventDefault();
    document.selection ? document.selection.empty() :  window.getSelection().removeAllRanges();
    left.style.width = (e.pageX - bar.offsetWidth / 3) + "px";
    editor.resize();
}    

bar.addEventListener("mousedown", () => {
    document.addEventListener("mousemove", drag);
})

bar.addEventListener("mouseup", () => {
    document.removeEventListener("mousemove", drag);
})  

run.addEventListener("click", () => {
    const html = editor.textContent;
    iframe.src = "data:text/html; charset=utf-8," + encodeURI(html);
})

document.getElementById("live").onclick = function () {
    if (this.checked){
        editor.addEventListener("keyup", () => {
            const html = editor.textContent;
            iframe.src = "data:text/html; charset=utf-8," + encodeURI(html);
        });
    }
}

function download() {
    var downloadLink = document.body.appendChild(
        document.createElement("a")
    );
    const htmldownload = editor.textContent;
    downloadLink.download = "Untitled-.html";
    downloadLink.href = "data:text/html; charset=utf-8," + encodeURI(htmldownload) + document.getElementById("iframe").innerHTML;
    downloadLink.click();
}

if ("serviceWorker" in  navigator){
    navigator.serviceWorker.register("serviceWorker.js").then(
        registration => {
            console.log("Service Worker Registered");
            console.log(registration);
        }).catch(error => {
            console.log("Service Worker Registration failed!");
            console.log(error);
        });
}