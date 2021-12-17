# Rustdoc Global Theme
> Firefox extension to set your rustdoc theme globally.

When looking at rust docs through a `file:///` URL, a chosen theme will not carry over to other pages due to [this issue](https://github.com/rust-lang/cargo/issues/8208). This extension updates `localStorage` to your selected theme. For simplicity, the extension updates local storage to your selected theme on all pages matching
```
"*://doc.rustlang.org/*",
"*://docs.rs/*",
"file:///*",
"*://localhost/*"
```

## Installing

Package extension with `make package`. Go to `about:addons -> Gear Icon -> Install addon from file...` and select `extension.zip`.

You can also install it directly from [addons.mozilla.org](https://addons.mozilla.org/en-US/firefox/addon/rustdoc-global-theme/).