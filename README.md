![GitHub repo size](https://img.shields.io/github/repo-size/AbhayRana9920/ai-chatbot-application)
![GitHub stars](https://img.shields.io/github/stars/AbhayRana9920/ai-chatbot-application?style=social)
![GitHub last commit](https://img.shields.io/github/last-commit/AbhayRana9920/ai-chatbot-application)
![GitHub license](https://img.shields.io/github/license/AbhayRana9920/ai-chatbot-application)
![Website](https://img.shields.io/website?url=https%3A%2F%2Fgemnibot.onrender.com)

# GemniBot: A Gemini AI Chatbot Application

A full-stack AI chatbot web application using Google Gemini API, built with a React (Vite) frontend and a Spring Boot backend.

## 🌐 Live Demo

🔗 [Visit GemniBot](https://gemnibot.onrender.com)

![GemniBot Preview](https://raw.githubusercontent.com/AbhayRana9920/ai-chatbot-application/main/preview.png)


## Table of Contents
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Deployment](#deployment)
- [Security](#security)
- [Acknowledgements](#acknowledgements)

## Features

- 🤖 Conversational AI chatbot powered by Gemini API
- ⚛️ Modern React frontend with Bootstrap styling
- 🔒 Secure backend API integration
- 🚀 Easy deployment to cloud platforms like Render

## Project Structure

```
ai-chatbot-application/
│
├── gemnibot-frontend/    # React (Vite) frontend
│   ├── src/             # Frontend source files
│   ├── package.json     # Frontend dependencies
│   └── vite.config.js   # Vite configuration
│
└── gemnibot/            # Spring Boot backend
    ├── src/             # Backend source files
    └── pom.xml         # Backend dependencies
```

## Getting Started

### Prerequisites

- Node.js & npm (for frontend)
- Java 21+ & Maven (for backend)
- Gemini API key from Google

### Installation

1. **Clone the Repository**
```bash
git clone https://github.com/AbhayRana9920/ai-chatbot-application.git
cd ai-chatbot-application
```

2. **Setup Backend**
```bash
cd gemnibot

# Set environment variables (recommended)
set GEMINI_API_URL=https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=
set GEMINI_API_KEY=your-gemini-api-key

# Start the backend
./mvnw spring-boot:run
```
> Backend will start on [http://localhost:8080](http://localhost:8080)

3. **Setup Frontend**
```bash
cd ../gemnibot-frontend
npm install
npm run dev
```
> Frontend will start on [http://localhost:5173](http://localhost:5173)

## Deployment

### Render Deployment

1. **Backend (Web Service)**
   - Connect your GitHub repository
   - Set environment variables in Render dashboard
   - Build command: `./mvnw clean package`
   - Start command: `java -jar target/gemnibot-0.0.1-SNAPSHOT.jar`

2. **Frontend (Static Site)**
   - Connect your GitHub repository
   - Build command: `npm install && npm run build`
   - Publish directory: `dist`

## Security

- ⚠️ Never commit API keys or secrets to the repository
- 🔐 Use environment variables for sensitive data
- 🛡️ Backend-only access to Gemini API credentials

## Acknowledgements

- [Google Gemini API](https://ai.google.dev/)
- [Spring Boot](https://spring.io/projects/spring-boot)
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Bootstrap](https://getbootstrap.com/)
