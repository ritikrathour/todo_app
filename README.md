# Todo App

A simple and efficient Todo application built with React and Redux Toolkit. This app allows users to add, delete, update, and read todos, with data persistence using local storage. The application also incorporates performance optimization concepts, including the use of the `React.memo` hook.

## Features

- **Add Todos**: Users can add new todos.
- **Delete Todos**: Users can delete existing todos.
- **Update Todos**: Users can update the text of existing todos.
- **Read Todos**: Users can view the list of all todos.
- **Persistent Storage**: Todos are stored in the browser's local storage, so they persist even after refreshing the page.
- **Performance Optimization**: The app uses `React.memo` to prevent unnecessary re-renders and improve performance.

## Demo

 ![image](https://github.com/ritikrathour/todo_app/assets/99650054/cfb02d18-0993-4878-8696-3ceb7671444c)


## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/todo-app.git
    cd todo-app
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Start the development server**:
    ```bash
    npm start
    ```

    The app will be available at `http://localhost:3000`.

## Usage

1. **Add a Todo**:
    - Type your todo text into the input field and click the "Add Todo" button.
  
2. **Update a Todo**:
    - Click the "Edit" button next to the todo you want to update. The todo text will appear in the input field. Make your changes and click the "Update Todo" button.

3. **Delete a Todo**:
    - Click the "Delete" button next to the todo you want to remove.

4. **View Todos**:
    - All todos will be listed below the input form. 

## Code Overview

### Component

- **TodoForm.js**: Contains the form for adding and updating todos.
- **TodoList.js**: Displays the list of todos.
- **TodoItem.js**: Represents a single todo item with options to edit and delete.

### Redux Slice

- **todoSlice.js**: Contains the Redux logic for managing todos, including actions and reducers.

### Store Configuration

- **store.js**: Configures the Redux store.

### App Component

- **App.js**: Main component that sets up the app structure and initializes todos from local storage.

### Styling

- **index.css**: Contains the CSS styles for the application.

### Performance Optimization

- **React.memo**: Used in `TodoList` and `TodoItem` components to prevent unnecessary re-renders.

## Performance Optimization

The application leverages React's `memo` function to optimize performance by memoizing functional components. This ensures that components only re-render when their props change, reducing unnecessary rendering and improving overall performance.

 

