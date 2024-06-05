import { useMutation } from '@apollo/client';
// import { useState } from 'react';

import { REMOVE_COMMENT } from '../../utils/mutations';
import { QUERY_ME } from '../../utils/queries';

// import Auth from '../../utils/auth';

const CommentList = ({ comments, taskId }) => {
  console.log('comments', comments, 'taskId', taskId)
  // const [commentText] = useState('');
  const [removeComment, { error }] = useMutation
  (REMOVE_COMMENT, {
    refetchQueries: [
      QUERY_ME,
      'me'
    ]
  });

  const handleRemoveComment = async (commentId) => {
    // event.preventDefault();
    try {
      const { data } = await removeComment({
        variables: {
          commentId: commentId,
          taskId: taskId
          // commentText,
          // commentAuthor: Auth.getProfile().data.name, 
        },
      });

    } catch (err) {
      console.error(err);
    }
  };
  if (!comments.length) {
    return <h3>No Comments Yet</h3>;
  }

  return (
    <>
      <h3
        className="p-5 display-inline-block"
        style={{ borderBottom: '1px dotted #1a1a1a' }}
      >
        Comments
      </h3>
      <div className="flex-row my-4">
        {comments &&
          comments.map((comments) => (
            <div key={comments._id} className="col-12 mb-3 pb-3">
              <div className="comment-card p-3 text-light">
                <h5 className="card-header">
                  {comments.commentAuthor} commented{' '}
                  <span style={{ fontSize: '0.825rem' }}>
                    on {comments.createdAt}
                  </span>
                </h5>
                <p className="card-body">{comments.commentText}</p>
                <button
                      className="btn btn-primary btn-block py-3"
                      onClick={() => handleRemoveComment(comments._id)}
                    >
                      Remove Comment
                    </button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default CommentList;
