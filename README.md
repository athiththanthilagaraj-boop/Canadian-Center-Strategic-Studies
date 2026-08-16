# Canadian Center For Strategic Studies — Website

A fast, dependency-free website: seven files, no build step, no framework.
Open `index.html` in a browser and it works. Every article is hosted
**on this site** (not linked back to Webnode) — clicking a publication opens
`article.html`, which renders the full piece from `content.js`.
Everything you'll want to update on a regular basis lives in **`content.js`**.

## Files

| File | What it's for | How often you'll touch it |
|---|---|---|
| `content.js` | All text, publications, team, links | **Often** — this is your CMS |
| `index.html` | Homepage structure (empty containers) | Rarely |
| `article.html` | Single-article page template | Rarely |
| `styles.css` | Colors, fonts, spacing | Occasionally (rebrand/tweaks) |
| `main.js` | Reads `content.js`, builds the homepage | Almost never |
| `article.js` | Reads `content.js`, builds an article page | Almost never |
| `add-article.html` | A tool: paste an article, get ready-to-use code | Whenever you publish something new |

## Adding a new publication — the easy way

Open **`add-article.html`** in your browser (works locally, no upload needed
first). Fill in the title, author, topic, date, excerpt, and paste the full
article text — separate paragraphs with a blank line, same as writing in
any normal text editor. Click **Generate Code**, then **Copy to clipboard**.

Open `content.js`, find the `publications` array, and paste what you copied
right after the line `publications: [`. Save. That's the entire update —
the homepage grid, the article page, and the "Published Pieces" counter
all pick it up automatically.

## Adding a new publication — by hand

If you'd rather write the entry yourself instead of using the tool above,
copy this shape into the `publications` array (newest first):

```js
{
  id: "short-unique-slug",        // used in the article URL: article.html?id=short-unique-slug
  doc: "CCSS-06",                 // just increment from the last one
  title: "Your Title Here",
  author: "Author Name",
  authorBio: "One sentence about the author (shown at the end of the article).",
  topic: "Category",              // shown as the small label on the card
  date: "2026-07-30",             // YYYY-MM-DD
  excerpt: "One to three sentences summarizing the piece — shown on the homepage card.",
  heroImage: "",                  // optional — direct image URL, or "images/yourfile.jpg". Leave "" for no image.
  imageCredit: "",                // optional — small caption under the photo, e.g. "Photo: Jane Doe / Reuters"
  body: [
    "First paragraph of the full article.",
    "Second paragraph.",
    "And so on — one string per paragraph.",
  ],
  sourceUrl: "",                  // optional — leave "" if there's no external copy to credit
},
```

## Adding a header image to an article

Two fields on each publication control this — both optional:

- `heroImage` — a direct image URL (works great with free stock sites like
  Unsplash or Pexels — right-click the image → "copy image address"), or a
  filename like `images/my-photo.jpg` if you'd rather upload the photo file
  itself into an `images/` folder in your repo.
- `imageCredit` — the small caption line shown under the photo, e.g.
  `"Photo: Jane Doe / Reuters"`. Leave it `""` if you don't need one.

Leave `heroImage` as `""` and the article just renders with no photo —
nothing breaks. The **Add an Article** tool (`add-article.html`) has fields
for both, so you don't need to edit this by hand if you use the generator.

To host your own image files instead of linking out: create a folder named
`images` in your repo (Add file → name it `images/yourfile.jpg` when
uploading — GitHub creates the folder automatically), upload your photos
there, then reference them as `heroImage: "images/yourfile.jpg"`.

Save the file and refresh the page — the publications grid, the article
page, and the "Published Pieces" counter in the hero, all update
automatically. The card on the homepage links straight to the full piece
at `article.html?id=short-unique-slug` — no separate page to build.

## Adding or editing a team member

Same idea, in the `team` array:

```js
{
  name: "Full Name",
  role: "Title / Position",
  rank: 8,        // controls ordering — lower numbers appear first
  bio: "One or two sentences.",
},
```

## Changing colors or fonts

Open `styles.css` and edit the values inside `:root { ... }` at the top of
the file — every color and font on the site is drawn from those variables,
so a single change (e.g. `--brass: #A9782C;`) updates it everywhere.

## Publishing the site

This is a static site — any of the following work, in order of ease:

1. **GitHub Pages** — push these five files to a GitHub repo, turn on
   Pages in the repo settings, done.
2. **Netlify / Vercel** — drag the folder into their web dashboard.
3. **Your own domain** — upload the five files via FTP/cPanel to any
   standard web host.

No database, no server-side code, and no dependencies to install or update.

## Local preview

From this folder, run:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080` in a browser.
