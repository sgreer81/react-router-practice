## Install and Run

```sh
// Install
npm i
npm i -g json-server

// Run (separate tabs)
npm run api
npm run dev
```

## Features

- The API runs on port 3000, the Web App runs on port 8000
- Axios is already installed, use it by importing from `utils/xhr`
- React Router is already installed and setup

## API Routes

- `/users` Get a list of users
- `/users/1` Get user 1
- `/users/1?_embed=projects` Get user 1's projects

## Instructions

1. Create A "Home Page" that welcomes the user to the app, provide a link to the "Users" page
2. On the Users page, list out all the users (names only) using `<ul>` and `<li>`'s. Each user should link to a User Profile page
3. On the User Profile page, list all the other parts of the user profile (age and occupation). This can also use simple HTML list items.
4. On the User Profile page, link to the User Projects page.
5. On the User Projects page, list all the user's projects

#### Front-end Routes

- `/` Home Page
- `/users` Users Page
- `/users/1` User Profile Page
- `/users/1/projects` User 1's Projects
