# CBT SOFTWARE

<p align="center">
<img src="/docs/demo2.png" height="120">
</p>

<p align="center">
<img src="/docs/demo.png" height="120">
</p>

<p align="center">
<img src="/docs/demo3.png" height="120">
</p>

# Application Setup Guide

## Prerequisites

Ensure you have the following installed on your system before proceeding:

- [Docker](https://www.docker.com/)
- [Node.js](https://nodejs.org/)

## Steps to Run the Application

1. **Start Docker**

   Make sure Docker is running on your machine.

<p align="center">
<img src="/docs/demo4.png" height="120">
</p>


2. **Navigate to the Code Directory**

   Open a terminal and move into the code directory where the application files are located.

3. **Start the MongoDB Container**

   Run the following command to start the MongoDB container:

   ```bash
   docker-compose up
   ```

4. **Start the Server**

   In the same directory, run:

   ```bash
   npm start
   ```

5. **Start the Client**

   Open a new terminal window, navigate to the `client` directory, and run:

   ```bash
   cd client
   npm start
   ```

6. **Access the Application**

   The application will automatically open in your default web browser at:

   ```
   http://localhost:3000
   ```

---

## Troubleshooting

- Ensure all dependencies are installed using `npm install` in both the main and `client` directories if any issues arise.
- Check if Docker is properly installed and running.
- Verify that port `3000` is not occupied by another application.

---

Happy coding!



