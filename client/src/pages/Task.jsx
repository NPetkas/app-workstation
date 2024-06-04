import { useQuery } from '@apollo/client';

import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';

import { QUERY_TASKS } from '../utils/queries';

const Task = () => {
  const { loading, data } = useQuery(QUERY_TASKS);
  const tasks = data?.tasks || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="task col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px solid #1a1a1a'
           }}
        >
          <TaskForm />
        </div>
        <div className="task-list col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <TaskList
              tasks={tasks}
              title="TASK TRACKER"
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Task;
