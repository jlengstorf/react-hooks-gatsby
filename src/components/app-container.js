import React from 'react';
import CommentsContext from '../context/comments';
import useComments from '../hooks/use-comments';

const AppContainer = ({ children }) => {
  const { comment, comments, onChange, onSubmit } = useComments();

  return (
    <CommentsContext.Provider value={{ comment, comments, onChange, onSubmit }}>
      {children}
    </CommentsContext.Provider>
  );
};

export default AppContainer;
