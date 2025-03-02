// Interface representing a todo item
interface Idate {
  dueDate: Date;
}

interface ITodoItem extends Idate {
  id: number;
  task: string;
  completed: boolean;
}

// Interface representing the todo list core functionality
interface ITodoList {
  addTodo(task: string, date: Date): void;
  completeTodo(id: number): void;
  removeTodo(id: number): void;
  listTodos(): ITodoItem[];
}

// Class implementing the ITodoList interface
class TodoList implements ITodoList {
  private idCounter: number = 0;
  private todoItems: ITodoItem[] = [];

  // Add a new todo item
  public addTodo(task: string, date: Date): void {
    // Ensure that due date and task are not empty
    if (!task || !date) {
      console.log("❌ Invalid format or invalid date.");
      return;
    }

    // Ensure that due date is a future date
    if (date <= new Date()) {
      console.log("❌ The due date must be in the future.");
      return;
    }
    // Ensure the task doesnt already exist
    if (
      this.todoItems.some(
        (items) => items.task.toLowerCase().trim() === task.toLowerCase().trim()
      )
    ) {
      console.log(`❌ Task "${task}" already exist in your calendar.`);
      return;
    }

    // Create the task
    const assignment: ITodoItem = {
      id: ++this.idCounter,
      task: task.trim(),
      completed: false,
      dueDate: date,
    };
    this.todoItems.push(assignment);
    console.log(`✅ Task "${task}" added successfully.`);
  }

  // Mark a todo item as completed
  public completeTodo(id: number): void {
    if (this.todoItems.length < 1) {
      console.log(`📭 Your Todo list is empty. Enjoy your day.`);
      return;
    }

    const taskIndex = this.todoItems.findIndex((task) => task.id === id);
    if (taskIndex === -1) {
      console.log(`❌ Task ID ${id} not found.`);
      return;
    }

    if (this.todoItems[taskIndex].completed === true) {
      console.log(
        `❌ You've already accomplished task "${this.todoItems[taskIndex].task}"`
      );

      return;
    }

    this.todoItems[taskIndex].completed = true;
    console.log(`✅ Task ${id} marked as completed.`);
  }

  // Remove a todo item from the list
  public removeTodo(id: number): void {
    if (this.todoItems.length < 1) {
      console.log(`📭 Your Todo list is empty. Enjoy your day.`);
      return;
    }

    const taskIndex = this.todoItems.findIndex((task) => task.id === id);
    if (taskIndex === -1) {
      console.log(`❌ Task ID ${id} not found.`);
      return;
    }

    console.log(`🗑️ Removing task: "${this.todoItems[taskIndex].task}"`);
    this.todoItems.splice(taskIndex, 1);
    console.log(`✅ Task ID ${id} removed successfully.`);
  }

  // List all todo items
  public listTodos(): ITodoItem[] {
    if (this.todoItems.length < 1) {
      console.log(`📭 Your Todo list is empty. Enjoy your day.`);
      return [];
    }
    console.log("📋 Current Todo List:");
    this.todoItems.forEach((item) =>
      console.log({
        id: item.id,
        task: item.task,
        completed: item.completed,
        duDate: item.dueDate.toDateString(),
      })
    );
    return this.todoItems;
  }

  // Filter and list all completed tasks
  public filterCompleted(): ITodoItem[] {
    const completedTasks = this.todoItems.filter((task) => task.completed);

    if (completedTasks.length === 0) {
      console.log(`🟢 No completed tasks.`);
    } else {
      console.log("✅ Completed Tasks:", completedTasks);
    }
    return completedTasks;
  }

  // Update the description of a todo item
  public updateTodoDescription(id: number, newTask: string): void {
    // Ensure new task is not empty
    if (!newTask.trim()) {
      console.log("❌ New task description cannot be empty");
      return;
    }

    const taskIndex = this.todoItems.findIndex((task) => task.id === id);

    if (taskIndex === -1) {
      console.log(`❌ Task ID ${id} not found.`);
      return;
    }

    // Ensure new task is not a duplicate of an already existing task
    if (
      this.todoItems.some(
        (item) =>
          item.task.toLowerCase().trim() === newTask.toLowerCase().trim()
      )
    ) {
      console.log(`❌ Task "${newTask}" already exists.`);
      return;
    }

    console.log(
      `✏️ Task ${id} updated: from "${this.todoItems[taskIndex].task}" to "${newTask}"`
    );
    this.todoItems[taskIndex].task = newTask.trim();
  }

  // Clear all completed tasks from the list
  public clearCompletedTask(): void {
    const completedTasks = this.todoItems.filter((task) => task.completed);
    if (completedTasks.length === 0) {
      console.log(`🟢 No completed tasks to clear.`);
      return;
    }

    console.log(
      `🧹 Clearing ${completedTasks.length} completed tasks:`,
      completedTasks
    );
    this.todoItems = this.todoItems.filter((task) => !task.completed);
    console.log(`✅ All Completed task has been deleted`);
  }
}

// Examples usage showing every method and some of the error handling inplace.

// Create instances of the task
const taskList = new TodoList();
const emptyList = new TodoList();

// Add new todo items
taskList.addTodo("Buy Cake", new Date("2025-07-01"));
taskList.addTodo("Buy Drink", new Date("2025-10-05"));
taskList.addTodo("Buy Meat", new Date("2025-12-11"));
taskList.addTodo("Complete project", new Date("2024-12-31"));
taskList.addTodo("", new Date("2025-03-01"));
taskList.addTodo("Buy groceries", new Date("2025-07-01"));

// Mark a todo item as completed
taskList.completeTodo(1);
taskList.completeTodo(99);
taskList.completeTodo(1);

// Remove a todo item
taskList.removeTodo(1);
taskList.removeTodo(99);

// List all todo items
taskList.listTodos();
emptyList.listTodos();

// Filter and list all completed tasks
taskList.completeTodo(2);
taskList.filterCompleted();
emptyList.filterCompleted();

// Update the description of a todo item
taskList.updateTodoDescription(2, "Throw party");
taskList.updateTodoDescription(99, "New task");
taskList.updateTodoDescription(2, "");
taskList.updateTodoDescription(2, "Buy groceries");

// Clear all completed tasks
taskList.completeTodo(3);
taskList.clearCompletedTask();
taskList.clearCompletedTask();
