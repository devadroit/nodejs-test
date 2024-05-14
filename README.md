### Technical Test for Mid-Level Node.js Backend Developers

#### Instructions:
1. Fork the given repository on GitHub.
2. Complete the tasks described below.
3. Create a new branch for your work.
4. Commit your changes with clear commit messages.
5. Push your branch to the forked repository.
6. Open a pull request from your branch to the main branch.
7. Share the link to the pull request.
8. **Note:** Using ChatGPT or any other AI assistant to solve this test is prohibited.

#### Task 1: Git and GitHub

1. **Fork and Clone:** Fork the given repository and clone it to your local machine.
2. **Branching:** Create a new branch named `feature/add-api-endpoints`.
3. **Commit:** Make at least three meaningful commits with clear messages as you complete the tasks below.

#### Task 2: Node.js

1. **Set Up Project:**
    - Initialize a new Node.js project in the repository if one is not already present.
    - Install the necessary dependencies (`express`, `dotenv`, `mongoose`, `jest`, `supertest`, `axios`, `swagger-jsdoc`, `swagger-ui-express`).

2. **Create a Basic Express Server:**
    - Set up an Express server that listens on port 3000.
    - Add middleware for parsing JSON requests.

3. **Environment Variables:**
    - Create a `.env` file to manage environment variables.
    - Store the port number and database connection string in the `.env` file.

4. **API Endpoints:**
    - **GET /health:** Returns a JSON response with a status message.
      ```json
      {
          "status": "OK",
          "timestamp": "2024-05-14T12:34:56.789Z"
      }
      ```
    - **POST /users:** Accepts a JSON body with user details (name, email, password). Respond with the created user object (for now, just echo back the request body).
      ```json
      {
          "name": "John Doe",
          "email": "john.doe@example.com",
          "password": "hashedpassword"
      }
      ```
    - **GET /users/:id:** Returns a user object with the specified ID. For now, just return a sample user object.
      ```json
      {
          "id": "123",
          "name": "John Doe",
          "email": "john.doe@example.com"
      }
      ```

5. **Error Handling:**
    - Implement basic error handling for your endpoints.
    - Return appropriate status codes and error messages.

#### Task 3: Database Integration

1. **Set Up MongoDB:**
    - Connect to a MongoDB database using Mongoose.
    - Create a `User` model with fields for name, email, and password.

2. **Update API Endpoints:**
    - **POST /users:** Save the user details to the MongoDB database.
    - **GET /users/:id:** Fetch the user details from the MongoDB database using the provided ID.

#### Task 4: External API Integration

1. **Create a Service:**
    - Create a service that communicates with an external API (e.g., a public API like OpenWeatherMap or another relevant API).
    - Use `axios` to make HTTP requests to the external API.

2. **New Endpoint:**
    - **GET /external-data:** Fetch data from the external API and return it in the response.
    - For example, if using OpenWeatherMap, return the current weather data for a specified city.
      ```json
      {
          "city": "San Francisco",
          "temperature": "15°C",
          "weather": "Cloudy"
      }
      ```

#### Task 5: Testing with Jest

1. **Setup Jest:**
    - Configure Jest for testing.
    - Write unit tests for your API endpoints using Jest and Supertest.

2. **Test Cases:**
    - Write tests for the `GET /health` endpoint to ensure it returns the correct status and timestamp.
    - Write tests for the `POST /users` endpoint to ensure it correctly handles user creation.
    - Write tests for the `GET /users/:id` endpoint to ensure it correctly fetches user details.
    - Write tests for the `GET /external-data` endpoint to ensure it correctly fetches data from the external API.

#### Task 6: Single-Responsibility Principle

1. **Refactor Code:**
    - Ensure that your code follows the Single-Responsibility Principle. Each module or function should have a single responsibility.
    - Refactor your code to separate concerns. For example, create separate files for route handling, database interactions, external API communication, and utility functions.

#### Task 7: Swagger Documentation

1. **Setup Swagger:**
    - Install `swagger-jsdoc` and `swagger-ui-express`.
    - Configure Swagger in your project to document the API endpoints.

2. **Document Endpoints:**
    - **GET /health**
    - **POST /users**
    - **GET /users/:id**
    - **GET /external-data**

### Bonus Task (Optional):

1. **Additional Testing:**
    - Write additional tests to cover edge cases and error handling scenarios.

### Submission:
- Ensure your code is clean, well-commented, and follows best practices.
- Provide a `README.md` file with instructions on how to set up and run the project.
- Share the link to your pull request for review.