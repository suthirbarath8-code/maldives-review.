<div align="center">

# 🌴 Maldives Trip Review

### Share the moment you'll remember most.

A clean, bright landing page where travelers write a short review about their Maldives trip. The review form opens in a pop-up and has a live character counter.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Font](https://img.shields.io/badge/Font-Poppins-0A7F8C)
![Responsive](https://img.shields.io/badge/Responsive-Yes-17825D)

</div>

---

> ⚠️ **Demo project.** This is a front-end concept. The brand name, trip details and review flow are placeholders, nothing is saved or sent to a server, and the page is **not affiliated with Tripadvisor** or any real travel company. Use your own name, logo and details before publishing.

## 🏝️ Preview

| | |
|---|---|
| **Look** | Bright Maldives lagoon background with overwater villas and palm trees, drawn as an inline SVG |
| **Layout** | Floating glass navbar, centered hero, one clear call-to-action |
| **Typography** | Poppins throughout, with black text for strong contrast |

## ✨ Features

| | Feature | Details |
|---|---|---|
| 🧭 | **Floating navbar** | Frosted-glass pill with links and a hamburger menu on mobile |
| 🌅 | **Bright background** | Drawn in SVG, so it is crisp on every screen and needs no image file |
| 🪟 | **Review pop-up** | Opens from the navbar or hero button; close with ×, outside click or `Esc` |
| ⌨️ | **Live character counter** | Updates on every keystroke, for example `150/200 characters` |
| 📉 | **Remaining count** | Shows how many characters are left |
| 🚫 | **Hard limit** | Typing stops at 200 and a warning appears; pasted text is trimmed |
| 🔒 | **Smart submit** | Button stays disabled until the review has some text |
| 💌 | **Thank-you screen** | Shows the submitted review back to the user |
| 📱 | **Responsive** | Works on phones, tablets and desktops |

## 🔄 How it works

```
Click "Write a review"
        │
        ▼
 Pop-up opens ──► Type your review ──► Counter updates live
                                         │
                       200 characters? ──┴──► Typing stops + warning
                                         │
                                         ▼
                                  Submit enabled
                                         │
                                         ▼
                                  "Thank you!" screen
```

## 📁 Project structure

```
maldives-review/
├── index.html    # Layout, styles, background and review pop-up
├── script.js     # Pop-up, character counter and submit logic
└── README.md     # You are here
```

## 🚀 Getting started

1. **Download** or copy the files into one folder.
2. **Open** `index.html` in any modern browser.
3. **Click** "Write a review" and try it out.

No installation or build step is needed. An internet connection is required to load Tailwind CSS and Google Fonts.

## 🎨 Customization

<details>
<summary><b>Change the text and trip details</b></summary>

Edit the headline, description and the "Overwater villa · 5 nights · Raa Atoll" line in the hero section of `index.html`.

</details>

<details>
<summary><b>Change the character limit</b></summary>

Change the number in two places, then update the "200 characters max" text.

```js
// script.js
const MAX = 200;
```

```html
<!-- index.html -->
<textarea id="msg" maxlength="200" ...></textarea>
```

</details>

<details>
<summary><b>Change the accent color</b></summary>

Update the variable at the top of the `<style>` block in `index.html`:

```css
--accent: #0A7F8C;
```

</details>

<details>
<summary><b>Use a real photo as the background</b></summary>

Delete the `<svg>` background block in `index.html`, then set the image in CSS:

```css
body {
  background: url('images/maldives.jpg') center / cover no-repeat fixed;
}
```

Only use photos you own or have permission to use.

</details>

<details>
<summary><b>Make the background brighter or softer</b></summary>

In the last line inside the `<svg>`, change the opacity of the white layer:

```html
<rect width="1440" height="900" fill="#fff" opacity=".08"/>
```

</details>

<details>
<summary><b>Save reviews to a real server</b></summary>

In `script.js`, find the `send.addEventListener('click', ...)` handler and add a request before showing the thank-you screen:

```js
fetch('/api/reviews', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ review: msg.value.trim() })
});
```

</details>

## 🛠️ Built with

- **HTML5** with the native `<dialog>` element for the pop-up
- **[Tailwind CSS](https://tailwindcss.com)** (via CDN) for layout and styling
- **Vanilla JavaScript** with no frameworks or dependencies
- **[Poppins](https://fonts.google.com/specimen/Poppins)** from Google Fonts

## ❓ FAQ

**Why is the background not a photo?**
It is an inline SVG drawing. This keeps the project to two files, loads instantly and stays sharp at any size. You can swap in a photo anytime (see Customization).

**Are reviews saved anywhere?**
No. This is a front-end demo, so everything disappears when the page is refreshed.

**Can I use this for a real business?**
Yes, after replacing the name, content and visuals with your own, and adding a backend to store reviews.

## 🗺️ Ideas for next steps

- [ ] Add a star rating
- [ ] Add name and trip-date fields
- [ ] Show a list of submitted reviews
- [ ] Add a photo upload
- [ ] Connect to a database or form service

## 📄 License

Add your license here (for example MIT), or remove this section.

---

<div align="center">

Made with 💙 for travelers and island dreamers

</div>
