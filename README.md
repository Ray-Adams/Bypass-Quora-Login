# Bypass Quora Login
A simple and efficient bookmarklet that bypasses Quora's login pop-up.

## Installation
Copy and paste the code below into the URL section of a new bookmark.
```javascript
javascript:window.location.href+='?share=1'
```

## Usage
When you encounter Quora's annoying login pop-up, simply click the bookmarklet, and the pop-up will immediately be removed, along with the page content unblurred.

## How It Works
Executing the bookmarklet will append the parameter, `?share=1`, to the current URL, which exploits Quora's "sharing without restriction" feature ([Learn more](https://www.quora.com/q/quora/Making-Sharing-Better)).

## Compatibility
Browser | Supported
--------|------------
Chrome  |     ✓
Firefox |     ✓
Safari  |     ✓
