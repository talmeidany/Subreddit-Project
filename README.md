# My Application

Link: https://subreddit.onrender.com/
## Overview
This application displays the top posts of a given subreddit. Each post includes a title, a score, and two buttons for marking the post as read or unread.

## Frameworks Used
- React for the UI
- Express for the Node.js environment

## Instructions for Local Launch
### Prerequisites
- NPM (version 8 or 9)
- Node (version 18)

### Instructions
1. Clone the repository to your local machine.
2. Open a terminal and navigate to the project directory.
3. Run the command `npm install` to install the necessary dependencies.
4. Open a terminal and navigate to reddit-backend.
5. Run the command `node index.js`.
6. Open a terminal and navigate to reddit-app.
7. Run the command `npm star`.
8. Open a web browser and visit `http://localhost:3000` to access the application.

## Application Functionality
The purpose of this application is to display the top posts of a chosen subreddit. Each post is shown with its title, score, and two buttons for marking the post as read or unread.

- When the "Read" button is clicked, the post is opened, and its color is changed to indicate that it has been read.
- When the "Unread" button is clicked, the post is marked as unread, reverting its color back to the default.

User Workflow:
1. By default, no posts are displayed, and the user is prompted to enter a subreddit name.
2. After entering a valid subreddit name and clicking the search button, the top posts for that subreddit are fetched and displayed.
3. Each post includes a "Read" button and an "Unread" button.
4. Clicking the "Read" button opens the post and changes its color to indicate it has been read.
5. Clicking the "Unread" button marks the post as unread, reverting its color.

If the user enters an invalid subreddit name or there is no data available for the selected subreddit, an appropriate error message is displayed.
