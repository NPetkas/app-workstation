import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { REMOVE_TASK } from '../../utils/mutations';
import { QUERY_ME } from '../../utils/queries';

const TaskList = ({
  tasks,
  title,
  showTitle = true,
  showUsername = true,

}) => {
  // console.log('tasks', tasks)
  const [removeTask, { error }] = useMutation
  (REMOVE_TASK, {
  
  });


  const handleRemoveTask = async (taskId) => {
    // console.log('taskId', taskId)
    
    try {
      const { data } = await removeTask({
        variables: {
          taskId: taskId,

        },
      });
      window.location.reload();
      
    } catch (err) {
      console.error(err);
    }
  };
  if (!tasks.length) {
    return <h3>No Tasks Yet</h3>;
  }

  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      {tasks &&
        tasks.map((task) => (
          <div key={task._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {showUsername ? (
                <Link
                  className="text-light"
                  to={`/task/${task._id}`}
                >
                  {task.taskAuthor} <br />
                  <span style={{ fontSize: '1rem' }}>
                    task created on {task.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                  task created on {task.createdAt}
                  </span>
                </>
              )}
            </h4>
            <div className="card-body bg-light p-2">
              <p>{task.taskText}</p>
              <button
                      className="btn btn-primary btn-block py-1"
                      onClick={() => handleRemoveTask(task._id)}
                    >
                      Remove Task
                </button>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/task/${task._id}`}
            > Comments

            </Link>
          </div>
        ))}
    </div>
  );
};

export default TaskList;
