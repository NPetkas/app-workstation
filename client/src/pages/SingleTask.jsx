// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';


import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

import { QUERY_SINGLE_TASK } from '../utils/queries';

const SingleTask = () => {
  // Use `useParams()` to retrieve value of the route parameter `:taskId`
  const { taskId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_TASK, {
    // pass URL parameter
    variables: { taskId: taskId },
  });

  const task = data?.task || {};
  console.log('task', task)

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="card-container my-3">
     <div className="task-box bg-light py-4" style={{ border: '1px solid #1a1a1a' }}>
      <h3 className="card-header-task text-light p-2 m-0" >
        {task.taskAuthor} <br />
        <span style={{ fontSize: '1.25rem' }}>
          task created on {task.createdAt}
        </span>
      </h3>
      {/* <div className="task-box bg-light py-4" style={{ border: '1px solid #1a1a1a' }}> */}
        <blockquote 
          className="p-4"
          style={{
            fontSize: '1.5rem',
            fontStyle: 'italic',
            border: '2px solid #1a1a1a',
            lineHeight: '1.5',
          }}
        >
          {task.taskText} Task text should show up here
        </blockquote>
      </div>

      <div className="my-5">
        <CommentList comments={task.comments} />
      </div>
      <div className="comment-form m-3 p-4" style={{ border: '1px solid #1a1a1a' }}>
        <CommentForm taskId={task._id} />
      </div>
    </div>
  );
};

export default SingleTask;
