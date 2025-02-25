# ToDoApp
## Overview
ToDoApp is a full-stack application designed to manage tasks efficiently. The project is divided into two main parts: the backend and the frontend.  
## Technologies Used
### Backend
- Java: The primary programming language used for the backend.
- Spring Boot: A framework used to create stand-alone, production-grade Spring-based applications.
- Maven: A build automation tool used for managing project dependencies.
- MySQL: A relational database management system used to store application data.
- Hibernate: An ORM framework used for database operations.
### Frontend
- React: A JavaScript library for building user interfaces.
- Redux: A state management library for JavaScript applications.
- Axios: A promise-based HTTP client for making requests to the backend API.
- Tailwind: A CSS framework for responsive design.
## Project Structure
### Backend
- src/main/java/com/example/toDoApp: Contains the main application and service classes.
- src/main/resources: Contains configuration files like application.properties.
### Frontend
- frontend/src: Contains the React components, Redux store, and other frontend resources.

## Best Practices
### Backend
- Layered Architecture: The project follows a layered architecture with separate layers for controllers, services, and repositories.
- DTOs and Mappers: Data Transfer Objects (DTOs) and mappers are used to transfer data between layers.
- Exception Handling: Custom exceptions and global exception handlers are used to manage errors.
- Configuration Management: Sensitive information like database credentials is stored in application.properties.
### Frontend
- Component-Based Architecture: The UI is divided into reusable components.
- State Management: Redux is used for managing the application state.
- API Integration: Axios is used for making HTTP requests to the backend.

## Getting Started
### Prerequisites
- Java 11 or higher
- Node.js and npm
- MySQL database
### Backend Setup
### Clone the repository:
- git clone https://github.com/yourusername/ToDoApp.git
- cd ToDoApp
- Configure the database in src/main/resources/application.properties.
### Build and run the backend:
- mvn clean install
- mvn spring-boot:run
### Frontend Setup
Navigate to the frontend directory:
- cd frontend
### Install dependencies:
- npm install
- Start the frontend:
- npm start
