export interface Task {
  id: number;
  title: string;
}

interface AddTask {
    task: Task,
    type: 'ADD'
}

interface DeleteTask {
    taskId: number,
    type: 'DELETE'
}

export type TasksAction = AddTask | DeleteTask;
const tasksReducer = (tasks: Task[], action: TasksAction):Task[] => {
    switch (action.type) {
        case 'ADD':
            return [...tasks, action.task];

        case 'DELETE':
            return tasks.filter(task => task.id !== action.taskId);

    }
}

export default tasksReducer;