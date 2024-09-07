# Short URL Generator

This project is a URL shortening service built using Node.js, Express, MongoDB, and JWT for authentication. Users can sign up, log in, and generate short URLs from long URLs. The application redirects users to the original URL when the short version is accessed.

## Features

- **User Authentication**: 
  - **Signup**: Users can create an account.
  - **Login**: Users must log in to create short URLs.
- **URL Shortening**: Converts long URLs into shorter, more manageable links.
- **Redirection**: Automatically redirects users to the original URL when visiting the short URL.
- **Secure Storage**: MongoDB is used to store users' data and URL pairs securely.
- **Token-Based Authentication**: JWT (JSON Web Token) is used to maintain sessions.

## UI
### Login
![image](https://github.com/user-attachments/assets/fabf5e1a-22db-4de6-a95a-6e3159e4c678)
### Signup
![image](https://github.com/user-attachments/assets/134eac7b-af80-4439-991a-ea05771eb7ac)
### HomePage
![image](https://github.com/user-attachments/assets/51a9ba13-084f-450f-b854-b131988c9f39)



## Technologies Used

- **Node.js**: Backend server to handle requests.
- **Express.js**: Web framework for routing and handling HTTP requests.
- **MongoDB**: Database for storing the URL pairs and user information.
- **JWT**: For user authentication and session management.
- **HTML/CSS**: For the frontend pages including login, signup, and URL form.
- **JavaScript**: For dynamic behavior on the frontend.

## How to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/hariprasad-575/shorturl.git
