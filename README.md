# Thirdline landing page

Static landing page for Thirdline ("It's a deal."). Plain HTML, CSS and JavaScript. No build step and no dependencies.

## Structure

```
index.html            page markup
css/style.css         all styles
js/main.js            interactions, advisors data, match demo, waitlist forms
assets/hero.mp4       hero background video
assets/hero-poster.jpg
assets/advisors/      advisor photos
```

## Run locally

Open `index.html` in a browser, or serve the folder:

```
python3 -m http.server 8000
```

Then visit http://localhost:8000

## Deploy with GitHub Pages

1. Create a new repository on GitHub and upload these files to the `main` branch (the repository root should contain `index.html`).
2. Go to **Settings > Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
4. After a minute the site is live at `https://<your-username>.github.io/<repository-name>/`.

Netlify and Vercel also work: drag the folder in, no settings needed.

## Things to update before launch

- **Advisors:** edit the `EXPERTS` array at the top of `js/main.js`. Set `u` to each person's real LinkedIn URL, and make sure each person has agreed to appear. Replace the photos in `assets/advisors/` with better ones.
- **Trusted by:** the company names in `index.html` (search for `class='tr'`) are made-up samples. Replace them with real ones or remove the section.
- **Waitlist forms:** they currently only show a confirmation message and do not store anything. Connect them to a backend or form service (Formspree, Google Sheets, Airtable, your own API) in the submit handler in `js/main.js`.
- **Match demo:** the matches are samples. The questions are in the `MQ` array in `js/main.js`.
- **Hero video:** replace `assets/hero.mp4` and `assets/hero-poster.jpg`. Keep the video short, muted and under a few MB.

## Brand

Colors: ink `#1B1B1F`, spark lime `#A6E24B`, leaf `#3F7A17`, mist `#F4F6F0`. Fonts: Bricolage Grotesque and Inter (loaded from Google Fonts).
