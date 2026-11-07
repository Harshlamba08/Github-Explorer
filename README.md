# GitHub Explorer

GitHub Explorer is a web application that I built to explore GitHub developers and their repositories using a GitHub username.

The idea behind this project was to practise JavaScript concepts by building something useful. It helped me understand how APIs work, how to handle data, and how to organise JavaScript code into separate modules.

## Features

### GitHub Profile Search
- Search for any GitHub user by entering their username.
- View their profile picture, name, bio, followers, and following.
- Show an error message if the username doesn't exist.

### Repository Explorer
- View repositories of the searched GitHub user.
- See repository names, descriptions, and programming languages.
- Search repositories by name.
- Sort repositories alphabetically (A-Z and Z-A).

### Favourite Developers
- Add developers to your favourites list.
- Prevent adding the same developer more than once.
- Remove developers whenever needed.
- Save favourites in LocalStorage so they remain available after refreshing the browser.
- Show a message when the favourites list is empty.

### Other Features
- Simple navigation between Home and Favourites.
- Responsive layout for mobile, tablet, and desktop screens.
- Basic error handling for API requests.

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- GitHub REST API
- Fetch API
- LocalStorage
- Git and GitHub

## Project Structure

```text
github-explorer/
│
├── css/
│   ├── style.css
│   └── responsive.css
│
├── js/
│   ├── api.js
│   ├── app.js
│   ├── search.js
│   ├── storage.js
│   ├── ui.js
│   └── utils.js
│
├── index.html
└── README.md
```

## How to Run the Project

1. Clone this repository:

```bash
git clone YOUR_REPOSITORY_URL
```

2. Open the project folder in VS Code.

3. Install the Live Server extension if you haven't already.

4. Right-click on `index.html` and select **Open with Live Server**.

5. The project will open in your browser.

## API Used

I used the GitHub REST API to fetch public user profiles and their repositories.

**User Profile:**
`https://api.github.com/users/{username}`

**User Repositories:**
`https://api.github.com/users/{username}/repos`

## What I Learned

While building this project, I got practical experience with:

- Selecting and manipulating DOM elements.
- Handling click and input events.
- Working with JavaScript array methods like `map()`, `filter()`, `some()`, and `sort()`.
- Fetching data from APIs using `async/await`.
- Handling errors using `try/catch`.
- Working with LocalStorage.
- Using JavaScript modules with import and export.
- Organising code into separate files.
- Making a website responsive using CSS media queries.

## Author

**Harsh Lamba**

- GitHub: Add your GitHub profile link
- LinkedIn: Add your LinkedIn profile link

---

Built as a learning project to improve my frontend development skills.