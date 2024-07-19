# E-Commerce React Application

This is a simple e-commerce web application built with React and Tailwind CSS. It uses a local JSON file to simulate API calls and Redux for state management, including user login and cart functionality.

## Features

- **Home Page**: Displays a list of products fetched from a local JSON file.
- **Product Details**: View detailed information about a product.
- **Login**: User authentication using Redux.
- **Cart**: Add/remove products to/from the cart with cart state managed by Redux.
- **Responsive Design**: Tailwind CSS for responsive and modern design.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Redux**: State management library for managing the application state.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **JSON Server**: Local JSON file to simulate API calls.

## Installation

1. **Clone the repository**:
  
   git clone https://github.com/Addy1122/adline-ecommerce.git
   
   cd ecommerce-react-app
   
3. Install dependencies:

    npm install

4. Start JSON Server:

    npx json-server --watch db.json --port 3002

5. Start the development server:

    npm start

6. Open your browser and navigate to http://localhost:1235
