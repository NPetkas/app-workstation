import { Link } from 'react-router-dom';

const TaskList = ({
  tasks,
  title,
  showTitle = true,
  showUsername = true,
}) => {
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
                  to={`/task/${task.taskAuthor}`}
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
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/tasks/${task._id}`}
            >
              {/* Join the discussion on this task. */}
            </Link>
          </div>
        ))}
    </div>
  );
};

export default TaskList;
