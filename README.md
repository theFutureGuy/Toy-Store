# MERN Stack Toy Store (Internship Hackathon)

Welcome to the MERN Stack Toy Store, a project built for an exciting internship hackathon! This toy store showcases the use of MongoDB, Express.js, React, Node.js with `react-bootstrap`, and basic `react-redux`. The project is organized into separate `client` and `server` folders, featuring two main screens: `Homepage` and `ProductPage`.

## Important Note

- This project uses static data stored in a `data.js` file for demonstration purposes.
- Modify the data as needed or replace it with dynamic data from a database in a production environment.
- The actual API endpoints might differ based on your backend implementation.
- Feel free to customize the API documentation based on your specific backend routes and logic.

## Prerequisites

Before diving into the hackathon project, make sure you have the following installed:

- Node.js and npm
- data.json

## Setup

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/mern-toy-store.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd mern-toy-store
    ```

3. **Install dependencies for both the frontend and backend:**

    ```bash
    cd client && npm install
    cd ../server && npm install
    ```


## Run the Demo

1. **Start the backend server:**

    ```bash
    cd server && npm start
    ```

2. **Start the frontend:**

    ```bash
    cd client && npm start
    ```

3. **Open your browser and go to [http://localhost:3000](http://localhost:3000) to view the toy store.**

## Key Features

- **Homepage Screen (`client/src/pages/Homepage.js`):**
  - Features a user-friendly interface with product previews.
  - Utilizes `react-bootstrap` components for responsive design.

- **ProductPage Screen (`client/src/pages/ProductPage.js`):**
  - Displays detailed information about a selected toy product.
  - Incorporates `react-bootstrap` for consistent styling.

- **Redux State Management (`client/src/redux`):**
  - Basic usage of `react-redux` for managing global state.
  - Actions and reducers for handling product-related state.


