import React, { Dispatch } from "react";
import { Task, TasksAction } from "../reducers/tasksReducer";

interface TasksContextType {
    tasks: Task[],
    dispatch: Dispatch<TasksAction>

}

const TasksContext = React.createContext<TasksContextType>({} as TasksContextType) ;

export default TasksContext;