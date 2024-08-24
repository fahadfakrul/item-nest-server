# Item-nest-server
This is the backend for the Product Catalog project, a full-stack single-page web application built using the MERN stack. This project provides APIs to fetch, filter, sort, and paginate products, and includes user authentication with Firebase.

## Features
- Product Management: Provides APIs for fetching products with support for pagination, searching, filtering, and sorting.
- Authentication: Supports Google and Email/Password authentication via Firebase.
- Efficient Pagination: Server-side pagination ensures efficient data loading.
- API Documentation: Describes how to interact with the available APIs.


## Getting Started
 - Prerequisites
   + Node.js (v14 or higher)
 - npm or yarn
 - MongoDB (local or cloud instance)
## Installation
- Clone the repository:
+ https://github.com/fahadfakrul/item-nest-server.git
## Install dependencies:
- npm install
- Set up environment variables:

+ Create a .env file in the root directory and add the following:


* PORT=5000
* MONGO_URI=your-mongodb-uri
* FIREBASE_ADMIN_SDK_KEY=your-firebase-admin-sdk-key-file.json
* PORT: The port on which the server will run.
* MONGO_URI: Your MongoDB connection string.
* FIREBASE_ADMIN_SDK_KEY: Path to your Firebase Admin SDK JSON file.
## Start the server:


- npm start
- The server will start on http://localhost:5000.
- Ensure your .env file is correctly set up for the production environment.

- Database Setup
+ This project uses MongoDB as the database. You can set up a MongoDB instance locally or use a cloud service like MongoDB Atlas.
## Client link: https://github.com/fahadfakrul/item-nest-client
Contributing
Contributions are welcome! Please submit a pull request or open an issue to discuss your ideas.

