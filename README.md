## Project Description

This project is a Netflix clone built using modern technologies. The frontend is developed in React with TypeScript for type safety and improved code structure. The backend is implemented using Node.js, Express.js, and MongoDB as the database.

The application fetches movie data dynamically from The Movie Database (TMDb) API, ensuring a rich collection of films and series. Users can browse through various categories and enjoy a seamless experience with an interface inspired by Netflix. The backend handles API requests, data storage, and user interactions efficiently.


## How to Use the Project  

Follow these steps to set up and run the project locally:  

### 1. Clone the Repository  
```bash
git clone https://github.com/yourusername/your-repository-name.git
cd your-repository-name
```

### 2. Install Dependencies

Frontend:
```bash


cd client
npm install
```


Backend:
```bash

cd server
npm install

```

### 3. Set Up Environment Variables

```bash
TMDB_API_KEY=your_tmdb_api_key
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

### 4. Set Up Token.ts for TheMovieDB API and TOKEN

In the token.ts file, you need to replace the token and API key with the ones you obtained from The Movie Database (TMDb).

### 5. Start the Project

Start Backend:

```bash
cd server
npm run dev
```

Start Frontend:
```bash
cd client
npm start
```

## Features  
- **Dynamic Movie Data**: Fetches movies and TV shows from **TMDb API**.  
- **Modern UI**: Netflix-inspired user interface for an immersive experience.  
- **User Authentication**: Secure login and signup functionality using JWT.  
- **Responsive Design**: Optimized for all devices.  
- **Backend API**: Built with Node.js and Express.js to handle requests and data.  
- **MongoDB Database**: Efficient storage and retrieval of user data


  <br>

Technologies Used
Frontend
React with TypeScript
Axios for API requests
Tailwind CSS for styling
Backend
Node.js with Express.js
MongoDB for the database
JSON Web Tokens (JWT) for authentication
API
The Movie Database (TMDb) API: Provides movie and TV show data.

### Project Overview

This project is a Netflix-inspired web application that allows users to browse movies and TV shows dynamically fetched from The Movie Database (TMDb) API. The application provides a seamless and responsive user experience, combining a modern frontend with a secure and efficient backend.

<br>

## Features
### Dynamic Content:

Movie and TV show data are fetched in real-time from TMDb API.
Users can explore categories, view details, and mark their favorites.
User Authentication:

Secure login and signup functionality are implemented using JWT (JSON Web Tokens) for session management.
Cookies are used to store JWT tokens, ensuring secure and persistent authentication.
Passwords are hashed using bcrypt to enhance security.
### Favorites Management:

Users can add movies or TV shows to their favorites.
A dedicated favorites section displays the saved items.
Favorites can be removed by simply hovering over the item and clicking the remove option.
### Responsive Design:

The UI is designed to be fully responsive, ensuring compatibility across various devices and screen sizes.
Technologies Used
### Frontend:

React with TypeScript for building a modular and type-safe user interface.
Axios for making HTTP requests to TMDb API and backend endpoints.
Tailwind CSS for modern and responsive styling.
### Backend:

Node.js and Express.js for building a RESTful API to handle user requests and serve data.
MongoDB for storing user data, including favorites, securely.
JWT and Cookies for secure authentication and session persistence.
bcrypt for hashing user passwords before storing them in the database.
### API Integration:

The app communicates with The Movie Database (TMDb) API to fetch movies and TV shows.
Supports various endpoints to retrieve trending content, search results, and detailed information about selected movies or series.
<br>
<br>
## Key Highlights
### Security First:
Passwords are encrypted using bcrypt, and JWT tokens are securely stored in HTTP-only cookies, minimizing vulnerabilities.

### Dynamic Favorites:
Users can personalize their experience by adding or removing items from their favorites. These changes are reflected instantly, creating a smooth and interactive UI.

### Clean and Modular Codebase:
The project is designed with a focus on maintainability, using a well-structured folder hierarchy for both frontend and backend components.

<br>

## Project Image

### Home Page
![image](https://github.com/user-attachments/assets/941e7326-698f-447d-a874-f0358dc61210)

![image](https://github.com/user-attachments/assets/d5c358a4-7c35-41ca-9126-5e5cd85934f6)

<br>

### Movie Page
![image](https://github.com/user-attachments/assets/07d23157-ca22-4c21-96c1-8aca9cfa7298)
<br>

### Mylist Page

After adding your desired movies to your favorites, they will appear in the favorites section. When you hover over them, you can remove them from your favorites.
![image](https://github.com/user-attachments/assets/7d951484-7438-41cc-9812-08cb368448f6)






