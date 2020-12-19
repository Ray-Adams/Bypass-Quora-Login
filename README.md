# Bypass Quora Login
A simple bookmarklet and userscript that bypasses the Quora log-in overlay.

## Bookmarklet

### Installation
Copy and paste the code below into the URL section of a new bookmark.
```javascript
javascript:void(location.href.includes("quora.com")&&(location.href+="?share=1"))
```

## Userscript

### Installation
1. Download the Tampermonkey extension from https://www.tampermonkey.net/
2. Install [script.user.js](https://github.com/Ray-Adams/Bypass-Quora-Login/raw/master/script.user.js)

---

## Compatibility
Browser | Supported
--------|------------
Chrome  |     ✓
Firefox |     ✓
Safari  |     ✓
