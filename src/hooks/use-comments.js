import { useState } from 'react';

const useComments = () => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const onChange = event => {
    setComment(event.target.value);
  };

  const onSubmit = event => {
    event.preventDefault();
    setComments([...comments, comment]);
    setComment('');
  };

  return {
    comment,
    comments,
    onChange,
    onSubmit
  };
};

export default useComments;
