# Stackoverflow-Clone
<div align="center">
  <a href="">
    <img width="255" alt="logo" src="https://github.com/Yashg5311/Stackoverflow-Clone/assets/91370994/5d89dac3-3ae4-4f5d-93bc-f1e766b2f898">
  </a>

  <h2 align="center">StackOverflow Clone</h2>

  <p align="center">
    Build with the MERN stack (MongoDB, Express, React and NodeJS).
    <br />
    <a href=""><strong>Explore the Project »</strong></a>
    <br />
    <br />
  </p>
</div>


## MERN Stack Stackoverflow Clone

  * [Introduction](#introduction)
  * [Key Features](#key-features)
  * [Technologies used](#technologies-used)
      - [Frontend](#frontend)
      - [Backend](#backend)
      - [Database](#database)
  * [Configuration and Setup](#configuration-and-setup)
  


## Introduction
This is a MERN Stack project based on Stack Overflow. The entire application is based on users and they can ask can question related to technology and errors.As you know, Stack Overflow is a question-and-answer website for programmers. It is the flagship site of the Stack Exchange Network. It was created in 2008 by Jeff Atwood and Joel Spolsky. It features questions and answers on certain computer programming topics.Have a Look at Entire Application!
Login Page:
![Screenshot (40)edit](https://github.com/Yashg5311/Stackoverflow-Clone/assets/91370994/5a9839a3-b61c-4c71-b9e4-aaf70896ae71)

Main Page where all Questions are visible:
![Screenshot (41)edit](https://github.com/Yashg5311/Stackoverflow-Clone/assets/91370994/c495581c-9ca8-444f-b412-568c7b86b06a)

Ask a Question Page:
![Screenshot (43)edit](https://github.com/Yashg5311/Stackoverflow-Clone/assets/91370994/45f4fe15-4450-4613-be28-04dea2aabe2b)

Question page where users can answer and comment:
![Screenshot (44)edit](https://github.com/Yashg5311/Stackoverflow-Clone/assets/91370994/d4c4261e-d212-4167-b7a0-f5425e8d9ef4)
![Screenshot (45)edit](https://github.com/Yashg5311/Stackoverflow-Clone/assets/91370994/cee592f1-05b1-485b-98c7-30edd6b9af5c)

## Key Features
- Implemented a clone of Stack Overflow website and included features like adding Questions ,comments and
answering them which is fully responsive.
- Firebase Integration for Google Sign In.
- Used Material UI for frontend designing purpose.
- Used Redux for State Management.


## Technologies used
This project was created using the following technologies.

#### Frontend

- React JS
- Redux
- JavaScript
- Firebase

#### Backend

- ExpressJS
- NodeJs
- Mongoose

#### Database
MongoDB (MongoDB Atlas)

## Configuration and Setup
In order to run this project locally, simply fork and clone the repository. 
- Open the project in your prefered code editor.
- Go to terminal -> New terminal (If you are using VS code)
- Split your terminal into two (run the client on one terminal and the server on the other terminal)

In the first terminal

$ cd frontend
$ npm install (to install client-side dependencies)
$ npm start (to start the client)


For setting up backend
- Update Mongo URL in db.js





Provide some random key in ACCESS_TOKEN_SECRET or you could generate one using node enter the below command in the terminal to genrate a random secret key 


node -e "console.log(require('crypto').randomBytes(256).toString('base64'));"


In the second terminal (*in the project root directory (server)).

```
$ npm install (to install server-side dependencies)
& cd server
$ npm start (to start the server)

