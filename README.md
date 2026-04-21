# HomeScope Research Website

This folder contains a static research website prepared for simple deployment on GitHub Pages.

## Files

- `index.html` - main page
- `styles.css` - design and responsive layout
- `script.js` - editable content for milestones, documents, presentations, team, and contact details
- `assets/images/` - images, architecture diagrams, member photos
- `assets/docs/` - PDF and document files
- `assets/presentations/` - PowerPoint and slide files

## How to add your files

1. Put PDFs and reports inside `assets/docs/`
2. Put PowerPoint files inside `assets/presentations/`
3. Put images such as team photos or posters inside `assets/images/`
4. Open `script.js`
5. Update the `href` values for each document or presentation

Example:

```js
{
  title: "Project Proposal",
  subtitle: "Submitted version",
  href: "assets/docs/project-proposal.pdf",
  status: "Ready"
}
```

When `href` is empty, the website shows `Pending upload`. When `href` has a path, it shows a `Download` button.

## How to publish on GitHub Pages

1. Create a new GitHub repository
2. Upload the contents of this `research-website` folder to that repository
3. In GitHub, go to `Settings` -> `Pages`
4. Under `Build and deployment`, choose:
   - `Source`: `Deploy from a branch`
   - `Branch`: `main`
   - `Folder`: `/ (root)`
5. Save the settings
6. Wait a few minutes for deployment
7. Your published link will look like:

```text
https://YOUR-USERNAME.github.io/YOUR-REPOSITORY-NAME/
```

## Local preview

You can preview locally by opening `index.html` directly or by starting a simple local server:

```powershell
cd "E:\New folder (2)\research-website"
python -m http.server 8080
```

Then open `http://localhost:8080`.
