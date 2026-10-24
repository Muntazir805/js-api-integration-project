# UserHub – User Directory

A simple, responsive User Directory web application built with **HTML, CSS, and JavaScript**. This project integrates the [Fake Store API](https://fakestoreapi.com/) to fetch user data and display each user's avatar, name, and ID in a clean card layout.

Users can search for specific people and view their detailed profiles on a separate page.

## Features

- **API Integration:** Fetches user data using JavaScript's Fetch API.
- **User Cards:** Displays each user's avatar, full name, and ID.
- **User Details:** Shows personal and address information on a separate page.
- **Search Functionality:** Search users by name or ID.
- **Responsive Design:** Adapts to desktop, tablet, and mobile screens.
- **Dynamic Rendering:** Generates user cards and profile details using DOM manipulation.
- **Error Handling:** Handles API errors and invalid or missing user IDs.
- **Generated Avatars:** Creates name-based avatar images using UI Avatars.

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Fetch API
- Fake Store API
- UI Avatars API
- Visual Studio Code
- Live Server

## Project Structure

```text
user-directory/
│
├── index.html
├── user-details.html
├── style.css
├── app.js
├── user-details.js
└── README.md
```

## Getting Started

### Prerequisites

- A modern web browser.
- Visual Studio Code (recommended).
- Live Server extension for VS Code.
- An active internet connection.

### Installation

1. Clone the repository or download the project files.

   ```bash
   git clone https://github.com/Muntazir805/js-api-integration-project.git
   ```

2. Open the project folder in Visual Studio Code.

3. Install the Live Server extension if it is not already installed.

4. Right-click `index.html` and select **Open with Live Server**.

5. Browse the user directory and click **View Details** to explore a user's information.


## API Used

**Fake Store API**

Base URL:

```text
https://fakestoreapi.com
```

Endpoint used:

```text
GET https://fakestoreapi.com/users
```

The application retrieves user data, including IDs, names, usernames, email addresses, phone numbers, and address information.

Avatar images are generated through:

```text
https://ui-avatars.com/
```

## How It Works

1. `app.js` fetches the user data from the API.
2. JavaScript dynamically creates a card for each user.
3. The search field filters users by name or ID.
4. Clicking **View Details** opens `user-details.html` with the selected user's ID in the URL.
5. `user-details.js` reads the ID, finds the matching user, and displays their information.
6. CSS Grid and media queries make the interface responsive across different screen sizes.

## Learning Objectives

This project helped me practice:

- Working with REST API data.
- Using `fetch()` and `async/await`.
- Handling errors with `try...catch`.
- Manipulating the DOM with JavaScript.
- Using array methods such as `forEach()`, `filter()`, and `find()`.
- Passing data between pages using URL query parameters.
- Building responsive layouts with CSS Grid and media queries.
- Organizing a project into reusable, maintainable files.

## Future Improvements

- Add pagination for larger user lists.
- Add sorting by name or ID.
- Improve loading indicators and error messages.
- Add a retry button when the API request fails.
- Add a dedicated profile view with more visual details.

## Security Note

This is a learning project that uses a public demonstration API. It does not implement authentication or authorization and should not be used to manage real users or sensitive information.

## Acknowledgements

- [Fake Store API](https://fakestoreapi.com/) — sample user data.
- [UI Avatars](https://ui-avatars.com/) — generated avatar images.

---

**Built with HTML, CSS, and JavaScript as part of my JavaScript API integration learning journey.**
