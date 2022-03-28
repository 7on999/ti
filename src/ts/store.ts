interface Mark {
    name: string;
    tasks: number[];
}

interface Subtask {
    name: string;
    description: string;
    priority: number;
    date: string;
    taskIndex: number;
    complete: boolean;
}

interface Task {
    taskIndex: number;
    name: string;
    description: string;
    mark: Mark;
    priority: number;
    subtasks: Subtask[];
    date: string;
    completedSubtasks: Subtask[];
    compete: boolean;
}

let tasks = new Map<number, Task>();
let subtasks = new Map<number, Subtask>();
let marks = new Map<number, Mark>();

export { tasks, subtasks, marks };