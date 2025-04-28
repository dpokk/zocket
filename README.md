
# Realtime Chat Application

This is a full-stack web application designed for real-time messaging with features such as user authentication, media sharing, and a responsive design that works across both mobile and desktop platforms.

## Tech Stack

- **Backend:** Node.js, Express.js, Socket.io, MongoDB, Cloudinary, JWT
- **Frontend:** React, Socket.io-client, CSS/SCSS

## Features

The app provides several key features, including real-time messaging, secure user authentication (login and registration), media sharing using Cloudinary for storing images and videos, a responsive interface, persistent message history, and user presence indicators (showing online/offline status).

## Setup Instructions

### Prerequisites

To get started, you'll need to have Node.js (v14+), MongoDB (local or Atlas), and a Cloudinary account for media storage.

### Backend Setup

1. Clone the repository and navigate to the project directory:
   ```bash
   git clone https://github.com/your-repo/realtime-chatapp.git
   cd realtime-chatapp
   ```

2. Install the backend dependencies:
   ```bash
   cd backend
   npm install
   ```

3. Create a `.env` file in the backend directory and add the following environment variables:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install the frontend dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the frontend directory:
   ```env
   REACT_APP_API_URL=http://localhost:5000
   ```

4. Start the frontend development server:
   ```bash
   npm start
   ```

## Usage

Once both the frontend and backend are running, open your browser and go to `http://localhost:3000`. You can register a new account or log in with existing credentials to start chatting. The app also allows users to upload and share images/videos via Cloudinary.

## Development

Both the frontend and backend support hot-reloading to provide a smoother development experience.

## Deployment

To deploy the application, build the frontend using the following command:
   ```bash
   npm run build
   ```

After that, deploy the backend to a Node.js hosting platform (like Heroku, AWS, or DigitalOcean), and deploy the frontend to a static hosting service (like Netlify or Vercel).

## Future Improvements

There are several potential features to extend the application, including group chat functionality, end-to-end encryption for secure messaging, video/audio calling support, a mobile app built with React Native, and the addition of read receipts and typing indicators.

## Contributing

Contributions are welcome. Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

