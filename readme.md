# **Typescript Todo App**

---

## **Overview**

A simple TypeScript-based todo list application that allows users to manage their tasks efficiently. This application provides functionality to add, complete, remove, and list tasks, along with additional features like filtering completed tasks, updating task descriptions, and clearing completed tasks.

## **Table of Contents**

1. [Overview](#overview)
2. [Table of Contents](#table-of-contents)
3. [Error Handling](#error-handling)
4. [Features](#features)
5. [Installation](#installation)
6. [Usage](#usage)
7. [License](#license)
8. [Author](#author)
9. [Thanks](#thank-you)

## Error Handling

The application includes various error checks including but not limited to:

- Preventing adding duplicate tasks
- Ensuring due dates are in the future
- Checking for non-existent task IDs
- Avoids empty task descriptions

## Features

- Add a new task with a due date
- Mark a task as completed
- Remove a task from the list
- List all tasks
- Filter completed tasks
- Update the description of a task
- Clear all completed tasks

## Installation

Ensure you have [Node.js](https://nodejs.org/). The source code for this application is located in main.ts under src folder.

1. Clone this repository:
   ```sh
   git clone https://github.com/Okpara202/Typescript-todoApp.git
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the script:
   ```sh
   npm run dev
   ```
4. Navigate to console of your developer tools

## Usage

### 1. Creating a TodoList instance

```typescript
const taskList = new TodoList();
```

### 2. Adding a Task

```typescript
taskList.addTodo("Buy groceries", new Date("2025-03-01"));
```

### 3. Marking a Task as Completed

```typescript
taskList.completeTodo(1);
```

### 4. Removing a Task

```typescript
taskList.removeTodo(1);
```

### 5. Listing All Tasks

```typescript
taskList.listTodos();
```

### 6. Filtering Completed Tasks

```typescript
taskList.filterCompleted();
```

### 7. Updating a Task Description

```typescript
taskList.updateTodoDescription(2, "Finish project");
```

### 8. Clearing Completed Tasks

```typescript
taskList.clearCompletedTask();
```

## License

This project is licensed under the MIT License.

## Author

Designed and created by [Favour Okpara](https://github.com/Okpara202)

# **THANK YOU**
