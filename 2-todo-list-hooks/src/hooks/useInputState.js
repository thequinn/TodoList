import React, { useState } from 'react';

function useInputState(initialState) {
  const [state, setState] = useState(initialState);

  const handleChange = (e) => {
    setState(e.target.value); 
  }
  const reset = (e) => {
    setState("");
  }
 
  return [state, handleChange, reset];
}

export default useInputState;