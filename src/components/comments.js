import React, { useContext } from 'react';
import CommentsContext from '../context/comments';

const Comments = () => {
  const { comment, comments, onChange, onSubmit } = useContext(CommentsContext);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>
          Comment
          <textarea
            onChange={onChange}
            value={comment}
            style={{ display: 'block' }}
            name="comment"
          />
        </label>
        <button type="submit">Add Comment</button>
      </form>
      <ul>
        {comments.map(cmnt => (
          <li key={cmnt}>
            <p>{cmnt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
