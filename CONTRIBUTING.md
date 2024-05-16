# Contributing

## Getting Started

To get started, cd into the folder and install the dependencies:

```bash
cd website
npm install
```

Then, run the development server:

```bash
npm run dev
```

For the most part, you should not need to work in the root of the `src` directory, except for minor tweaks to `index.css`. However, note that `index.css` will apply styles *globally* to the site. If you need to add styles to a specific page, you should create a new CSS file in the `src/css` directory and import it into the page's JSX file.


## Adding a new page

1. Create a new file in the `src/pages` directory. The file should be named after the page you want to create. For example, if you want to create a page called "About", you should create a file called `About.jsx`.

2. In `src/router/pagesData.jsx`, add a new entry to the pagesData array, following the existing template

3. Create a correspondingly named css file in `src/css`. For example, if you created a page called `About.jsx`, you should create a file called `About.css`. Capitalize the name if it is for a page, and use camelCase for the name if it is for a component.

4. Don't forget to import the css file into the page's JSX file. For example, if you created a page called `About.jsx`, you should add the following line to the top of the file:

```jsx
import '../css/About.css';
```

## Adding a new component

1. Create a new file in the `src/components` directory. The file should be named after the component you want to create.

2. Create a correspondingly named css file in `src/css`. Use camelCase for the name, and remember to import the css file into the component's JSX file.

3. Remember to import the component into the page's JSX file.

```jsx
import MyComponent from '../components/MyComponent';
```

## Contributing 

Before pushing your code to the repository, put it on a separate branch and push that. Once you have made significant changes, you can open a pull request to merge into main.


The following commands assume you are already on the main branch locally and have made your changes.

```bash
git add .
git stash
git pull origin main
git checkout -b my-branch-name
git stash pop
git commit -m "My commit message"
git push origin my-branch-name
```
