# Tech-Blog

## Description

This project brought together a combination of express.js, SQL, mysql2, Sequelize, and Handlbars in the MVC paradigm.  I learned about using Handlebars to create the front end of the website, use authentication, and conditionally show/hide pages of the website based on authentication. 


![Tech Blog Post List](https://user-images.githubusercontent.com/64170123/179441374-338acce6-434c-4fc1-a0ae-7303b383f719.jpg)

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Links](#links)
* [Questions](#questions)

## Installation

If the user already has node installed on their device, they can download this project and run "npm init" and then "npm install express bcrypt sequelize express-handlebars dotenv --save mysql2 express-session connect-session-sequelize jest --save-dev" to download the required dependencies (express.js, bcrypt, Sequelize, Express-Handlebars, dotenv, MySql2, Session-sequelize, and Jest respectively).  In order to access the mysql2 shell,  they would need to create a .env file with the following, replacing <username> and <user password> with the users own username and password: 
  
DB_NAME=ecommerce_db

DB_USER= < username >

DB_PASSWORD= < user password >


To ensure the user is connected to the correct database, navigate to the root folder of the project, and then open the mysql2 shell and enter "source db/schema.sql".  Then enter "USE ecommerce_db" to use the database file. Exit the mysql2 shell by entering "exit" into the command line.

Next, seed the database with data by entering "npm run seed" into the command line.  The database and required tables are now created, selected, and contain data.  

Finally, connect the server by entering "npm start" into the command line.


## Usage

When the user gets to the homepage, they will be presented with a list of existing blog posts and comments.  At the top of the webpage, the user has an option to login.  Once they click on the login link, the user has the option to log in or create a new login account. Once the user logs in, they are taken to a dashboard of the posts they have created.  They are given the option to add a new post, change the title of the post, or delete the post.  They also have the option to comment on other posts. 


![Tech Blog Log In](https://user-images.githubusercontent.com/64170123/179441799-0d6f2db5-1a57-41df-ac36-bf336cf7b9e9.jpg)

![Tech Blog Create New Post](https://user-images.githubusercontent.com/64170123/179441794-3f5964d9-6982-4ad9-ab9f-e5c958fb4543.jpg)

![Tech Blog Post List 2](https://user-images.githubusercontent.com/64170123/179441804-94162241-a53c-4508-9359-79e1f3dadc27.jpg)

## Links


The link to the project is here: https://limitless-hollows-96215.herokuapp.com

The url of the Git repository is here: https://github.com/Samantha-Ruth/Tech-Blog


## Questions

If you have any questions about the repo, open an issue or you can find more of my work at (https://gitHub.com/Samantha-Ruth).


