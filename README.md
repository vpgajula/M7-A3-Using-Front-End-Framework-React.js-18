# M7-A3-Using-Front-End-Framework-React.js-18
M7-A3-Using Front End Framework React.js 18

Prerequisites:

    Node.js installed on your machine.
    Basic understanding of HTML, CSS, and JavaScript

Step 1: Create a new React app Open your terminal or command prompt and navigate to the directory where you want to create the project. Then, run the following command:

Type the following code in the terminal:
    npx create-react-app login-page
This will create a new React app named "login-page" in the current directory.

Step 2: Install dependencies Navigate into the project directory using the command:

Type the following code in the terminal:
    cd login-page
Then, install the following dependencies:

Type the following code in the terminal:
    npm install react-router-dom
    npm install axios

Step 3: Create a Login Component In the src directory, create a new folder named components. Inside the components folder, create a new file named Login.js

This component defines a form with two input fields for email and password. It also includes a submit button that calls the handleSubmit function when clicked. The handleSubmit function sends a POST request to your API endpoint with the email and password entered by the user. If the login is successful, the API will respond with a token which is stored in the local storage. The navigate.push function redirects the user to the dashboard page.

Step 4: Create a Dashboard Component In the src directory, create a new file named Dashboard.js. 

Step 5: Create a Routes Component In the src directory, create a new file named Routes.js. 

This component defines two routes - one for the login page and another for the dashboard page. It uses the Routes and Route components from react-router-dom to handle routing.

Step 6: Create an App Component In the src directory, open the App.js file 

This component wraps the Routes component with a BrowserRouter from react-router-dom.

Step 7: Add some styles In the src directory, create a new file named index.css. 

This file contains some basic styles for the login and dashboard pages.

Step 8: Run the app Open your terminal or command prompt and navigate to the project directory. Then, run the following command:

Type the following code in the Terminal:
    npm start

This will start the development server and open the app in your browser. You should see the login page at http://localhost:3000/.

That's it! You've now created a basic login page in React.js. Note that you'll need to replace the API endpoint URLs with your own URLs. Also, this code doesn't include any server-side validation or authentication - it's purely a client-side login page.