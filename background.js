const themes = ["dark", "ayu", "light"];

function generateScript(theme) {
    if (!themes.includes(theme)) {
        //  prevent generating arbitrary code
        throw ("invalid theme", theme);
    }

    return `
    localStorage.setItem('rustdoc-theme', '${theme}');
    localStorage.setItem('rustdoc-use-system-theme', false);
    `;
}

var contentScriptHandle = null;
async function updateTheme() {
    if (contentScriptHandle) {
        //  handle unset localStorage case
        contentScriptHandle.unregister();
        contentScriptHandle = null;
    }
    if (localStorage.getItem("theme")) {
        let newContentScriptHandle = await browser.contentScripts.register({
            matches: ["<all_urls>"], runAt: "document_start", js: [{
                code: generateScript(localStorage.getItem("theme"))
            }]
        })
        if (contentScriptHandle) {
            contentScriptHandle.unregister();
            contentScriptHandle = null;
        }
        contentScriptHandle = newContentScriptHandle;
    }
}
updateTheme();

browser.runtime.onMessage.addListener((ev) => {
    var newTheme = ev.setTheme;
    if (newTheme === "None") {
        newTheme = null;
    }
    localStorage.setItem("theme", newTheme);
    updateTheme();
});
