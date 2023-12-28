const toggleBtn = document.querySelector(".toggle-theme-button");
const toggleBtnDisc = document.querySelector(".toggle-button-disc-default");

toggleBtn.addEventListener("click", ()=>{
    toggleBtn.classList.toggle("toggle-theme-button-dark-mode");
    toggleBtnDisc.classList.toggle("toggle-button-disc-dark-mode");
    if(toggleBtnDisc.classList.contains("toggle-button-disc-dark-mode")) createLink();
    else removeLink();
})

function createLink() {
    const newLink = document.createElement('link');
    newLink.rel = 'stylesheet';
    newLink.href = 'dark-mode.css';
    document.head.appendChild(newLink);
}

function removeLink() {
    const links = document.head.getElementsByTagName('link');

    if (links.length > 0) {
        let lastLink = links[links.length - 1];
        document.head.removeChild(lastLink);
    }
}