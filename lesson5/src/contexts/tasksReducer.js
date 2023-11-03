// export const ADD_TASK = 'ADD_TASK';
// export const CHANGE_TASK = 'CHANGE_TASK';
// export const DELETE_TASK = 'DELETE_TASK';

export const TASK_ACTION_TYPES = {
  addTask: 'ADD_TASK',
  changeTask: 'CHANGE_TASK',
  deleteTask: 'DELETE_TASK',
}

const reducers = {
  [TASK_ACTION_TYPES.addTask]: (tasks, action) => {
    return [
      ...tasks,
      {
        id: action.payload.id,
        text: action.payload.text,
        done: action.payload.done,
      }
    ]
  },
  [TASK_ACTION_TYPES.changeTask]: (tasks, action) => {
    return tasks.map((t) => {
      if (t.id === action.payload.task.id) {
        return action.payload.task;
      } else {
        return t;
      }
    })
  },
  [TASK_ACTION_TYPES.deleteTask]: (tasks, action) => {
    return tasks.filter((t) => t.id !== action.payload.taskId)
  }
}

// console.log(redusers)

export default function tasksReducer(tasks, action) {
  const reducer = reducers[action.type];

  if (!reducer) {
    throw new Error(`Unknown action type ${action.type}`)
  }

  return reducer(tasks, action);
}

// export default function tasksReducer(tasks, action) {
//   console.log('tasksReducer action', action);
//
//   const reducer = reducers[action.type];
//
//   if (!reducer) {
//     throw new Error(`Unknown action type ${action.type}`)
//   }
//
//   console.log('reducer', reducer);
//
//   // const newTasks = reducer(tasks, action);
//   //
//   // console.log('newTasks', newTasks);
//   //
//   // return newTasks;
//
//   return reducer(tasks, action);
//
//   // switch (action.type) {
//   //   case TASK_ACTION_TYPES.addTask: {
//   //     return [
//   //       ...tasks,
//   //       {
//   //         id: action.id,
//   //         text: action.text,
//   //         done: action.done,
//   //       }
//   //     ]
//   //   }
//   //   case TASK_ACTION_TYPES.changeTask: {
//   //     return tasks.map((t) => {
//   //       if (t.id === action.task.id) {
//   //         return action.task;
//   //       } else {
//   //         return t;
//   //       }
//   //     })
//   //   }
//   //   case TASK_ACTION_TYPES.deleteTask: {
//   //     return tasks.filter((t) => t.id !== action.taskId)
//   //   }
//   //   default: {
//   //     throw new Error(`Unknown action type ${action.type}`)
//   //   }
//   // }
//
//   // if (action.type === TASK_ACTION_TYPES.addTask) {
//   //   return [
//   //     ...tasks,
//   //     {
//   //       id: action.id,
//   //       text: action.text,
//   //       done: action.done,
//   //     }
//   //   ]
//   // }
//
//   // if (action.type === TASK_ACTION_TYPES.changeTask) {
//   //   return tasks.map((t) => {
//   //     if (t.id === action.task.id) {
//   //       return action.task;
//   //     } else {
//   //       return t;
//   //     }
//   //   })
//   // }
//
//   // if (action.type === TASK_ACTION_TYPES.deleteTask) {
//   //   return tasks.filter((t) => t.id !== action.taskId)
//   // }
//
//   // return tasks;
// }
