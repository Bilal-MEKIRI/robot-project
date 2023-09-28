# 🤖 Robot LED Control Server 🌟

Welcome to the Robot LED Control Server! This project allows you to control an LED attached to a robot through simple web endpoints. It's super fun and easy to get started. Let's dive right in! 🚀

## 📖 What does this project do? 🤷‍♂️

At its core, the project maintains the state of an LED (either ON or OFF). A robot can request the current state of the LED, and the state can be updated through a simple POST request. The server listens to incoming requests, updates its internal LED state, and responds accordingly.

## 🌐 Endpoints 🛣️

- `GET /getLedState`
  - This endpoint allows the robot to fetch the current state of the LED.
  - Response Example:

    ```json
    {
      "ledState": "ON"
    }
    ```

- `POST /ledState`
  - This endpoint allows updating the current LED state.
  - Body Example:

    ```json
    {
      "ledState": "OFF"
    }
    ```

## 🛠️ Setup & Run 🏃‍♀️

1. **Installation:** Make sure you have node and npm installed. Then, navigate to the project directory and run:
    ```bash
    npm install
    ```

2. **Running the Server:** It's simple! Just execute:
    ```bash
    node src/server.js
    ```
   You should see a message indicating that the server is running and listening to incoming requests.

## 📌 Note 📝

- The server uses CORS, which means it can accept requests from any origin. Make sure to adjust this setting in a production environment for security reasons.
- The LED state is maintained in-memory for simplicity. In a real-world application, you might want to use a database or other persistent storage solutions.

## 😊 Contributions & Feedback 📢

We love to hear from you! If you have any feedback or want to contribute, feel free to open an issue or a pull request. Let's make this project shine together! ✨
