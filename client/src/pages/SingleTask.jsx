// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

import { QUERY_SINGLE_TASK } from '../utils/queries';

const SingleTask = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { taskId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_TASK, {
    // pass URL parameter
    variables: { taskId: taskId },
  });

  const task = data?.task || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="my-3">
      <h3 className="card-header text-light p-2 m-0">
        {task.taskAuthor} <br />
        <span style={{ fontSize: '1rem' }}>
          task created on {task.createdAt}
        </span>
      </h3>
      <div className="bg-light py-4">
        <blockquote
          className="p-4"
          style={{
            fontSize: '1.5rem',
            fontStyle: 'italic',
            border: '2px dotted #1a1a1a',
            lineHeight: '1.5',
          }}
        >
          {task.taskText}
        </blockquote>
      </div>

      <div className="my-5">
        <CommentList comments={task.comments} />
      </div>
      <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <CommentForm taskId={task._id} />
      </div>
    </div>
  );
};

export default SingleTask;
