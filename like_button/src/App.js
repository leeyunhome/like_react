import React, { useState } from 'react';

const App = () => {
  const [liked, setLiked] = useState(false);

  const onClick = () => {
    setLiked(true);
  }
  return (
    <>
      <button onClick={onClick}>{liked ? 'liked' : 'like'}</button>
    </>
  );
};

export default App;