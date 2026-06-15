# My Portfolio Website

This website is live and hosted at https://westonvincze.com.

All art and code was designed and developed by me. This website outlines my path into the development world, contains my resume and a downloadable PDF, and showcases my portfolio of web apps and games. It was created using Next.js, TypeScript, XState, and React-Spring, designed using Figma, and is hosted on Vercel.

View current and upcoming tasks on the [Project Board](https://github.com/users/WestonVincze/projects/1)

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Linting

Linting is done automatically on save and uses a combination of custom eslint rules to maintain consistency.

Prettier integration is manual and fixes minor inconsistencies. It should be run before merging into main.

```bash
npm run prettier
```

## Testing

Testing is done with React Testing Library and Jest. Tests should be contained within the tested file's directory (module).

```bash
npm run test
```

## Build & Deploy

Deployment pipeline is automated and runs whenever a branch is merged into main. A preview is automatically generated if there are no build errors.

Test for build errors before merging into main by running a build locally.

```bash
npm run build
```

## OpenGraph preview image script

Whenever there are major design changes to the landing page run the `generateScreenshot` script to automatically update them. The node script uses puppeteer to spin up a local version, configure the viewport, and take screenshots.

First, run the script.

```bash
npm run generate-screenshots
```

Backups for the current screenshots are taken before new screenshots are saved. Once the screenshots are taken, you will be asked if you want to keep the new screenshots.

`Y` or `y` will delete the backups and keep the new screenshots.
`N` or `n` will delete the new screenshots and rename the backups.

## Author

Weston Vincze - 2023
