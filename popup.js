const buttons = document.querySelectorAll("button");

function updateButtons() {
    for (const b of buttons) {
        b.disabled = b.innerText.toLowerCase() === localStorage.getItem("theme");
    }
}

async function setTheme(theme) {
    await browser.runtime.sendMessage({ setTheme: theme })
    updateButtons();
}

for (const b of buttons) {
    b.onclick = () => setTheme(b.innerText.toLowerCase());
}
updateButtons();