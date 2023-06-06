# Payload (Chartered Flights Booking Application)

The Payload application is a user-friendly service built using the **MERN stack**, **Tailwind CSS**, and **Prisma ORM**. It simplifies the process of booking tickets for chartered flights, catering to the needs of the niche industry.

## Technologies Used

The Payload application leverages the following technologies:

- **MERN Stack**:

  - MongoDB: A NoSQL database for storing application data.
  - Express.js: A web application framework for Node.js, providing robust routing and middleware capabilities.
  - React: A JavaScript library for building user interfaces.
  - Node.js: A JavaScript runtime environment for server-side development.

- **Tailwind CSS**: A utility-first CSS framework that enables rapid UI development with pre-defined utility classes.

- **Prisma ORM**: A modern Object-Relational Mapping (ORM) tool that simplifies database access and management.

## Running the Payload Application

To run the Payload application, follow the instructions below:

1. Clone the repository:

   ```
   git clone <repository_url>
   ```

2. Install the dependencies on both client and server directories:

   ```
   npm install
   ```

3. Change directory to the server:

   ```
   cd server
   ```

4. Run both the client and server concurrently:

   ```
   npm run app
   ```

   This command will start the client and server simultaneously, allowing them to communicate with each other.

   **OR**

   Alternatively, you can run the client and server individually:

   - To run the client:

     1. Change directory to the client:

        ```
        cd client
        ```

     2. Install the client dependencies:

        ```
        npm install
        ```

     3. Start the client development server:
        ```
        npm run dev
        ```

   - To run the server:

     1. Change directory to the server:

        ```
        cd server
        ```

     2. Install the server dependencies:

        ```
        npm install
        ```

     3. Start the server:
        ```
        npm run dev
        ```

5. Access the application:
   Once the client and server are running, you can access the Payload application by opening your web browser and navigating to the specified URL (`http://localhost:5173`).

   Note: Make sure you have the necessary prerequisites installed, such as Node.js and npm, before running the application.

You should now be able to run the Payload application locally on your machine. Enjoy booking tickets for chartered flights with ease!
