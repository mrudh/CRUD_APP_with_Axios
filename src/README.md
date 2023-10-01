<h2>React CRUD App with Axios and MockAPI</h2>
This is a simple React application that demonstrates basic Create, Read, Update, and Delete (CRUD) operations using Axios for API calls. The application allows you to interact with a mock API hosted on MockAPI.

<h4>Features</h4>
<ul>
<li>Create new users with a name, age, and a list of hobbies.</li>
<li>Read a list of users from the API and display them.</li>
<li>Update existing user information (in this case, adding a new hobby).</li>
<li>Delete a user from the API.</li>
</ul>

<h4>Technologies Used</h4>
<u>
  <li>React: JavaScript library for building user interfaces.</li>
  <li>Axios: A promise-based HTTP client for making API requests.</li>
  <li>MockAPI: A service for creating mock RESTful APIs for testing and development purposes.</li>
</u>

<h4>How to Run the Application</h4>
<h5>Clone this repository to your local machine:</h5>
git clone https://github.com/mrudh/REST_APIs_USERS_DATABASE.git

<h5>Navigate to the project directory:</h5>
cd your-repo

<h5>Install the required dependencies:</h5>
npm install

<h5>Start the React development server:</h5>
npm start

Open your web browser and access the application at http://localhost:3000.

<h4>Usage</h4>
<u>
  <li>Enter a name in the input field and click the "POST Data" button to create a new user.</li>
  <li>Existing users are displayed with their ID, name, and buttons to update or delete them.</li>
  <li>Click the "update" button to add a new hobby to a user.</li>
  <li>Click the "delete" button to remove a user from the API.</li>
</u>

<h4>API Endpoints</h4>
<u>
  <li>GET /users: Fetches the list of users.</li>
  <li>POST /users: Creates a new user.</li>
  <li>PUT /users/:id: Updates an existing user by ID.</li>
  <li>DELETE /users/:id: Deletes a user by ID.</li>
</u>
