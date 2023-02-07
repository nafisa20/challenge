# React Challenge

## Project Overview

This application consists of a page of products which were retrieved from a products API. I've displayed the title, description, category, stock and price of each product. Users are also able to search for a product and filter products by their category.

## Installation

To run this project locally:

Clone the project, change into the directory and install the dependencies. Then you'll need to start the React application, which will run on port 3000.

```bash
 git clone https://github.com/nafisa20/challenge.git
 cd react-challenge
 npm install
 npm start
```

To run the tests:

```
npm run test
```

To run the tests in watch mode:

```
npm run test:watch
```

## Improvements

If i were to spend more time on this application I'd like to add:

* pagination to the products page
* the functionality for sorting the products
* some error handling in case the api call were to fail + add a loading state
* tests which mock the network requests to make them more reliable and faster 
* tests for the search and category filter functionality
