import React, { useState } from 'react';

function useToggle(initVal = false) {
  const [state, setState] = useState(initVal);

  const Toggle = function() {
    setState(!state);
    // alert(`useToggle.js, state: ${state}`);
  }

  return [state, Toggle];
}
export default useToggle;